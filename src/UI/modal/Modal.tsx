import { ReactSVG } from 'react-svg'
import { cross } from '../../assets/img'
import { HTMLAttributes } from 'react'
import s from './Modal.module.css'

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
	return (
		<>
			{visible && (
				<div className={s.modal_wrapper}>
					<main className={s.modal_content}>
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
								onClick={() => {
									setVisible(false)
								}}
							/>
						</div>
						{children}
					</main>
				</div>
			)}
		</>
	)
}
