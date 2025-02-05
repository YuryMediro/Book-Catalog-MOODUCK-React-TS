import { useEffect, useState } from 'react'
import { useInput } from './useInpur'
import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { sortAuthorsGenres } from '@utils/sortAuthorsGenres'
import { getUniqueObjects } from '@utils/getUniqObject'
import { AUTHORS, GENRES } from 'constants/constants'

export const useFilterBook = (initialValue: string) => {
	const value = useInput(initialValue)

	const [authors, setAuthors] = useState<IAuthorsAndGenres[]>(
		sortAuthorsGenres(getUniqueObjects(AUTHORS))
	)
	const [genres, setGenres] = useState<IAuthorsAndGenres[]>(
		sortAuthorsGenres(getUniqueObjects(GENRES))
	)
	const [searchedAuthors, setSearchedAuthors] =
		useState<IAuthorsAndGenres[]>(authors)

	//Переключение состояния автора (выбран/не выбран):
	const handleOnClickAuthor: (id: string) => void = id => {
		setAuthors(
			authors.map(author =>
				author.id === id ? { ...author, checked: !author.checked } : author
			)
		)
	}
	//Переключение состояния жанра (выбран/не выбран):
	const handleOnClickGenre: (id: string) => void = id => {
		setGenres(
			genres.map(genre =>
				genre.id === id ? { ...genre, checked: !genre.checked } : genre
			)
		)
	}

	//Очистка выбранных элементов:
	const clear: () => void = () => {
		setGenres(
			genres.map(genre =>
				genre.checked ? { ...genre, checked: !genre.checked } : genre
			)
		)
		setAuthors(
			searchedAuthors.map(author =>
				author.checked ? { ...author, checked: !author.checked } : author
			)
		)
	}

	//Логика фильтрации авторов по поисковому запросу
	useEffect(() => {
		const filteredAuthors = authors.filter(author =>
			author.author.toLowerCase().includes(value.value.toLowerCase())
		)

		setSearchedAuthors(value.value ? filteredAuthors : authors)
	}, [value])

	return {
		genres,
		value,
		searchedAuthors,

		handleOnClickAuthor,
		handleOnClickGenre,
		clear,
	}
}
