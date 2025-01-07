import { Button } from '../../Button/Button'
import { Modal } from '../Modal'
import s from './ModalUsernameVisible.module.css'

interface ModalUsernameVisibleProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalUsernameVisible = ({
	visible,
	setVisible,
}: ModalUsernameVisibleProps) => {
	return (
		<Modal
			title={'Изменение имени пользователя'}
			visible={visible}
			setVisible={setVisible}
		>
			<form className={s.formContainer}>
				<div className={s.inputContainer}>
					<input
						className={s.inputField}
						type='text'
						placeholder='Введите новое имя пользователя'
					/>
				</div>
				<Button className={s.button} type='submit'>
					Сохранить изменения
				</Button>
			</form>
		</Modal>
	)
}
