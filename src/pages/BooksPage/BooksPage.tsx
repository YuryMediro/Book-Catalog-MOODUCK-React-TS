import { BookColum } from '../../components/BooksComponents/BookColum'
import { BookList } from '../../components/BooksComponents/BookList'
import { FilterContainer } from '../../components/Filter/FilterContainer/FilterContainer'
import { Layout } from '../../components/Layout/Layout'
import { Pagination } from '../../components/UI/Pagination/Pagination'
import { Preloader } from '../../components/UI/Preloader/Preloader'
import { useBooks } from '../../hooks/useBooks'
import { useBooksHooks } from '../../shared/apiHooks/apiHooksBooks'
import s from './BooksPage.module.css'

export const BooksPage = () => {
	const { colum, handleOnClickView } = useBooks({ initialColum: false })
	const { data: books, isLoading, error } = useBooksHooks()

	if (isLoading)
		return (
			<div className={s.preloader}>
				<Preloader />
			</div>
		)
	if (error) return <p>Ошибка загрузки данных: {error.message}</p>
	return (
		<div className={s.wrapper}>
			<Layout>
				<div className={s.layout}>
					<div className={s.filter}>
						<FilterContainer setColum={handleOnClickView} />
					</div>
					<div className={s.pagination}>
						{colum ? (
							<div className={s.bookColum}>
								<BookColum />
							</div>
						) : (
							<div className={s.booksList}>
								{books?.map(book => (
									<BookList key={book._id} book={book} />
								))}
							</div>
						)}
						<Pagination></Pagination>
					</div>
				</div>
			</Layout>
		</div>
	)
}
