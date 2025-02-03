import { Preloader } from '@components/UI/Preloader/Preloader'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { apiGet, apiPost } from 'shared/api/apiService'

type User = {
	id: string
	// другие поля пользователя
}

type UserContextType = {
	user: User | null
	setUser: (user: User | null) => void
	logout: () => void
	checkAuth: () => Promise<void>
	isLoading: boolean
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	const checkAuth = async () => {
		try {
			const response = await apiGet<{ user: User }>('/auth/refresh')
			setUser(response.user)
		} catch (error) {
			setUser(null)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])

	const logout = async () => {
		try {
			await apiPost('/auth/logout', {})
		} finally {
			setUser(null)
		}
	}

	if (isLoading) {
		return <Preloader/>
	}

	return (
		<UserContext.Provider
			value={{ user, setUser, logout, checkAuth, isLoading }}
		>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext)
