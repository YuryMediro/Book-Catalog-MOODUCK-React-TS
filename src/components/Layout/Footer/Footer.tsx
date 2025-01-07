import { LogoAndName } from '../LogoAndName/LogoAndName'
import s from './Footer.module.css'
export const Footer = () => {
	return (
		<footer className={s.wrapper}>
			<div className={s.footer_top}>
				<div className={s.footer_line} />
				<LogoAndName className={s.footer_logo} />
				<div className={s.footer_line} />
			</div>
			<p className={s.footer_text}>© Mooduck 2023. All rights reserved</p>
		</footer>
	)
}
