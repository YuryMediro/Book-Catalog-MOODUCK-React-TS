import { createPortal } from 'react-dom'
import { BookFullInfo } from '../../components/BooksComponents/BookFullInfo'
import { BookSmallInfo } from '../../components/BooksComponents/BookSmallInfo'
import { Layout } from '../../components/Layout/Layout'
import { Button } from '../../components/UI/Button/Button'
import { Comments } from '../../components/UI/Comments/Comments'
import { Line } from '../../components/UI/Line/Line'
import { useFormModal } from '../../hooks'
import s from './BookPage.module.css'
import { ModalWriteComment } from '../../components/UI/modal/ModalWriteComment/ModalWriteComment'
import { useReadBook } from '../../shared/apiHooks/apiHooksReadBook'
import { Preloader } from '../../components/UI/Preloader/Preloader'
import { useParams } from 'react-router'

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
