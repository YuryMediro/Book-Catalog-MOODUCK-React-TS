import { ReactSVG } from 'react-svg'
import { Button } from '../../UI/Button/Button'
import s from './FilterMobile.module.css'
import { toggleButtonToList, toggleButtonToTiles } from '../../../assets/img'
import { useFormModal } from '../../../hooks'
import { createPortal } from 'react-dom'
import { ModalFilter } from '../../UI/modal/ModalFilter/ModalFilter'

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
