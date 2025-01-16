import { NavLink } from 'react-router'
import s from './BookColum.module.css'
import { Cover } from '../../assets/img'
import { Line } from '../UI/Line/Line'
import { Button } from '../UI/Button/Button'

export const BookColum = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				<NavLink to={'/bookPage'}>
					<img src={Cover} className={s.image} />
				</NavLink>
				<div className={s.content}>
					<div className={s.contentTitle}>
						<NavLink to={'/bookPage'}>
							<p className={s.title}>
								Красная ягода. Черная земля. Сборник стихов
							</p>
						</NavLink>
						<NavLink to={'/bookPage'}>
							<p className={s.author}>Анна Долгарева</p>
						</NavLink>
					</div>
					<NavLink to={'/bookPage'}>
						<p className={s.description}>
							Анна Долгарева — поэтесса, военкор и журналист, победитель
							множества литературных конкурсов и самый молодой лауреат
							Григорьевской премии. Поэзия Анны Долгаревой поднимает вечные
							вопросы бытия и отвечает на них языком поколения, рано
							повзрослевшего в 1990-е, пережившего распад большой страны как
							личную драму, любившего и терявшего любовь в 2000-е и сейчас
							взвалившего на свои плечи ответственность за судьбу России. Стихи
							Анны — пронзительные, бескомпромиссные, нервные — написаны на
							разрыв души, с глубокой болью и любовью к Родине, Богу, людям,
							хрупкому миру вокруг нас.
						</p>
					</NavLink>
					<div className={s.buttonContainer}>
						<NavLink to={'/bookPage'}>
							<p className={s.publisher}>АСТ, 224 страницы</p>
						</NavLink>
						<Button className={s.button}>Хочу прочитать</Button>
					</div>
				</div>
			</div>
			<Button className={s.hiddenButton}>Хочу прочитать</Button>
			<Line />
		</div>
	)
}
