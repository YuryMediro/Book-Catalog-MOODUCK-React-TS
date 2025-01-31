import { NavLink } from 'react-router'
import s from './RegistrationPage.module.css'
import { LogoAndName } from '@components/Layout/LogoAndName/LogoAndName'
import { Button } from '@components/UI/Button/Button'
import { RegistrationPageForm } from '@components/UI/Form/RegistrationPageForm/RegistrationPageForm'

export const RegistrationPage = () => {
	const mobile = window.innerWidth <= 767
	return (
		<>
			{mobile ? (
				<main className={s.mobileContainer}>
					<LogoAndName className={s.mobileLogo} />
					<div className={s.mobileFormContainer}>
						<RegistrationPageForm />
					</div>
					<div className={s.mobileTextContainer}>
						<p className={s.mobileText}>УЖЕ ЕСТЬ АККАУНТ?</p>
						<NavLink to={'/'}>
							<Button className={s.mobileButton}>войти</Button>
						</NavLink>
					</div>
					<div className={s.mobileLine} />
				</main>
			) : (
				<div className={s.wrapper}>
					<aside className={s.left_side}>
						<LogoAndName className={s.logo} />
						<div className={s.login_container}>
							<p className={s.login_text}>УЖЕ ЕСТЬ АККАУНТ?</p>
							<NavLink to={'/'}>
								<Button className={s.login_button} type='button'>
									войти
								</Button>
							</NavLink>
						</div>
						<div className={s.line} />
					</aside>	
					<RegistrationPageForm />
				</div>
			)}
		</>
	)
}
