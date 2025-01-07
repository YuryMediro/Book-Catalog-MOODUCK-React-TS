import { ReactSVG } from 'react-svg'
import { Button } from '../../Button/Button'
import { Modal } from '../Modal'
import s from './ModalCompleteReg.module.css'
import { useNavigate } from 'react-router'
import { message } from '../../../../assets/img'

interface ModalCompleteRegProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalCompleteReg = ({
	visible,
	setVisible,
}: ModalCompleteRegProps) => {
	const navigate = useNavigate()

	const handleOnClick = () => {
		setVisible(false)
		navigate('/')
	}

	return (
		<Modal
			title={'Регистрация почти завершена!'}
			visible={visible}
			setVisible={setVisible}
			centerTitle
		>
			<div className={s.modal_content}>
				<p className={s.description}>
					Проверьте свою почту и следуйте указаниям в инструкции
				</p>
				<ReactSVG src={message} />
			</div>
			<Button className={s.button} onClick={handleOnClick} type='button'>
				продолжить
			</Button>
		</Modal>
	)
}
