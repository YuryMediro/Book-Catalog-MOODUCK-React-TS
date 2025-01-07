import { ReactSVG } from 'react-svg'
import { bubbles, duck } from '../../../assets/img'
import s from './Preloader.module.css'

export const Preloader = () => {
	return (
		<div className={s.preloaderWrapper}>
			<ReactSVG src={duck} className={s.duckIcon} />
			<ReactSVG src={bubbles} className={s.bubblesIcon} />
		</div>
	)
}
