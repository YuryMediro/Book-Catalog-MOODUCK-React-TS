import { NavLink } from 'react-router'
import s from './BookList.module.css'
import { Button } from '../UI/Button/Button'
import { Book } from '../../models/Book'
import coverImageBook from '../../assets/img/coverIsMissing.svg'

interface BookListProps {
	book: Book
}

export const BookList = ({ book }: BookListProps) => {
	return (
		<div className={s.container}>
			<NavLink to={`/bookPage/${book._id}`}>
				<img
					src={book.img.largeFingernail}
					alt={book.title}
					className={s.image}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null
						currentTarget.src = coverImageBook
					}}
				/>
			</NavLink>
			<div className={s.content}>
				<NavLink to={`/bookPage/${book._id}`}>
					<p className={s.title}>{book.title}</p>
				</NavLink>
				<NavLink to={`/bookPage/${book._id}`}>
					<p className={s.authors}>{book.authors}</p>
				</NavLink>
			</div>
			<Button className={s.button}>Хочу прочитать</Button>
		</div>
	)
}
