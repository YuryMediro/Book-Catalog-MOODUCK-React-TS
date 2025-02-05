import { useInput } from './useInpur'
import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { sortAuthorsGenres } from '@utils/sortAuthorsGenres'
import { getUniqueObjects } from '@utils/getUniqObject'
import { AUTHORS, GENRES } from 'constants/constants'
import { useMemo, useState } from 'react'

export const useFilterBook = (initialValue: string) => {
	const value = useInput(initialValue)

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
	}
}
