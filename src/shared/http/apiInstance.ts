import axios, { AxiosInstance } from 'axios'
import { User } from 'models/User'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL_AUTH = import.meta.env.VITE_API_AUTH_URL
const BASE_URL_USER = 'http://localhost:3000/api/users'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: User
}

// Создаем инстанс Axios
export const api: AxiosInstance = axios.create({
	baseURL: BASE_URL, // Базовый URL вашего API
	withCredentials: true, //необходимость отправлять файлы cookie вместе с запросом на сервер
	headers: { 'Content-Type': 'application/json' }, //Другие заголовки по умолчанию
})
export const api_users: AxiosInstance = axios.create({
	baseURL: BASE_URL_USER, // Базовый URL вашего API
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
api_users.interceptors.request.use(
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
	async error => {
		const originalRequest = error.config
		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const response = await axios.get<AuthResponse>(
					`${BASE_URL_AUTH}/refresh`,
					{ withCredentials: true }
				)
				localStorage.setItem('token', response.data.accessToken)
				return api.request(originalRequest)
			} catch (e) {
				console.log('Не авторизован')
			}
		}
		throw error
	}
)

