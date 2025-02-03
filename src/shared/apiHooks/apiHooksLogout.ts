import { useMutation } from "@tanstack/react-query"
import { useUser } from "context/UserContext"
import { useNavigate } from "react-router"
import { apiPost } from "shared/api/apiService"

export const useLogoutHooks = () => {
	const { logout } = useUser()
	const navigate = useNavigate()

	const mutation = useMutation({
		mutationFn: async () => await apiPost('/auth/logout', {}),
		onSuccess: () => {
			logout()
			navigate('/login')
		},
		onError: error => {
			console.error('Ошибка при выходе:', error)
		},
	})
	return mutation
}
