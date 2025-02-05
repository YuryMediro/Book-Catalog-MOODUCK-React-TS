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
	const { colum, handleOnClickView } = useBooks({ initialColum: false })
	const { data, isLoading, error } = useBooksHooks(page)

	const totalPages = data?.totalPages || 1

	const {
		genres,
		searchedAuthors,
		resultAuthors,
		resultGenres,
		handleOnClickAuthor,
		handleOnClickGenre,
		clear,
		createResults,
		value,
	} = useFilterBook('')

	return (
		<div className={s.wrapper}>
			<Layout>
				<ScrollButton />
				<div className={s.layout}>
					<div className={s.filter}>
						<FilterContainer
							setColum={handleOnClickView}
							genres={genres}
							searchedAuthors={searchedAuthors}
							handleOnClickAuthor={handleOnClickAuthor}
							handleOnClickGenre={handleOnClickGenre}
							value={value.value}
							handleOnChange={value.bind.onChange}
							clear={clear}
							createResults={createResults}
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
								{data?.books?.map(book => (
									<BookColum key={book._id} book={book} />
								))}
							</div>
						) : (
							<div className={s.booksList}>
								{data?.books?.map(book => (
									<BookList key={book._id} book={book} />
								))}
							</div>
						)}
						<Pagination
							totalPages={totalPages}
							currentPage={page}
							setPage={setPage}
						></Pagination>
					</div>
				</div>
			</Layout>
		</div>
	)
}
