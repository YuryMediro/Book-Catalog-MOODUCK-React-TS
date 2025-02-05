import { ReactSVG } from 'react-svg'
import s from './FilterMobile.module.css'
import { toggleButtonToList, toggleButtonToTiles } from 'assets/img'
import { createPortal } from 'react-dom'
import { useFormModal } from '@hooks/useFormModal'
import { Button } from '@components/UI/Button/Button'
import { ModalFilter } from '@components/UI/modal/ModalFilter/ModalFilter'
import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { ChangeEvent } from 'react'

interface FilterMobileProps {
	setColum: (type: boolean) => void
	searchedAuthors: IAuthorsAndGenres[]
	genres: IAuthorsAndGenres[]
	handleOnClickAuthor: (id: string) => void
	handleOnClickGenre: (id: string) => void
	value: string
	handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
	clear: () => void
	onApplyFilters: () => void
}

export const FilterMobile = ({
	setColum,
	genres,
	searchedAuthors,
	handleOnClickAuthor,
	handleOnClickGenre,
	value,
	handleOnChange,
	clear,
	onApplyFilters,
}: FilterMobileProps) => {
	const modalFilterVisible = useFormModal(false)
	return (
		<>
			<section className={s.section}>
				<Button className={s.button} onClick={modalFilterVisible.handleOnClick}>
					фильтры
				</Button>
				{createPortal(
					<ModalFilter
						visible={modalFilterVisible.visible}
						setVisible={modalFilterVisible.handleOnClick}
						searchedAuthors={searchedAuthors}
						genres={genres}
						handleOnClickAuthor={handleOnClickAuthor}
						handleOnClickGenre={handleOnClickGenre}
						value={value}
						handleOnChange={handleOnChange}
						clear={clear}
						onApplyFilters={onApplyFilters}
					/>,
					document.body
				)}
				<div className={s.icons}>
					<ReactSVG
						src={toggleButtonToList}
						onClick={() => setColum(true)}
						className={s.icon}
					/>
					<ReactSVG
						src={toggleButtonToTiles}
						onClick={() => setColum(false)}
						className={s.icon}
					/>
				</div>
			</section>
		</>
	)
}
