import { ReactSVG } from 'react-svg'
import s from './ModalChangePhoto.module.css'
import { imageBeforeHover } from 'assets/img'
import { Button } from '@components/UI/Button/Button'
import { Modal } from '../Modal'

interface ModalChangePhotoProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalChangePhoto = ({
	visible,
	setVisible,
}: ModalChangePhotoProps) => {
	return (
		<Modal
			title={'Изменение фотографии'}
			visible={visible}
			setVisible={setVisible}
		>
			<div className={s.uploadContainer}>
				<div>НЕ ЗАКОНЧИЛ</div>
				<div className={s.uploadPhoto}>
					<ReactSVG src={imageBeforeHover} className={s.uploadIcon} />
					<p className={s.uploadText}>Выберите изображение на устройстве</p>
					<div className={s.buttonContainer}>
						<Button className={s.button}>выбрать файл</Button>
						<Button className={s.button}>вставить из буфера</Button>
					</div>
				</div>
			</div>
			<Button className={s.deleteButton}>Удалить фотографию</Button>
		</Modal>
	)
}
