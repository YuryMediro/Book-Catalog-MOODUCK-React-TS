import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { apiPost } from 'shared/api/apiService'
import { AuthResponse } from 'shared/http/apiInstance'

export interface RegisterProps {
	email: string
	username: string
	password: string
}

export const useRegisterHooks = (setServerError: (message: string) => void) => {
	const navigate = useNavigate()

	const mutation = useMutation<AuthResponse, Error, RegisterProps>({
		mutationFn: (data: RegisterProps) =>
			apiPost<AuthResponse>('/auth/registration', data),
		onSuccess: data => {
			console.log('Registration successful:', data)
			// Сохраняем токен в localStorage
			localStorage.setItem('token', data.accessToken)

			navigate('/login')
		},
		onError: (error: any) => {
			console.log(error)
			if (error.response?.data?.message) {
				setServerError(error.response.data.message)
			} 
		},
	})
	return mutation
}

// import { useMutation } from '@tanstack/react-query'
// import { useNavigate } from 'react-router'
// import { apiPost } from 'shared/api/apiService'
// import { AuthResponse } from 'shared/http/apiInstance'
// import { useUser } from 'context/UserContext'

// export interface RegisterProps {
// 	email: string
// 	username: string
// 	password: string
// }

// export const useRegisterHooks = (setServerError: (message: string) => void) => {
// 	const navigate = useNavigate()
// 	const { checkAuth } = useUser() // Получаем checkAuth из контекста

// 	const mutation = useMutation<AuthResponse, Error, RegisterProps>({
// 		mutationFn: (data: RegisterProps) =>
// 			apiPost<AuthResponse>('/auth/registration', data),
// 		onSuccess: async () => {
// 			try {
// 				await checkAuth() // Проверяем аутентификацию после успешной регистрации
// 				navigate('/booksPage') // Перенаправляем на защищенную страницу
// 			} catch (error) {
// 				navigate('/login') // Если аутентификация не удалась, на страницу входа
// 			}
// 		},
// 		onError: (error: any) => {
// 			console.log(error)
// 			if (error.response?.data?.message) {
// 				setServerError(error.response.data.message)
// 			} else {
// 				setServerError('Произошла ошибка при регистрации')
// 			}
// 		},
// 	})
// 	return mutation
// }
