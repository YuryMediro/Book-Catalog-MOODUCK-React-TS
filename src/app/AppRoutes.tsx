import { Route, Routes } from 'react-router'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'
import { UserPage } from '../pages/UserPage/UserPage'
import { BookPage } from '../pages/BookPage/BookPage'
import { BooksPage } from '../pages/BooksPage/BooksPage'

export const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/booksPage' element={<BooksPage />} />
				<Route path='/bookPage' element={<BookPage />} />
				<Route path='/userPage' element={<UserPage />} />
			</Routes>
		</>
	)
}
