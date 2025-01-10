import { BookList } from '../../components/BooksComponents/BookList'
import { FilterContainer } from '../../components/Filter/FilterContainer/FilterContainer'
import { Layout } from '../../components/Layout/Layout'
import s from './BooksPage.module.css'
export const BooksPage = () => {
	return (
		<div className={s.wrapper}>
			<Layout>
				<div className={s.layout}>
					<FilterContainer />
					<div className={s.pagination}>
						<div className={s.booksList}>
							<BookList />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}
