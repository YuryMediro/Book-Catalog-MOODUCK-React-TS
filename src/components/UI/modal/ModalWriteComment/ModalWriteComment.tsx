import { Button } from '../../Button/Button'
import { StarRating } from '../../StarRating/StarRating'
import { Modal } from '../Modal'
import s from './ModalWriteComment.module.css'

interface ModalWriteCommentProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	rating: number
}

export const ModalWriteComment = ({
	visible,
	setVisible,
	rating,
}: ModalWriteCommentProps) => {
	return (
		<Modal
			title={'Оставить комментарий'}
			visible={visible}
			setVisible={setVisible}
		>
			<form className={s.formContainer}>
				<StarRating rating={rating} handleRating={() => {}} />
				<div className={s.inputContainer}>
					<input
						type='text'
						placeholder='Заголовок *'
						className={s.inputField}
					/>
				</div>
				<div className={s.inputContainer}>
					<input
						type='text'
						placeholder='Комментарий *'
						className={s.inputField}
					/>
				</div>
				<Button className={s.button}>Опубликовать</Button>
			</form>
		</Modal>
	)
}
