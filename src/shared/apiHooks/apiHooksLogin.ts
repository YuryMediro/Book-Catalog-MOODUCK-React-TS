import { useMutation } from '@tanstack/react-query'
import { formLoginValues } from '@utils/types/formLoginValues'
import { useUser } from 'context/UserContext'
import { useNavigate } from 'react-router'
import { apiPost } from 'shared/api/apiService'
import { AuthResponse } from 'shared/http/apiInstance'

export const useLoginHooks = (setServerError: (message: string) => void) => {
	const { setUser, setToken } = useUser()
	const navigate = useNavigate()

	const mutation = useMutation<AuthResponse, Error, formLoginValues>({
		mutationFn: (data: formLoginValues) =>
			apiPost<AuthResponse>('/auth/login', data),
		onSuccess: data => {
			console.log(data)
			setUser({ id: data.user.id }) // Сохраняем пользователя
			console.log('User id saved', data.user.id)
			setToken(data.accessToken) // Сохраняем токен
			console.log('Token id saved', data.accessToken)
			navigate('/booksPage')
		},
		onError: (error: any) => {
			if (error.response?.data?.message) {
				setServerError(error.response.data.message)
			}
		},
	})
	return mutation
}
