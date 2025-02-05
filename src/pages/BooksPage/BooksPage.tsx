import { useState } from 'react'
import { FilterContainer } from '@components/Filter/FilterContainer/FilterContainer'
import { Layout } from '@components/Layout/Layout'
import { Pagination } from '@components/UI/Pagination/Pagination'
import s from './BooksPage.module.css'
import { Preloader } from '@components/UI/Preloader/Preloader'
import { BookColum } from '@components/BooksComponents/BookColum'
import { BookList } from '@components/BooksComponents/BookList'
import { useBooks } from '@hooks/useBooks'
import { ScrollButton } from '@components/UI/ScrollButton/ScrollButton'
import { useBooksHooks } from 'shared/apiHooks/apiHooksBooks'
import { useFilterBook } from '@hooks/useFilterBook'
import { Book } from 'models/Books'

interface IAppliedFilters {
	authors: string[]
	genres: string[]
}

export const BooksPage = () => {
	const [page, setPage] = useState<number>(1)
	const ITEMS_PER_PAGE = 16

	const { colum, handleOnClickView } = useBooks({ initialColum: false })

	const { data, isLoading, error } = useBooksHooks({ page: 1, limit: 1000 })

	const {
		genres,
		authors,
		filteredAuthors,
		handleOnClickAuthor,
		handleOnClickGenre,
		clear,
		value,
	} = useFilterBook('')

	// Состояние для выбранных фильтров
	const [appliedFilters, setAppliedFilters] = useState<IAppliedFilters>({
		authors: [],
		genres: [],
	})

	// Функция, которая срабатывает при нажатии на кнопку "Применить фильтры"
	const applyFilters = () => {
		const selectedAuthors = authors.filter(a => a.checked).map(a => a.author)
		const selectedGenres = genres.filter(g => g.checked).map(g => g.author)

		setAppliedFilters({
			authors: selectedAuthors,
			genres: selectedGenres,
		})
		setPage(1)
	}

	// Функция для очистки фильтров
	const clearFilters = () => {
		clear() // сбрасываем выбранные элементы в хуке
		setAppliedFilters({
			authors: [],
			genres: [],
		})
		setPage(1)
	}

	// Фильтрация книг на основе appliedFilters
	const filteredBooks: Book[] =
		data?.books.filter(book => {
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
		}) || []

	// Расчёт количества страниц для клиентской пагинации
	const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE)
	// Выбор книг для текущей страницы
	const currentBooks = filteredBooks.slice(
		(page - 1) * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE
	)
	return (
		<div className={s.wrapper}>
			<Layout>
				<ScrollButton />
				<div className={s.layout}>
					<div className={s.filter}>
						<FilterContainer
							setColum={handleOnClickView}
							genres={genres}
							searchedAuthors={filteredAuthors}
							handleOnClickAuthor={handleOnClickAuthor}
							handleOnClickGenre={handleOnClickGenre}
							value={value.value}
							handleOnChange={value.bind.onChange}
							clear={clearFilters}
							onApplyFilters={applyFilters} // передаём функцию применения фильтра
						/>
					</div>
					<div className={s.pagination}>
						{isLoading ? (
							<div className={s.preloader}>
								<Preloader />
							</div>
						) : error ? (
							<div className={s.booksError}>
								<p className={s.errorTitle}>
									Ошибка загрузки данных: {error.message}
								</p>
							</div>
						) : colum ? (
							<div className={s.bookColum}>
								{currentBooks.map(b => (
									<BookColum key={b._id} book={b} />
								))}
							</div>
						) : (
							<div className={s.booksList}>
								{currentBooks.map(b => (
									<BookList key={b._id} book={b} />
								))}
							</div>
						)}
						<Pagination
							totalPages={totalPages}
							currentPage={page}
							setPage={setPage}
						/>
					</div>
				</div>
			</Layout>
		</div>
	)
}
