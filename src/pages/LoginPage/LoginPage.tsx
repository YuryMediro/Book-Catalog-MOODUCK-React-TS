import { NavLink } from 'react-router'
import s from './LoginPage.module.css'
import { LogoAndName } from '@components/Layout/LogoAndName/LogoAndName'
import { Button } from '@components/UI/Button/Button'
import { LoginPageForm } from '@components/UI/Form/LoginPageForm/LoginPageForm'

export const LoginPage = () => {
	const mobile = window.innerWidth <= 767
	return (
		<>
			{mobile ? (
				<main className={s.mobileContainer}>
					<LogoAndName className={s.mobileLogo} />
					<div className={s.mobileFormContainer}>
						<LoginPageForm />
					</div>
					<div className={s.mobileTextContainer}>
						<p className={s.mobileText}>еще нет аккаунта?</p>
						<NavLink to={'/registration'}>
							<Button className={s.mobileButton}>зарегистрироваться</Button>
						</NavLink>
					</div>
					<div className={s.mobileLine} />
				</main>
			) : (
				<div className={s.wrapper}>
					<aside className={s.leftSide}>
						<LogoAndName className={s.logo} />
						<div className={s.registerContainer}>
							<p className={s.registerText}>ЕЩЕ НЕТ АККАУНТА?</p>
							<NavLink to={'/registration'}>
								<Button className={s.button} type='button'>
									зарегистрироваться
								</Button>
							</NavLink>
						</div>
						<div className={s.line} />
					</aside>
					<LoginPageForm />
				</div>
			)}
		</>
	)
}
