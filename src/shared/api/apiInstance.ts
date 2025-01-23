import axios, { AxiosInstance } from 'axios'

const BASE_URL = 'http://localhost:3000/api'

class APiError extends Error {
	constructor(public response: Response) {
		super('APiError:' + response.status)
	}
}

// Создаем инстанс Axios
const api: AxiosInstance = axios.create({
	baseURL: BASE_URL, // Базовый URL вашего API
	withCredentials: true, //необходимость отправлять файлы cookie вместе с запросом на сервер
	timeout: 1000, // Таймаут запроса в миллисекундах
	headers: { 'Content-Type': 'application/json' }, // Другие заголовки по умолчанию
})

// Сохраните токен в локальное хранилище
const accessToken =
	'sl.CFF-CzEUFB9DQEWQV2zVuwsqV3VJVm4sJhcqY23Gue12pRkf1V60o9kXgKy9R6F6XVvwX6ZFGJQ1JST_sM_rcRNoi97zkyyGpgACjQF6Dbp65-PMvNeVeXzF6rpwpx8X8qfJ_2alsvqa'
localStorage.setItem('authToken', accessToken)

// Интерцептор запросов для аутентификации
api.interceptors.request.use(
	config => {
		// Добавляем токен авторизации в заголовок
		const token = localStorage.getItem('token')
		if (token) {
			config.headers.Authorization = `Bear ${token}`
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


// export const jsonApiInstance = async <T>(
// 	url: string,
// 	init?: RequestInit & { json?: unknown }
// ) => {
// 	let headers = init?.headers ?? {}

// 	if (init?.json) {
// 		headers = {
// 			'Content-Type': 'application/json',
// 			...headers,
// 		}

// 		init.body = JSON.stringify(init.json)
// 	}

// 	const result = await fetch(`${BASE_URL}${url}`, {
// 		...init,
// 		headers,
// 	})

// 	if (!result.ok) {
// 		throw new APiError(result)
// 	}

// 	const data = (await result.json()) as Promise<T>

// 	return data
// }
