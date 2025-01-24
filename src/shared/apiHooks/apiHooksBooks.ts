import { useQuery } from '@tanstack/react-query'
import { Book } from '../../models/Book'
import { apiGet } from '../api/apiService'

// хук для получения всех книг
export const useBooksHooks = () => {
	const { data, error, isLoading } = useQuery<Book[]>({
		queryKey: ['books'],
		queryFn: () => apiGet<Book[]>('/books'),
	})
	return { data, error, isLoading }
}
