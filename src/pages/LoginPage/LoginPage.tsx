import { Link } from 'react-router'
import { LogoAndName } from '../../components/Layout/LogoAndName/LogoAndName'
import s from './LoginPage.module.css'
import { LogInPageForm } from '../../UI/Form/LogInPageForm/LogInPageForm'
import { Button } from '../../UI/Button/Button'

export const LoginPage = () => {
	return (
		<>
			<main className={s.wrapper}>
				<aside className={s.left_side}>
					<LogoAndName className={s.logo} />
					<div className={s.register_container}>
						<p className={s.register_text}>ЕЩЕ НЕТ АККАУНТА?</p>
						<Link to={'/registration'}>
							<Button className={s.register_button}>зарегистрироваться</Button>
						</Link>
					</div>
					<div className={s.divider} />
				</aside>
				<LogInPageForm />
			</main>
		</>
	)
}
