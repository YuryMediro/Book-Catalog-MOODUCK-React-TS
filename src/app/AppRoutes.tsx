import { Route, Routes } from 'react-router'
import { LoginPage } from 'pages/LoginPage/LoginPage'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import { BooksPage } from 'pages/BooksPage/BooksPage'
import { BookPage } from 'pages/BookPage/BookPage'
import { UserPage } from 'pages/UserPage/UserPage'

export const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/booksPage' element={<BooksPage />} />
				<Route path='/bookPage/:id' element={<BookPage />} />
				<Route path='/userPage' element={<UserPage />} />
			</Routes>
		</>
	)
}
