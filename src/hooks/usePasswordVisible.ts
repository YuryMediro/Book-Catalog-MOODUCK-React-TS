import { useState } from 'react'

export const usePasswordVisible = (initial: boolean) => {
	const [visible, setVisible] = useState<boolean>(initial)

	const handleOnClick = () => {
		setVisible(prev => !prev)
	}
	return { visible, handleOnClick }
}