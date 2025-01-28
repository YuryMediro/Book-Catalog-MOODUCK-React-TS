import logotype from 'assets/img/logotype.svg'
import s from './LogoAndName.module.css'

interface LogoAndNameProps {
	className: string
}

export const LogoAndName = ({ className }: LogoAndNameProps) => {
	return (
		<div className={`${s.logo_container} ${className}`}>
			<img className={s.logo_img} src={logotype} />
			<p className={s.logo_text}>MOODUCK</p>
		</div>
	)
}
