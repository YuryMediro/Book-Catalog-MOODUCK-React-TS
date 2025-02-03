import s from './TextBlock.module.css'

interface TextBlockProps {
	isExpanded: boolean
	setIsExpanded: (visible: boolean) => void
	text: string
}

export const TextBlock = ({ isExpanded, setIsExpanded, text }: TextBlockProps) => {
	const toggleText = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className={s.textBlock}>
			<div className={s.textContent}>
				{isExpanded ? text : `${text.slice(0, 110)}...`}
			</div>
			<button className={s.toggleButton} onClick={toggleText} type='button'>
				{isExpanded ? 'Скрыть' : 'Показать ещё'}
			</button>
		</div>
	)
}
