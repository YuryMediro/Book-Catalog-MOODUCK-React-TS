import { ReactSVG } from 'react-svg'
import { Modal } from '../Modal'
import { duckFootprints } from '../../../../assets/img'
import s from './ModalLogout.module.css'
import { Button } from '../../Button/Button'
import { useNavigate } from 'react-router'

interface ModalLogoutProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalLogout = ({ visible, setVisible }: ModalLogoutProps) => {
	const handleOnClick = () => {
		setVisible(false)
	}
	const navigate = useNavigate()
	const handleOnClickNavigate = () => {
		navigate('/')
	}
	return (
		<Modal
			title={'Вы уверены, что хотите выйти?'}
			visible={visible}
			setVisible={setVisible}
			centerTitle
		>
			<div className={s.iconContainer}>
				<ReactSVG src={duckFootprints} />
			</div>
			<div className={s.buttonContainer}>
				<Button
					className={s.button}
					type='submit'
					onClick={handleOnClickNavigate}
				>
					ДА, выйти
				</Button>
				<Button className={s.button} type='button' onClick={handleOnClick}>
					Нет, остаться
				</Button>
			</div>
		</Modal>
	)
}
