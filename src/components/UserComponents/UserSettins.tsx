import { ReactSVG } from 'react-svg'
import s from './UserSettings.module.css'
import { barcode, goose } from '../../assets/img'
import { Button } from '../UI/Button/Button'
import { useFormModal } from '../../hooks/useFormModal'
import { ModalUsernameVisible } from '../UI/modal/ModalUsernameVisible/ModalUsernameVisible'
import { ModalEmailVisible } from '../UI/modal/ModalEmailVisible/ModalEmailVisible'
import { ModalCheckPassword } from '../UI/modal/ModalCheckPassword/ModalCheckPassword'
import { ModalNewPassword } from '../UI/modal/ModalNewPassword/ModalNewPassword'
import { createPortal } from 'react-dom'
import { ModalChangePhoto } from '../UI/modal/ModalChangePhoto/ModalChangePhoto'
import { ModalLogout } from '../UI/modal/ModalLogout/ModalLogout'

export const UserSettings = () => {
	const modalUsernameVisible = useFormModal(false)
	const modalEmailVisible = useFormModal(false)
	const modalCheckPasswordVisible = useFormModal(false)
	const setNewPasswordVisible = useFormModal(false)
	const modalChangePhotoVisible = useFormModal(false)
	const modalLogoutVisible = useFormModal(false)
	return (
		<section className={s.wrapper}>
			<div className={s.card}>
				<div className={s.imgContainer}>
					<ReactSVG src={goose} className={s.goose} />
				</div>
				<div className={s.infoContainer}>
					<div className={s.barcode}>
						<ReactSVG src={barcode} className={s.barcode} />
					</div>
					<div className={s.info}>
						<div className={s.infoItem}>
							<p className={s.label}>Имя пользователя</p>
							<p className={`${s.value} ${s.data1}`}>Mediro</p>
						</div>
						<div className={s.infoItem}>
							<p className={s.label}>E-mail</p>
							<p className={`${s.value} ${s.data2}`}>sagn375@gmail.com</p>
						</div>
						<div className={s.infoItem}>
							<p className={s.label}>Пароль</p>
							<p className={`${s.value} ${s.data3}`}>***********</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.buttonsContainer}>
				<Button
					className={s.button}
					type='button'
					onClick={modalChangePhotoVisible.handleOnClick}
				>
					Изменить фотографию
				</Button>
				{createPortal(
					<ModalChangePhoto
						visible={modalChangePhotoVisible.visible}
						setVisible={modalChangePhotoVisible.handleOnClick}
					/>,
					document.body
				)}
				<Button
					className={s.button}
					onClick={modalUsernameVisible.handleOnClick}
					type='button'
				>
					Изменить имя пользователя
				</Button>
				{createPortal(
					<ModalUsernameVisible
						visible={modalUsernameVisible.visible}
						setVisible={modalUsernameVisible.handleOnClick}
					/>,
					document.body
				)}
				<Button
					className={s.button}
					type='button'
					onClick={modalEmailVisible.handleOnClick}
				>
					Изменить e-mail
				</Button>
				{createPortal(
					<ModalEmailVisible
						visible={modalEmailVisible.visible}
						setVisible={modalEmailVisible.handleOnClick}
					/>,
					document.body
				)}
				<Button
					className={s.button}
					type='button'
					onClick={modalCheckPasswordVisible.handleOnClick}
				>
					Изменить пароль
				</Button>
				{createPortal(
					<ModalCheckPassword
						visible={modalCheckPasswordVisible.visible}
						setVisible={modalCheckPasswordVisible.handleOnClick}
						setNewPassword={setNewPasswordVisible.handleOnClick}
					/>,
					document.body
				)}
				{createPortal(
					<ModalNewPassword
						visible={setNewPasswordVisible.visible}
						setVisible={setNewPasswordVisible.handleOnClick}
					/>,
					document.body
				)}

				<Button
					className={s.button}
					type='button'
					onClick={modalLogoutVisible.handleOnClick}
				>
					Выйти из аккаунта
				</Button>
				{createPortal(
					<ModalLogout
						visible={modalLogoutVisible.visible}
						setVisible={modalLogoutVisible.handleOnClick}
					/>,
					document.body
				)}
			</div>
		</section>
	)
}
