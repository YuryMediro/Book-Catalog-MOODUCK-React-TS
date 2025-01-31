import s from './BookFullInfo.module.css'
import { BookSmallInfoProps } from './BookSmallInfo'

export const BookFullInfo = ({ book }: BookSmallInfoProps) => {
	return (
		<section className={s.wrapper}>
			<p className={s.sectionTitle}>О книге</p>
			<p className={s.description}>
				{book.description || 'Описание отсутствует'}
			</p>

			<div className={s.details}>
				<p className={s.titleDetails}>Характеристики</p>
				<div className={s.detailsContainer}>
					<div className={s.gap}>
						<div className={s.detail}>
							<p className={s.detailLabel}>Жанр</p>
							<p className={s.detailValue}>
								{book.genres?.length
									? book.genres.join(', ') //eсли переводчики есть, объединяет их в строку, разделяя запятыми
									: '—'}
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
							<p className={s.detailLabel}>Переплет</p>
							<p className={s.detailValue}>
								{book.bookBinding || 'Переплет отсутствует'}
							</p>
						</div>
					</div>
					<div className={s.gap}>
						<div className={s.detail}>
							<p className={s.detailLabel}>Художник</p>
							<p className={s.detailValue}>
								{book.painters?.length
									? book.painters.join(', ') //eсли переводчики есть, объединяет их в строку, разделяя запятыми
									: '—'}
							</p>
						</div>
						<div className={s.detail}>
							<p className={s.detailLabel}>Переводчик</p>
							<p className={s.detailValue}>
								{book.translaters?.length
									? book.translaters.join(', ') //eсли переводчики есть, объединяет их в строку, разделяя запятыми
									: '—'}
							</p>
						</div>
						<div className={s.detail}>
							<p className={s.detailLabel}>Год издания</p>
							<p className={s.detailValue}>
								{book.publishedDate || 'Год издания отсутствует'}
							</p>
						</div>
						<div className={s.detail}>
							<p className={s.detailLabel}>Количество страниц</p>
							<p className={s.detailValue}>
								{book.pageCount || 'Количество страниц отсутствует'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
