import { ReactSVG } from 'react-svg'
import s from './FilterMobile.module.css'
import { toggleButtonToList, toggleButtonToTiles } from 'assets/img'
import { createPortal } from 'react-dom'
import { useFormModal } from '@hooks/useFormModal'
import { Button } from '@components/UI/Button/Button'
import { ModalFilter } from '@components/UI/modal/ModalFilter/ModalFilter'

interface FilterMobileProps {
	setColum: (type: boolean) => void
}

export const FilterMobile = ({ setColum }: FilterMobileProps) => {
	const modalFilterVisible = useFormModal(false)
	return (
		<>
			<section className={s.section}>
				<Button className={s.button} onClick={modalFilterVisible.handleOnClick}>
					фильтры
				</Button>
				{createPortal(
					<ModalFilter
						visible={modalFilterVisible.visible}
						setVisible={modalFilterVisible.handleOnClick}
					/>,
					document.body
				)}
				<div className={s.icons}>
					<ReactSVG
						src={toggleButtonToList}
						onClick={() => setColum(true)}
						className={s.icon}
					/>
					<ReactSVG
						src={toggleButtonToTiles}
						onClick={() => setColum(false)}
						className={s.icon}
					/>
				</div>
			</section>
		</>
	)
}
