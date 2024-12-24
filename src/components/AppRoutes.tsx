import { Route, Routes } from 'react-router'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'

export const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
			</Routes>
		</>
	)
}
