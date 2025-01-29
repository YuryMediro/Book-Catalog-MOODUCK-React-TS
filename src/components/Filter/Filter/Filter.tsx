import s from './Filter.module.css'
import { ReactSVG } from 'react-svg'
import { search } from 'assets/img'
import { CheckBox } from '@components/UI/CheckBox/CheckBox'
import { Button } from '@components/UI/Button/Button'

// interface FilterProps {
// 	searchedAuthors: IAuthorsAndGenres[]
// 	searchedGenres: IAuthorsAndGenres[]
// }

export const Filter = () => {
	return (
		<>
			<section className={s.container}>
				<p className={s.title}>Категории</p>
				<div className={s.line}></div>
				<div className={s.section}>
					<p className={s.title}>Вcе книги</p>
					{/* <div className={s.scrollable}>
						{searchedGenres.map(genre => (
							<CheckBox
								checked={false}
								key={genre.author}
								info={genre.author}
							/>
						))}
					</div> */}
					<div className={s.scrollable}>
						<CheckBox checked={false} info={'Жанры'} />
					</div>
				</div>
				<div className={s.section}>
					<p className={s.title}>Автор</p>
					<div className={s.inputContainer}>
						<input className={s.input} type='text' placeholder='Имя автора' />
						<ReactSVG src={search} />
					</div>
					{/* <div className={s.scrollableAuthors}>
						{searchedAuthors.map(author => (
							<CheckBox checked={false} key={author.author} info={author.author} />
						))}
					</div> */}
					<div className={s.scrollableAuthors}>
						<CheckBox checked={false} info={'Авторы'} />
					</div>
				</div>
				<div className={s.section}>
					<div className={s.buttonContainer}>
						<Button className={s.button} type='button'>
							Применить фильтры
						</Button>
						<Button className={s.button} type='reset'>
							Очистить фильтры
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}
