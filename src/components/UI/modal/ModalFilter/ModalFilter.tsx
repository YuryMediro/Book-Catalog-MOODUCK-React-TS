import { ReactSVG } from 'react-svg'
import { Modal } from '../Modal'
import s from './ModalFilter.module.css'
import { search } from 'assets/img'
import { Button } from '@components/UI/Button/Button'
import { CheckBox } from '@components/UI/CheckBox/CheckBox'

interface ModalFilterProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalFilter = ({ visible, setVisible }: ModalFilterProps) => {
	return (
		<Modal title={'Категории'} visible={visible} setVisible={setVisible}>
			<div className={s.line}></div>
			<div className={s.section}>
				<p className={s.title}>Вcе книги</p>
				<div className={`${s.scrollable} ${s.section}`}>
					<CheckBox checked={false} />
				</div>
			</div>
			<div className={s.section}>
				<p className={s.title}>Автор</p>
				<div className={s.inputContainer}>
					<input className={s.input} type='text' placeholder='Имя автора' />
					<ReactSVG src={search} />
				</div>
				<div className={`${s.scrollableAuthors} ${s.section}`}>
					<CheckBox checked={false} />
				</div>
			</div>
			<div className={s.section}>
				<div className={s.buttonContainer}>
					<Button className={s.button} type='button'>
						Применить фильтры
					</Button>
					<Button className={s.button} type='reset'>
						Очистить фильтры
					</Button>
				</div>
			</div>
		</Modal>
	)
}
