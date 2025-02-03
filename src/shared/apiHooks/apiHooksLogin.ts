import { useMutation } from '@tanstack/react-query'
import { formLoginValues } from '@utils/types/formLoginValues'
import { useUser } from 'context/UserContext'
import { useNavigate } from 'react-router'
import { apiPost } from 'shared/api/apiService'
import { AuthResponse } from 'shared/http/apiInstance'

export const useLoginHooks = (setServerError: (message: string) => void) => {
	const { checkAuth } = useUser()
	const navigate = useNavigate()

	const mutation = useMutation<AuthResponse, Error, formLoginValues>({
		mutationFn: (data: formLoginValues) =>
			apiPost<AuthResponse>('/auth/login', data),
		onSuccess: async () => {
			await checkAuth()
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
