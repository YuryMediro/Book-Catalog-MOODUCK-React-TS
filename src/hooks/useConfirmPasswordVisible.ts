import { useState } from 'react'

export const useConfirmPasswordVisible = (initial: boolean) => {
	const [visible, setVisible] = useState<boolean>(initial)

	const handleOnClick = () => {
		setVisible(prev => !prev)
	}
	return { visible, handleOnClick }
}
