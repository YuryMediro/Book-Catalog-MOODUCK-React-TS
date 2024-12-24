import { Link } from 'react-router'
import s from './RegistrationPage.module.css'
import { LogoAndName } from '../../components/Layout/LogoAndName/LogoAndName'
import { Button } from '../../UI/Button/Button'
import { RegistrationPageForm } from '../../UI/Form/RegistrationPageForm/RegistrationPageForm'

export const RegistrationPage = () => {
	return (
		<>
			<main className={s.wrapper}>
				<aside className={s.left_side}>
					<LogoAndName className={s.logo} />
					<div className={s.login_container}>
						<p className={s.login_text}>УЖЕ ЕСТЬ АККАУНТ?</p>
						<Link to={'/'}>
							<Button className={s.login_button}>войти</Button>
						</Link>
					</div>
					<div className={s.line} />
				</aside>
				<RegistrationPageForm />
			</main>
		</>
	)
}
