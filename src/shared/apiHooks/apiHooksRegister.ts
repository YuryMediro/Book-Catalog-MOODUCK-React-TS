import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { apiPost } from 'shared/api/apiService'
import { AuthResponse } from 'shared/http/apiInstance'

export interface RegisterProps {
	email: string
	username: string
	password: string
}

export const useRegisterHooks = () => {
	const navigate = useNavigate()

	const mutation = useMutation<AuthResponse, Error, RegisterProps>({
		mutationFn: (data: RegisterProps) =>
			apiPost<AuthResponse>('/auth/registration', data),
		onSuccess: data => {
			// Сохраняем токен в localStorage
			localStorage.setItem('token', data.accessToken)

			navigate('/login')
		},
		onError: error => {
			console.error('Ошибка регистрации:', error)
		},
	})
	return mutation
}
