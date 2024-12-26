import s from './Header.module.css'
import { LogoAndName } from '../LogoAndName/LogoAndName'
import { NavLink } from 'react-router'
import { ReactSVG } from 'react-svg'
import { search, unknownAvatar } from '../../../assets/img'
import { Line } from '../../UI/Line/Line'

export const Header = () => {
	return (
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
					<NavLink to={'/userPage'}>
						<ReactSVG src={unknownAvatar} />
					</NavLink>
				</div>
			</div>
			<Line />
		</header>
	)
}
