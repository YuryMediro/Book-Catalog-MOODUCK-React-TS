import { NavLink } from 'react-router'
import { LogoAndName } from '../../components/Layout/LogoAndName/LogoAndName'
import s from './LoginPage.module.css'
import { Button } from '../../UI/Button/Button'
import { LoginPageForm } from '../../UI/Form/LoginPageForm/LoginPageForm'

export const LoginPage = () => {
	return (
		<>
			<div className={s.wrapper}>
				<aside className={s.left_side}>
					<LogoAndName className={s.logo} />
					<div className={s.register_container}>
						<p className={s.register_text}>ЕЩЕ НЕТ АККАУНТА?</p>
						<NavLink to={'/registration'}>
							<Button className={s.register_button}>зарегистрироваться</Button>
						</NavLink>
					</div>
					<div className={s.line} />
				</aside>
				<LoginPageForm />
			</div>
		</>
	)
}
