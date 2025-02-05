import {  useQuery } from '@tanstack/react-query'
import { User } from 'models/User'
import { apiGet } from 'shared/api/apiService'

export const useUserData = (userId: string) => {
	const { data, error, isLoading } = useQuery<User>({
		queryKey: ['userData', userId],
		queryFn: () => apiGet<User>(`/users/${userId}`),
		enabled: !!userId,
		
	})
	return { data, error, isLoading }
}

