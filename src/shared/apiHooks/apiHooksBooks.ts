import { useQuery } from '@tanstack/react-query'
import { TBooks } from 'models/Books'
import { apiGet } from 'shared/api/apiService'

// хук для получения всех книг
export const useBooksHooks = (page: number) => {
	const { data, error, isLoading } = useQuery<TBooks>({
		queryKey: ['books', page],
		queryFn: () => apiGet<TBooks>(`/books?page=${page}&limit=16`),
	})
	return { data, error, isLoading }
}
