import s from './Header.module.css'
import { NavLink } from 'react-router'
import { ReactSVG } from 'react-svg'
import { Line } from '@components/UI/Line/Line'
import { search, unknownAvatar } from '@assets/img'
import { LogoAndName } from '../LogoAndName/LogoAndName'
import { useUser } from 'context/UserContext'

export const Header = () => {
	const mobile = window.innerWidth <= 767
	const { user } = useUser()
	console.log('User ID from context:', user)

	return (
		<>
			{mobile ? (
				<header className={s.mobileWrapper}>
					<div className={s.mobileHeader_top}>
						<NavLink to={'/booksPage'}>
							<LogoAndName className={s.LogoAndName} />
						</NavLink>
						<div className={s.mobileHeader_right}>
							<NavLink to={user ? `/userPage/${user.id}` : '/login'}>
								<ReactSVG src={unknownAvatar} />
							</NavLink>
						</div>
					</div>
					<div className={s.mobileInput}>
						<form className={s.mobileSearch_bar_form}>
							<div className={s.mobileInput_container}>
								<input
									className={s.mobileInput_field}
									type='text'
									placeholder='Название книги'
								/>
								<ReactSVG src={search} className={s.search_icon} />
							</div>
						</form>
					</div>
					<Line />
				</header>
			) : (
				<header className={s.wrapper}>
					<div className={s.header_top}>
						<NavLink to={'/booksPage'}>
							<LogoAndName className={s.LogoAndName} />
						</NavLink>
						<div className={s.header_right}>
							<form className={s.search_bar_form}>
								<div className={s.input_container}>
									<input
										className={s.input_field}
										type='text'
										placeholder='Название книги'
									/>
									<ReactSVG src={search} className={s.search_icon} />
								</div>
							</form>
							<NavLink to={user ? `/userPage/${user.id}` : '/login'}>
								<ReactSVG src={unknownAvatar} />
							</NavLink>
						</div>
					</div>
					<Line />
				</header>
			)}
		</>
	)
}
