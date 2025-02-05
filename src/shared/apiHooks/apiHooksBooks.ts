// useBooksHooks.ts
import { useQuery } from '@tanstack/react-query'
import { TBooks } from 'models/Books'
import { apiGet } from 'shared/api/apiService'

interface UseBooksHooksParams {
  page: number
  limit?: number
}

export const useBooksHooks = ({ page, limit = 16 }: UseBooksHooksParams) => {
  const { data, error, isLoading } = useQuery<TBooks>({
    // добавляем лимит в ключ запроса, чтобы кеширование работало правильно
    queryKey: ['books', page, limit],
    queryFn: () => apiGet<TBooks>(`/books?page=${page}&limit=${limit}`),
  })
  return { data, error, isLoading }
}
