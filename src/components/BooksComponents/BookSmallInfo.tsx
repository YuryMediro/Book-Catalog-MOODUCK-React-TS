import { readBook } from 'models/readBook'
import s from './BookSmallInfo.module.css'
import coverImageBook from 'assets/img/coverIsMissing.svg'
import { Button } from '@components/UI/Button/Button'

export interface BookSmallInfoProps {
	book: readBook
}

export const BookSmallInfo = ({ book }: BookSmallInfoProps) => {
	return (
		<section className={s.wrapper}>
			<img
				src={book.img?.mediumFingernail || coverImageBook}
				alt={book.title}
				className={s.image}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null
					currentTarget.src = coverImageBook
				}}
			/>
			<div className={s.bookInfo}>
				<div className={s.bookTitle}>
					<p className={s.title}>{book.title || 'Название отсутствует'}</p>
					<p className={s.author}>
						{book.authors?.length ? (
							book.authors.join(', ') //eсли переводчики есть, объединяет их в строку, разделяя запятыми
						) : (
							<div> — </div>
						)}
					</p>
				</div>
				<div className={s.bookDescription}>
					<p className={s.description}>
						{book.description || 'Описание отсутствует'}
					</p>
					<div className={s.readMore}>Читать далее</div>
				</div>
				<Button className={s.button}>Хочу прочитать</Button>
			</div>
			<div className={s.details}>
				<div className={s.detail}>
					<p className={s.detailLabel}>Жанр</p>
					<p className={s.detailValue}>
						{book.genres?.length ? (
							book.genres.join(', ') //eсли переводчики есть, объединяет их в строку, разделяя запятыми
						) : (
							<div> — </div>
						)}
					</p>
				</div>
				<div className={s.detail}>
					<p className={s.detailLabel}>Издательство</p>
					<p className={s.detailValue}>
						{book.publisher || 'Издательство отсутствует'}
					</p>
				</div>
				<div className={s.detail}>
					<p className={s.detailLabel}>Серия</p>
					<p className={s.detailValue}>
						{book.bookSeries || 'Серия отсутствует'}
					</p>
				</div>
				<div className={s.detail}>
					<p className={s.detailLabel}>Количество страниц</p>
					<p className={s.detailValue}>
						{book.pageCount || 'Количество страниц отсутствует'}
					</p>
				</div>

				<div className={s.allDetails}>Все характеристики</div>
			</div>
		</section>
	)
}
