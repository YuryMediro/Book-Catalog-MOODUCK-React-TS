import { ReactSVG } from 'react-svg'
import s from './CheckBox.module.css'
import { galka } from 'assets/img'

interface CheckBoxProps {
	checked: boolean
	info: string
	onClick: Function
}

export const CheckBox = ({ checked, info, onClick }: CheckBoxProps) => {
	return (
		<div className={s.container}>
			<button
				className={`${s.button} ${checked ? s.checked : ''} `}
				onClick={() => onClick(info)}
			>
				{checked && <ReactSVG src={galka} />}
			</button>
			<p className={s.info}>{info}</p>
		</div>
	)
}
