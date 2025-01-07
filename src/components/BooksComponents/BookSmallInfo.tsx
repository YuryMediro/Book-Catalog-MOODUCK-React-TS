import s from './BookSmallInfo.module.css'
import { Cover } from '../../assets/img'
import { Button } from '../UI/Button/Button'

export const BookSmallInfo = () => {
	return (
		<section className={s.wrapper}>
			{/* <ReactSVG src={coverIsMissing} /> */}
			<img src={Cover} alt='' />
			<div className={s.bookInfo}>
				<div className={s.bookTitle}>
					<p className={s.title}>Красная ягода. Черная земля. Сборник стихов</p>
					<p className={s.author}>Анна Долгарева</p>
				</div>
				<div className={s.bookDescription}>
					<p className={s.description}>
						Анна Долгарева — поэтесса, военкор и журналист, победитель множества
						литературных конкурсов и самый молодой лауреат Григорьевской премии.
						Поэзия Анны Долгаревой поднимает вечные вопросы бытия и отвечает на
						них языком поколения, рано повзрослевшего в 1990-е...
					</p>
					<div className={s.readMore}>Читать далее</div>
				</div>
				<Button className={s.button}>Хочу прочитать</Button>
			</div>
			<div className={s.details}>
				<div className={s.detail}>
					<p className={s.detailLabel}>Жанр</p>
					<p className={s.detailValue}>Поэзия</p>
				</div>
				<div className={s.detail}>
					<p className={s.detailLabel}>Издательство</p>
					<p className={s.detailValue}>АСТ</p>
				</div>
				<div className={s.detail}>
					<p className={s.detailLabel}>Серия</p>
					<p className={s.detailValue}>Мысли о Родине</p>
				</div>
				<div className={s.detail}>
					<p className={s.detailLabel}>Количество страниц</p>
					<p className={s.detailValue}>224</p>
				</div>

				<div className={s.allDetails}>Все характеристики</div>
			</div>
		</section>
	)
}
