import { NavLink } from 'react-router'
import s from './BookList.module.css'
import { Cover } from '../../assets/img'
import { Button } from '../UI/Button/Button'

export const BookList = () => {
	return (
		<div className={s.container}>
			<NavLink to={'/bookPage'}>
				<img src={Cover} className={s.image} />
			</NavLink>
			<div className={s.content}>
				<NavLink to={'/bookPage'}>
					<p className={s.title}>Красная ягода. Черная земля. Сборник стихов</p>
				</NavLink>
				<NavLink to={'/bookPage'}>
					<p className={s.authors}>Анна Долгарева</p>
				</NavLink>
			</div>
			<Button className={s.button}>Хочу прочитать</Button>
		</div>
	)
}
