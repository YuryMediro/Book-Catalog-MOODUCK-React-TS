import s from './BookFullInfo.module.css'

export const BookFullInfo = () => {
	return (
		<section className={s.wrapper}>
			<div className={s.bookDescription}>
				<p className={s.description}>
					Анна Долгарева — поэтесса, военкор и журналист, победитель множества
					литературных конкурсов и самый молодой лауреат Григорьевской премии.
					Поэзия Анны Долгаревой поднимает вечные вопросы бытия и отвечает на
					них языком поколения, рано повзрослевшего в 1990-е, пережившего распад
					большой страны как личную драму, любившего и терявшего любовь в 2000-е
					и сейчас взвалившего на свои плечи ответственность за судьбу России.
					Стихи Анны — пронзительные, бескомпромиссные, нервные — написаны на
					разрыв души, с глубокой болью и любовью к Родине, Богу, людям,
					хрупкому миру вокруг нас.
				</p>
			</div>
			<div className={s.details}>
				<p className={s.titleDetails}>Характеристики</p>
				<div className={s.detailsContainer}>
					<div className={s.gap}>
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
							<p className={s.detailLabel}>Переплет</p>
							<p className={s.detailValue}>Твердый</p>
						</div>
					</div>
					<div className={s.gap}>
						<div className={s.detail}>
							<p className={s.detailLabel}>Художник</p>
							<p className={s.detailValue}>Мельникова Елена</p>
						</div>
						<div className={s.detail}>
							<p className={s.detailLabel}>Переводчик</p>
							<p className={s.detailValue}>Юсим Марк</p>
						</div>
						<div className={s.detail}>
							<p className={s.detailLabel}>Год издания</p>
							<p className={s.detailValue}>2023</p>
						</div>
						<div className={s.detail}>
							<p className={s.detailLabel}>Количество страниц</p>
							<p className={s.detailValue}>224</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
