import axios, { AxiosInstance } from 'axios'

const BASE_URL = 'http://localhost:3000/api'

class APiError extends Error {
	constructor(public response: Response) {
		super('APiError:' + response.status)
	}
}

// Создаем инстанс Axios
export const api: AxiosInstance = axios.create({
	baseURL: BASE_URL, // Базовый URL вашего API
	withCredentials: true, //необходимость отправлять файлы cookie вместе с запросом на сервер
	headers: { 'Content-Type': 'application/json' }, //Другие заголовки по умолчанию
})

// Сохраните токен в локальное хранилище

// Интерцептор запросов для аутентификации
api.interceptors.request.use(
	config => {
		// Добавляем токен авторизации в заголовок
		const token = localStorage.getItem('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	//создаем промис, который сразу же переходит в состояние "отклонено" (rejected) с указанной ошибкой.
	error => {
		return Promise.reject(error)
	}
)

//Интерцептор ответов для аутентификации
api.interceptors.response.use(
	config => {
		return config
	},
	error => {
		if (error.response) {
			throw new APiError(error.response)
		}
		return Promise.reject(error)
	}
)
