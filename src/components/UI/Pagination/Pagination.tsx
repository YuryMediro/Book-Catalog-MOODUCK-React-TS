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
			setPage(page)
		}
	}

	const renderPages = () => {
		const pages = []
		const delta = 2

		// Первая страница (только если есть больше одной страницы)
		if (totalPages >= 1) {
			pages.push(
				<button
					key='first-page' // Уникальный ключ
					className={`${s.pageNumber} ${currentPage === 1 ? s.active : ''}`}
					onClick={() => handleClick(1)}
				>
					1
				</button>
			)
		}

		// Троеточие перед центральными страницами
		if (currentPage > delta + 2) {
			pages.push(
				<span className={s.threeDots} key='start-ellipsis'>
					...
				</span>
			)
		}

		// Центральные страницы (исключаем первую и последнюю)
		const start = Math.max(2, currentPage - delta)
		const end = Math.min(totalPages - 1, currentPage + delta)

		for (let i = start; i <= end; i++) {
			pages.push(
				<button
					key={`page-${i}`} // Уникальный ключ с префиксом
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

		// Последняя страница (только если есть больше одной страницы)
		if (totalPages > 1) {
			pages.push(
				<button
					key='last-page' // Уникальный ключ
					className={`${s.pageNumber} ${
						currentPage === totalPages ? s.active : ''
					}`}
					onClick={() => handleClick(totalPages)}
				>
					{totalPages}
				</button>
			)
		}

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
