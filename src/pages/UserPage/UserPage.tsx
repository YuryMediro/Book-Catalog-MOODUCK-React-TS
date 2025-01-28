import { BookElement } from '@components/BooksComponents/BookElement'
import { Layout } from '@components/Layout/Layout'
import { Comments } from '@components/UI/Comments/Comments'
import { Line } from '@components/UI/Line/Line'
import { ScrollButton } from '@components/UI/ScrollButton/ScrollButton'
import { UserSettings } from '@components/UserComponents/UserSettings'
import s from './UserPage.module.css'

export const UserPage = () => {
	return (
		<div className={s.wrapper}>
			<Layout>
				<ScrollButton />
				<div className={s.main}>
					<div className={s.section}>
						<p className={s.sectionTitle}>Личные данные</p>
						<UserSettings />
						<Line />
					</div>
					<div className={s.section}>
						<p className={s.sectionTitle}>Закладки</p>
						<div className={s.bookmarksList}>
							<BookElement />
						</div>
						<p className={s.showMoreBook}>Показать больше книг</p>
						<Line />
					</div>
					<div className={s.section}>
						<p className={s.sectionTitle}>Комментарии</p>
						<div className={s.commentsContainer}>
							<Comments />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}
