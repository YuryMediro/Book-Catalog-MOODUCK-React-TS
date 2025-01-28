import { createPortal } from 'react-dom'
import s from './BookPage.module.css'
import { useParams } from 'react-router'
import { useReadBook } from 'shared/apiHooks/apiHooksReadBook'
import { useFormModal } from '@hooks/useFormModal'
import { Preloader } from '@components/UI/Preloader/Preloader'
import { Layout } from '@components/Layout/Layout'
import { ScrollButton } from '@components/UI/ScrollButton/ScrollButton'
import { BookSmallInfo } from '@components/BooksComponents/BookSmallInfo'
import { Line } from '@components/UI/Line/Line'
import { BookFullInfo } from '@components/BooksComponents/BookFullInfo'
import { Button } from '@components/UI/Button/Button'
import { ModalWriteComment } from '@components/UI/modal/ModalWriteComment/ModalWriteComment'
import { Comments } from '@components/UI/Comments/Comments'

export const BookPage = () => {
	const { id } = useParams<{ id: string }>() // Получаем id книги из URL
	const { data: book, isLoading, error } = useReadBook(id!)
	const modalWriteComment = useFormModal(false)

	if (isLoading) return <Preloader />
	if (error) return <p>Ошибка загрузки книги: {error.message}</p>

	// Проверяем, существует ли book, перед рендером
	if (!book) return <p>Книга не найдена</p>

	return (
		<div className={s.wrapper}>
			<Layout>
				<ScrollButton />
				<div className={s.main}>
					<div className={s.section}>
						<p className={s.sectionTitleBook}>
							Все книги / Красная ягода. Черная земля. Сборник стихов
						</p>
						<BookSmallInfo book={book} />
						<Line />
					</div>
					<div className={s.section}>
						<BookFullInfo book={book} />
						<Line />
					</div>
					<div className={s.commentSection}>
						<div className={s.titleContainer}>
							<p className={s.sectionTitle}>Комментарии</p>
							<Button
								className={s.button}
								onClick={modalWriteComment.handleOnClick}
							>
								Написать комментарий
							</Button>
							{createPortal(
								<ModalWriteComment
									visible={modalWriteComment.visible}
									setVisible={modalWriteComment.handleOnClick}
									rating={0}
								/>,
								document.body
							)}
						</div>
						<Comments />
					</div>
				</div>
			</Layout>
		</div>
	)
}
