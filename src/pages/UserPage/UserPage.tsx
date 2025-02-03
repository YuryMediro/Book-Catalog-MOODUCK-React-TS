import { BookElement } from '@components/BooksComponents/BookElement'
import { Layout } from '@components/Layout/Layout'
import { Comments } from '@components/UI/Comments/Comments'
import { Line } from '@components/UI/Line/Line'
import { ScrollButton } from '@components/UI/ScrollButton/ScrollButton'
import { UserSettings } from '@components/UserComponents/UserSettings'
import s from './UserPage.module.css'
import { useParams } from 'react-router'
import { useUserData } from 'shared/apiHooks/apiGetUser'

export const UserPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data: user, error, isLoading } = useUserData(id!)

	if (isLoading) return <div>Loader...</div>
	if (error) return <p>Ошибка загрузки пользователя: {error.message}</p>
	
	// Проверяем, существует ли user, перед рендером
	if (!user) return <p>User не найден</p>
	return (
		<div className={s.wrapper}>
			<Layout>
				<ScrollButton />
				<div className={s.main}>
					<div className={s.section}>
						<p className={s.sectionTitle}>Личные данные</p>
						<UserSettings user={user} />
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
