import s from './Filter.module.css'
import { ReactSVG } from 'react-svg'
import { search } from '../../../assets/img'
import { Button } from '../../UI/Button/Button'
import { CheckBox } from '../../UI/CheckBox/CheckBox'

export const Filter = () => {
	return (
		<>
			<section className={s.container}>
				<p className={s.title}>Категории</p>
				<div className={s.line}></div>
				<div className={s.section}>
					<p className={s.title}>Вcе книги</p>
					<div className={s.scrollable}>
						<CheckBox checked={false} />
					</div>
				</div>
				<div className={s.section}>
					<p className={s.title}>Автор</p>
					<div className={s.inputContainer}>
						<input className={s.input} type='text' placeholder='Имя автора' />
						<ReactSVG src={search} />
					</div>
					<div className={s.scrollableAuthors}>
						<CheckBox checked={false} />
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
