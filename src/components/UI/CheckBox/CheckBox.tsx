import { ReactSVG } from 'react-svg'
import s from './CheckBox.module.css'
import { galka } from 'assets/img'
import { useState } from 'react'

interface CheckBoxProps {
	checked: boolean
}

export const CheckBox = ({ checked }: CheckBoxProps) => {
	const [isChecked, setIsChecked] = useState(checked)

	const handleClick = () => {
		setIsChecked(!isChecked)
	}

	return (
		<div className={s.container}>
			<button
				className={`${s.button} ${isChecked ? s.checked : ''} `}
				onClick={handleClick}
			>
				{isChecked && <ReactSVG src={galka} />}
			</button>
			<p className={s.info}>Детективы</p>
		</div>
	)
}
