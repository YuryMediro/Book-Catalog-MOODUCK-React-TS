import { useQuery } from '@tanstack/react-query'
import { TComment } from 'models/Books'
import { apiGet } from 'shared/api/apiService'

// Хук для получения комментариев к книге
export const useGetComments = (bookId: string) => {
	const { data, error, isLoading } = useQuery<TComment[]>({
		queryKey: ['comments', bookId],
		queryFn: () => apiGet<TComment[]>(`/books/${bookId}/comments`),
	})

	return { data, error, isLoading }
}

