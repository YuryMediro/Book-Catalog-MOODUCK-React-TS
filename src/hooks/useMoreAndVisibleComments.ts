import { useState } from 'react'

export const useVisible = (initial: number) => {
	const [visibleItems, setVisibleItems] = useState<number>(initial)

	const showMore = () => {
		setVisibleItems(count => count + initial)
	}
	return { visibleItems, showMore }
}
