import { NavLink } from 'react-router'
import s from './BookColum.module.css'
import { Line } from '../UI/Line/Line'
import { Button } from '../UI/Button/Button'
import { Book } from '../../models/Books'
import coverImageBook from '../../assets/img/coverIsMissing.svg'

interface BookListProps {
	book: Book
}

export const BookColum = ({ book }: BookListProps) => {
	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
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
					<div className={s.contentTitle}>
						<NavLink to={`/bookPage/${book._id}`}>
							<p className={s.title}>{book.title}</p>
						</NavLink>
						<NavLink to={`/bookPage/${book._id}`}>
							<p className={s.author}>{book.authors}</p>
						</NavLink>
					</div>
					<NavLink to={`/bookPage/${book._id}`}>
						<p className={s.description}>{book.description}</p>
					</NavLink>
					<div className={s.buttonContainer}>
						<NavLink to={'/bookPage'}>
							<p className={s.publisher}>
								{book.publisher} , {book.pageCount} страницы
							</p>
						</NavLink>
						<Button className={s.button}>Хочу прочитать</Button>
					</div>
				</div>
			</div>
			<Button className={s.hiddenButton}>Хочу прочитать</Button>
			<Line />
		</div>
	)
}
