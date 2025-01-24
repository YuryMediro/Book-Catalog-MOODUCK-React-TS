import { AxiosResponse } from 'axios'
import { api } from '../http/apiInstance'

//создаем интерфейс ApiResponse, который расширяет AxiosResponse и
//добавляет типизацию для данных (data). Это позволяет нам указать, что
//данные в ответе будут иметь тип T.
interface ApiResponse<T> extends AxiosResponse {
	data: T
}

// Базовая функция для GET-запросов
export const apiGet = async <T>(endpoint: string): Promise<T> => {
	const response: ApiResponse<T> = await api.get(endpoint)
	return response.data
}
// Базовая функция для POST-запросов
export const apiPost = async <T>(endpoint: string, data: any): Promise<T> => {
	const response: ApiResponse<T> = await api.post(endpoint, data)
	return response.data
}
// Базовая функция для PUT-запросов
export const apiPut = async <T>(endpoint: string, data: any): Promise<T> => {
	const response: ApiResponse<T> = await api.put(endpoint, data)
	return response.data
}
// Базовая функция для DELETE-запросов
export const apiDelete = async <T>(endpoint: string): Promise<T> => {
	const response: ApiResponse<T> = await api.delete(endpoint)
	return response.data
}
// Базовая функция для PATCH-запросов
export const apiPatch = async <T>(endpoint: string, data: any): Promise<T> => {
	const response: ApiResponse<T> = await api.patch(endpoint, data)
	return response.data
}
