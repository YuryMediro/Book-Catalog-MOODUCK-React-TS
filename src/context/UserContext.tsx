import React, { createContext, useContext, useState, useEffect } from 'react'

type User = {
	id: string
	// другие поля пользователя
}

type UserContextType = {
	user: User | null
	token: string | null
	setUser: (user: User | null) => void
	setToken: (token: string | null) => void
	logout: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(() => {
		const savedUser = localStorage.getItem('user')
		return savedUser ? JSON.parse(savedUser) : null
	})
	
	const [token, setToken] = useState<string | null>(() =>
		localStorage.getItem('token')
	) // Загружаем токен из localStorage

	// Синхронизация `user` и `token` с `localStorage`
	useEffect(() => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user))
		} else {
			localStorage.removeItem('user')
		}
	}, [user])
	// Синхронизация токена с localStorage
	useEffect(() => {
		if (token) {
			localStorage.setItem('token', token)
		} else {
			localStorage.removeItem('token')
		}
	}, [token])

	const logout = () => {
		setUser(null)
		setToken(null) // Удаляем токен при выходе
	}

	return (
		<UserContext.Provider value={{ user, token, setUser, setToken, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext)
