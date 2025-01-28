import { Dispatch, SetStateAction } from 'react'
import s from './Pagination.module.css'
import { ReactSVG } from 'react-svg'
import { leftArrow, rightArrow } from '@assets/img'

type PaginationProps = {
	setPage: Dispatch<SetStateAction<number>>
	currentPage: number
	totalPages: number
}

export const Pagination = ({
	setPage,
	currentPage,
	totalPages,
}: PaginationProps) => {
	const handleClick = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setPage(page) // Устанавливаем новую страницу
		}
	}

	const renderPages = () => {
		const pages = []
		const delta = 2 // Количество страниц до и после текущей

		// Первая страница всегда отображается
		pages.push(
			<button
				key={1}
				className={`${s.pageNumber} ${currentPage === 1 ? s.active : ''}`}
				onClick={() => handleClick(1)}
			>
				1
			</button>
		)

		// Троеточие перед центральными страницами
		if (currentPage > delta + 2) {
			pages.push(
				<span className={s.threeDots} key='start-ellipsis'>
					...
				</span>
			)
		}

		// Центральные страницы
		for (
			let i = Math.max(2, currentPage - delta);
			i <= Math.min(totalPages - 1, currentPage + delta);
			i++
		) {
			pages.push(
				<button
					key={i}
					className={`${s.pageNumber} ${currentPage === i ? s.active : ''}`}
					onClick={() => handleClick(i)}
				>
					{i}
				</button>
			)
		}

		// Троеточие после центральных страниц
		if (currentPage < totalPages - delta - 1) {
			pages.push(
				<span className={s.threeDots} key='end-ellipsis'>
					...
				</span>
			)
		}

		// Последняя страница всегда отображается
		pages.push(
			<button
				key={totalPages}
				className={`${s.pageNumber} ${
					currentPage === totalPages ? s.active : ''
				}`}
				onClick={() => handleClick(totalPages)}
			>
				{totalPages}
			</button>
		)

		return pages
	}

	return (
		<div className={s.pagination}>
			<button
				className={s.pageButton}
				disabled={currentPage === 1}
				onClick={() => handleClick(currentPage - 1)}
			>
				<ReactSVG src={leftArrow} />
			</button>
			<div className={s.pages}>{renderPages()}</div>
			<button
				className={s.pageButton}
				disabled={currentPage === totalPages}
				onClick={() => handleClick(currentPage + 1)}
			>
				<ReactSVG src={rightArrow} />
			</button>
		</div>
	)
}
