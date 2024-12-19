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
					<div className={s.register_container}>
						<p className={s.register_text}>УЖЕ ЕСТЬ АККАУНТ?</p>
						<Link to={'/'}>
							<Button className={s.register_button}>войти</Button>
						</Link>
					</div>
					<div className={s.divider} />
				</aside>
				<RegistrationPageForm />
			</main>
		</>
	)
}
