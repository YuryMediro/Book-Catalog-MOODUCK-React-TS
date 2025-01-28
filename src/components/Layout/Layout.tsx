import {  ReactNode } from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

interface LayoutProps {
	children: ReactNode 
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header /> 
			{children}
			<Footer />
		</>
	)
}
