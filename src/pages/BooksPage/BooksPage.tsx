import { BookColum } from '../../components/BooksComponents/BookColum'
import { BookList } from '../../components/BooksComponents/BookList'
import { FilterContainer } from '../../components/Filter/FilterContainer/FilterContainer'
import { Layout } from '../../components/Layout/Layout'
import { useBooks } from '../../hooks/useBooks'
import s from './BooksPage.module.css'

export const BooksPage = () => {
	const { colum, handleOnClickView } = useBooks({ initialColum: false })

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
								<BookColum />
								<BookColum />
								<BookColum />
								<BookColum />
								<BookColum />
								<BookColum />
								<BookColum />
							</div>
						) : (
							<div className={s.booksList}>
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
								<BookList id={''} title={''} authors={[]} img={''} />
							</div>
						)}
					</div>
				</div>
			</Layout>
		</div>
	)
}
