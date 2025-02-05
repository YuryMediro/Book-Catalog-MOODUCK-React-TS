import s from './Filter.module.css'
import { ReactSVG } from 'react-svg'
import { search } from 'assets/img'
import { CheckBox } from '@components/UI/CheckBox/CheckBox'
import { Button } from '@components/UI/Button/Button'
import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { ChangeEvent } from 'react'

interface FilterProps {
	searchedAuthors: IAuthorsAndGenres[]
	genres: IAuthorsAndGenres[]
	handleOnClickAuthor: (id: string) => void
	handleOnClickGenre: (id: string) => void
	value: string
	handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
	clear: () => void
	createResults: () => void
}

export const Filter = ({
	genres,
	searchedAuthors,
	handleOnClickAuthor,
	handleOnClickGenre,
	value,
	handleOnChange,
	clear,
	createResults,
}: FilterProps) => {
	return (
		<>
			<section className={s.container}>
				<p className={s.title}>Категории</p>
				<div className={s.line}>.</div>
				<div className={s.section}>
					<p className={s.title}>Вcе книги</p>
					<div className={s.scrollableGenres}>
						{genres.map(genre => (
							<CheckBox
								checked={genre.checked}
								key={genre.author}
								info={genre.author}
								onClick={handleOnClickGenre}
							/>
						))}
					</div>
				</div>
				<div className={s.section}>
					<p className={s.title}>Автор</p>
					<div className={s.inputContainer}>
						<input
							className={s.input}
							type='text'
							placeholder='Имя автора'
							value={value}
							onChange={handleOnChange}
						/>
						<ReactSVG src={search} />
					</div>
					<div className={s.scrollableAuthors}>
						{searchedAuthors.map(author => (
							<CheckBox
								checked={author.checked}
								key={author.author}
								info={author.author}
								onClick={handleOnClickAuthor}
							/>
						))}
					</div>
				</div>
				<div className={s.section}>
					<div className={s.buttonContainer}>
						<Button className={s.button} type='button' onClick={() => {createResults()}}>
							Применить фильтры
						</Button>
						<Button
							className={s.button}
							type='reset'
							onClick={() => {
								clear()
							}}
						>
							Очистить фильтры
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}
