import React, { createContext, useContext, useState } from 'react'

type User = {
	id: string
	// другие поля пользователя
}

type UserContextType = {
	user: User | null
	setUser: (user: User | null) => void
	logout: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	const logout = () => {
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, setUser, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext)
