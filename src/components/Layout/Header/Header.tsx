import logo from '../../../public/assets/img/duck.svg'
import iconSearch from '../../../public/assets/img/iconsearch.svg'
import userLogo from '../../../public/assets/img/userlogo.svg'
import s from './Header.module.css'

export const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.header_logo}>
				<div className={s.logo}>
					<img src={logo} alt='' />
				</div>
				<div className={s.header_title}>MOODUCK</div>
			</div>
			<div></div>
			<div className={s.header_search}>
				<form className={s.search_book}>
					<input
						className={s.inputBook}
						type='text'
						placeholder='Название книги'
					/>
					<button type={'submit'} className={s.iconSearch}>
						<img src={iconSearch} alt='' />
					</button>
				</form>

				<div className={s.userLogo}>
					<img className={s.user_logo} src={userLogo} alt='' />
				</div>
			</div>
			<hr className={s.line} />
		</div>
	)
}
