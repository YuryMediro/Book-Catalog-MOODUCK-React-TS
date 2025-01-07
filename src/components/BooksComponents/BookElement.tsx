import { ReactSVG } from 'react-svg'
import s from './BookElement.module.css'
import { coverIsMissing } from '../../assets/img'
import { Button } from '../UI/Button/Button'
import { NavLink } from 'react-router'

export const BookElement = () => {
	return (
		<div className={s.bookElement}>
			<NavLink to={'/bookPage'}>
				<ReactSVG src={coverIsMissing} />
			</NavLink>
			<div className={s.bookInfo}>
				<p className={s.bookTitle}>
					Красная ягода. Черная <br /> земля. Сборник стихов
				</p>
				<p className={s.bookAuthor}>Анна Долгарева</p>
			</div>
			<Button className={s.button}>Не хочу читать</Button>
		</div>
	)
}
