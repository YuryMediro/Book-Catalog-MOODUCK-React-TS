import { useState, useEffect } from 'react'
import { Book } from 'models/Books'

interface UseSearchBooksProps {
	books: Book[] 
	searchQuery: string // Введенный пользователем текст для поиска
}

export const useSearchBooks = ({ books, searchQuery }: UseSearchBooksProps) => {
	const [filteredBooks, setFilteredBooks] = useState<Book[]>(books) // Локальное состояние для отфильтрованных книг

	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilteredBooks(books) // Если поле поиска пустое, возвращаем полный список книг
		} else {
			const lowerSearch = searchQuery.toLowerCase() // Приводим ввод пользователя к нижнему регистру

			setFilteredBooks(
				books.filter(
					book =>
						book.title.toLowerCase().includes(lowerSearch) || // Проверяем, есть ли запрос в названии книги
						book.authors.some(author =>
							author.toLowerCase().includes(lowerSearch)
						) // Проверяем, есть ли запрос в имени автора
				)
			)
		}
	}, [books, searchQuery]) // Пересчитываем фильтрацию при изменении списка книг или поискового запроса

	return { filteredBooks } 
}
