import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { apiPost } from 'shared/api/apiService'

export const useLogoutHooks = () => {
	const navigate = useNavigate()

	const mutation = useMutation({
		mutationFn: async () => await apiPost('/auth/logout', {}),
		onSuccess: () => {
			// очищаем данные авторизации
			localStorage.removeItem('token')

			navigate('/login')
		},
		onError: error => {
			console.error('Ошибка при выходе:', error)
		},
	})
	return mutation
}
