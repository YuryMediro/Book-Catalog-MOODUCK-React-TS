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

export const BooksPage = () => {
	const [page, setPage] = useState<number>(1)
	const ITEMS_PER_PAGE = 16

	const { colum, handleOnClickView } = useBooks({ initialColum: false })
	const { data, isLoading, error } = useBooksHooks({ page: 1, limit: 1000 })

	const {
		genres,
		filteredAuthors,
		handleOnClickAuthor,
		handleOnClickGenre,
		clear,
		value,
		filterBooks,
		applyFilters,
	} = useFilterBook('')

	// Фильтрация книг с использованием хука
	const filteredBooks = filterBooks(data?.books || [])
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
							clear={clear}
							onApplyFilters={applyFilters} 
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
