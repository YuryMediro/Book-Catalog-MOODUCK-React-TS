import { useInput } from './useInpur'
import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { sortAuthorsGenres } from '@utils/sortAuthorsGenres'
import { getUniqueObjects } from '@utils/getUniqObject'
import { AUTHORS, GENRES } from 'constants/constants'
import { useMemo, useState } from 'react'
import { Book } from 'models/Books'

interface IAppliedFilters {
	authors: string[]
	genres: string[]
}

export const useFilterBook = (initialValue: string) => {
	const value = useInput(initialValue)
	// Состояние для выбранных фильтров
	const [appliedFilters, setAppliedFilters] = useState<IAppliedFilters>({
		authors: [],
		genres: [],
	})

	const [authors, setAuthors] = useState<IAuthorsAndGenres[]>(
		sortAuthorsGenres(getUniqueObjects(AUTHORS))
	)
	const [genres, setGenres] = useState<IAuthorsAndGenres[]>(
		sortAuthorsGenres(getUniqueObjects(GENRES))
	)

	//Переключение состояния автора (выбран/не выбран):
	const handleOnClickAuthor = (id: string) => {
		setAuthors(prev =>
			prev.map(author =>
				author.id === id ? { ...author, checked: !author.checked } : author
			)
		)
	}
	//Переключение состояния жанра (выбран/не выбран):
	const handleOnClickGenre = (id: string) => {
		setGenres(prev =>
			prev.map(genre =>
				genre.id === id ? { ...genre, checked: !genre.checked } : genre
			)
		)
	}

	//Очистка выбранных элементов:
	const clear = () => {
		setGenres(prev => prev.map(genre => ({ ...genre, checked: false })))
		setAuthors(prev => prev.map(author => ({ ...author, checked: false })))
		setAppliedFilters({
			authors: [],
			genres: [],
		})
	}

	// Функция, которая срабатывает при нажатии на кнопку "Применить фильтры"
	const applyFilters = () => {
		const selectedAuthors = authors.filter(a => a.checked).map(a => a.author)
		const selectedGenres = genres.filter(g => g.checked).map(g => g.author)

		setAppliedFilters({
			authors: selectedAuthors,
			genres: selectedGenres,
		})
	}

	// Фильтрация книг на основе appliedFilters
	const filterBooks = (books: Book[]): Book[] => {
		return books.filter(book => {
			let valid = true
			if (appliedFilters.authors.length > 0) {
				// Если выбран хотя бы один автор, проверяем, что у книги есть один из них
				valid =
					valid &&
					book.authors.some(author => appliedFilters.authors.includes(author))
			} //Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке
			//includes() возвращает boolean значение, которое указывает на присутствие или отсутствие элемента.
			if (appliedFilters.genres.length > 0) {
				// Если выбран хотя бы один жанр, проверяем, что у книги есть один из них
				valid =
					valid &&
					book.genres.some(genre => appliedFilters.genres.includes(genre))
			}
			return valid
		})
	}

	//Логика фильтрации авторов по поисковому запросу
	const filteredAuthors = useMemo(() => {
		if (!value.value.trim()) return authors //Метод trim() удаляет пробельные символы с начала и конца строки.
		return authors.filter(author =>
			//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
			author.author
				.toLocaleLowerCase()
				.includes(value.value.toLocaleLowerCase())
		)
	}, [authors, value.value])

	return {
		genres,
		authors,
		value,
		filteredAuthors,
		handleOnClickAuthor,
		handleOnClickGenre,
		clear,
		filterBooks,
		applyFilters,
	}
}
