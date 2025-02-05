import s from './Header.module.css'
import { NavLink } from 'react-router'
import { ReactSVG } from 'react-svg'
import { Line } from '@components/UI/Line/Line'
import { search, unknownAvatar, coverMiddle } from '@assets/img'
import { LogoAndName } from '../LogoAndName/LogoAndName'
import { useUser } from 'context/UserContext'
import { useBooksHooks } from 'shared/apiHooks/apiHooksBooks'
import { useState } from 'react'
import { useSearchBooks } from '@hooks/useSearchBooks'

export const Header = () => {
	const mobile = window.innerWidth <= 767
	const { user } = useUser()

	//Получаем все книги
	const { data } = useBooksHooks({ page: 1, limit: 1000 })
	const books = data?.books || []

	//Задаем состояние для поиска
	const [searchQuery, setSearchQuery] = useState('')
	const { filteredBooks } = useSearchBooks({ books, searchQuery })

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
										value={searchQuery} // Привязываем значение к состоянию
										onChange={e => setSearchQuery(e.target.value)} // Обновляем состояние при вводе
									/>
									<ReactSVG src={search} className={s.search_icon} />
								</div>
							</form>
							{searchQuery && (
								<div className={s.searchResults}>
									{filteredBooks.length > 0 ? (
										filteredBooks.map(book => (
											<NavLink
												key={book._id}
												to={`/bookPage/${book._id}`}
												className={s.searchItem}
											>
												<img
													src={book.img.smallFingernail}
													alt={book.title}
													className={s.image}
													onError={({ currentTarget }) => {
														currentTarget.onerror = null
														currentTarget.src = coverMiddle
													}}
												/>
												<div className={s.bookInfo}>
													<p className={s.bookTitle}>{book.title}</p>
													<p className={s.bookAuthor}>
														{book.authors.join(', ')}
													</p>
												</div>
											</NavLink>
										))
									) : (
										<p className={s.noResults}>Ничего не найдено</p>
									)}
								</div>
							)}
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
