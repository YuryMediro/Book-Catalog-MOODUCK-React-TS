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
export const BookPage = () => {
	const modalWriteComment = useFormModal(false)

	return (
		<div className={s.wrapper}>
			<Layout>
				<div className={s.main}>
					<div className={s.section}>
						<p className={s.sectionTitleBook}>
							Все книги / Красная ягода. Черная земля. Сборник стихов
						</p>
						<BookSmallInfo />
						<Line />
					</div>
					<div className={s.section}>
						<BookFullInfo />
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
