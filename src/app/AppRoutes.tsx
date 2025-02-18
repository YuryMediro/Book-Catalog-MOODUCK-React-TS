import { Navigate, Outlet, Route, Routes } from 'react-router'
import { LoginPage } from 'pages/LoginPage/LoginPage'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import { BooksPage } from 'pages/BooksPage/BooksPage'
import { BookPage } from 'pages/BookPage/BookPage'
import { UserPage } from 'pages/UserPage/UserPage'
import { useUser } from 'context/UserContext'

//  Компонент для защиты приватных маршрутов
//  Перенаправляет неавторизованных пользователей на страницу входа
const AuthRoute = () => {
	const { user, token } = useUser()
	return user && token ? <Outlet /> : <Navigate to='/login' replace />
}

//  Компонент для защиты публичных маршрутов
//  Перенаправляет авторизованных пользователей на главную страницу
const GuestRoute = () => {
	const { user, token } = useUser()
	return user && token ? <Navigate to='/booksPage' replace /> : <Outlet />
}

export const AppRoutes = () => {
	return (
		<Routes>
			{/* Публичные маршруты доступные только гостям */}
			<Route element={<GuestRoute />}>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
			</Route>
			{/* Приватные маршруты доступные только авторизованным */}
			<Route element={<AuthRoute />}>
				<Route path='/booksPage' element={<BooksPage />} />
				<Route path='/bookPage/:id' element={<BookPage />} />
				<Route path='/userPage/:id' element={<UserPage />} />
			</Route>
			{/* Дефолтные редиректы */}
			<Route path='/' element={<Navigate to='/login' replace />} />
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	)
}
