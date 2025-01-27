import { useQuery } from '@tanstack/react-query'
import { apiGet } from '../api/apiService'
import { readBook } from '../../models/readBook'

// хук для получения всех книг
export const useReadBook = (bookId: string) => {
	const { data, error, isLoading } = useQuery<readBook>({
		queryKey: ['books', bookId],
		queryFn: () => apiGet<readBook>(`/books/${bookId}`),
		enabled: !!bookId, // Запрос выполняется только если есть bookId
	})
	return { data, error, isLoading }
}
