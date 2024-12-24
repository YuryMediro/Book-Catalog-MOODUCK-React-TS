import { useState } from 'react'

export const useFormModal = (initial: boolean) => {
	const [visible, setVisible] = useState<boolean>(initial)

	const handleOnClick = () => {
		setVisible(!visible)
	}
	return { visible, handleOnClick }
}
