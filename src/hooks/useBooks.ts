import { useState } from 'react'

interface useBooksProps {
	initialColum: boolean
}
export const useBooks = ({ initialColum }: useBooksProps) => {
	const [colum, setColum] = useState(initialColum)

	const handleOnClickView = (type: boolean) => {
		setColum(type)
	}

	return {
		colum,
		handleOnClickView,
	}
}
