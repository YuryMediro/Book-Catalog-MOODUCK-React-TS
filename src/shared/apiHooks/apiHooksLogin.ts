import { useMutation } from '@tanstack/react-query'
import { formLoginValues } from '@utils/types/formLoginValues'
import { useNavigate } from 'react-router'
import { apiPost } from 'shared/api/apiService'
import { AuthResponse } from 'shared/http/apiInstance'

export const useLoginHooks = () => {
	const navigate = useNavigate()

	const mutation = useMutation<AuthResponse, Error, formLoginValues>({
		mutationFn: (data: formLoginValues) =>
			apiPost<AuthResponse>('/auth/login', data),
		onSuccess: data => {
			// Сохраняем токен в localStorage
			localStorage.setItem('token', data.accessToken)
			
			navigate('/booksPage')
		},
		onError: error => {
			console.error('Ошибка авторизации:', error)
		},
	})
	return mutation
}
