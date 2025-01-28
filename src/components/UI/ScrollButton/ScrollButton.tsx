import { useEffect, useState, MouseEvent } from 'react'
import s from './ScrollButton.module.css'
import clsx from 'clsx'

export const ScrollButton = () => {
	const [visible, setVisible] = useState<boolean>(false)

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setVisible(true)
			} else {
				setVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<a
			onClick={e => handleClick(e)}
			className={clsx(s.scrollButton, s[`scrollButton__${visible}`])}
		>
			↑
		</a>
	)
}
