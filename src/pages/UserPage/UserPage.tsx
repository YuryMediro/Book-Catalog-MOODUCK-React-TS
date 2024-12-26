import { Layout } from '../../components/Layout/Layout'
import { Line } from '../../components/UI/Line/Line'
import { UserSettings } from '../../components/UserComponents/UserSettins'
import s from './UserPage.module.css'

export const UserPage = () => {
	return (
		<div className={s.wrapper}>
			<Layout>
				<div className={s.main}>
					<div>
						<div>
							<p>Личные данные</p>
							<UserSettings/>
							<Line/>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}
