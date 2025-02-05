import { ReactSVG } from 'react-svg'
import { Modal } from '../Modal'
import s from './ModalFilter.module.css'
import { search } from 'assets/img'
import { Button } from '@components/UI/Button/Button'
import { CheckBox } from '@components/UI/CheckBox/CheckBox'
import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { ChangeEvent } from 'react'

interface ModalFilterProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	searchedAuthors: IAuthorsAndGenres[]
	genres: IAuthorsAndGenres[]
	handleOnClickAuthor: (id: string) => void
	handleOnClickGenre: (id: string) => void
	value: string
	handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
	clear: () => void
	onApplyFilters: () => void
}

export const ModalFilter = ({
	visible,
	setVisible,
	genres,
	searchedAuthors,
	handleOnClickAuthor,
	handleOnClickGenre,
	value,
	handleOnChange,
	clear,
	onApplyFilters,
}: ModalFilterProps) => {
	return (
		<Modal title={'Категории'} visible={visible} setVisible={setVisible}>
			<div className={s.line}></div>
			<div className={s.section}>
				<p className={s.title}>Вcе книги</p>
				<div className={`${s.scrollableGenres} ${s.section}`}>
					{genres.map(g => (
						<CheckBox
							key={g.id}
							checked={g.checked}
							info={g.author}
							onClick={handleOnClickGenre}
						/>
					))}
				</div>
			</div>
			<div className={s.section}>
				<p className={s.title}>Автор</p>
				<div className={s.inputContainer}>
					<input
						value={value}
						onChange={handleOnChange}
						className={s.input}
						type='text'
						placeholder='Имя автора'
					/>
					<ReactSVG src={search} />
				</div>
				<div className={`${s.scrollableAuthors} ${s.section}`}>
					{searchedAuthors.map(a => (
						<CheckBox
							key={a.id}
							checked={a.checked}
							info={a.author}
							onClick={handleOnClickAuthor}
						/>
					))}
				</div>
			</div>
			<div className={s.section}>
				<div className={s.buttonContainer}>
					<Button
						className={s.button}
						type='button'
						onClick={() => {
							onApplyFilters(), setVisible(false)
						}}
					>
						Применить фильтры
					</Button>
					<Button className={s.button} type='reset' onClick={clear}>
						Очистить фильтры
					</Button>
				</div>
			</div>
		</Modal>
	)
}
