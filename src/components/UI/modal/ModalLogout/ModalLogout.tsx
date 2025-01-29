import { ReactSVG } from 'react-svg'
import { Modal } from '../Modal'
import { duckFootprints } from 'assets/img'
import s from './ModalLogout.module.css'
import { Button } from '@components/UI/Button/Button'
import { useLogoutHooks } from 'shared/apiHooks/apiHooksLogout'

interface ModalLogoutProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalLogout = ({ visible, setVisible }: ModalLogoutProps) => {
	const { mutate, status } = useLogoutHooks()

	const onLogout = async () => {
		await mutate()
		setVisible(false)
	}

	// Проверка, в процессе ли загрузка
	const isLoading = status === 'pending'

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
					onClick={onLogout}
					disabled={isLoading}
				>
					{isLoading ? 'Выход...' : 'ДА, выйти'}
				</Button>
				<Button
					className={s.button}
					type='button'
					onClick={() => setVisible(false)}
				>
					Нет, остаться
				</Button>
			</div>
		</Modal>
	)
}
