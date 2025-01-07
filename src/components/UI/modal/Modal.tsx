import { ReactSVG } from 'react-svg'
import { HTMLAttributes } from 'react'
import s from './Modal.module.css'
import { cross } from '../../../assets/img'

interface ModalProps extends HTMLAttributes<HTMLButtonElement> {
	title: string
	visible: boolean
	setVisible: (visible: boolean) => void
	centerTitle?: boolean // для центрирования заголовка
}

export const Modal = ({
	title,
	visible,
	setVisible,
	children,
	centerTitle = false,
}: ModalProps) => {

	const handleOnClick = () => {
		setVisible(false)
	}

	return (
		<>
			{visible && (
				<div className={s.modal_wrapper}>
					<div className={s.modal_content}>
						<div className={s.modal_header}>
							<p
								className={`${s.modal_title} ${
									centerTitle ? s.center_title : ''
								}`}
							>
								{title}
							</p>
							<ReactSVG
								src={cross}
								className={s.modal_close}
								onClick={handleOnClick}
							/>
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	)
}
