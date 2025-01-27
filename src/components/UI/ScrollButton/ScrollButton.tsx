import s from './ScrollButton.module.css'
import ScrollToTop from 'react-scroll-to-top'

export const ScrollButton = () => {
	return (
		<ScrollToTop
			className={s.scrollButton}
			smooth
			component={<div className={s.scroll}>↑</div>}
		/>
	)
}
