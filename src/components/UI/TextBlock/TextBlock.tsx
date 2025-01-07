import s from './TextBlock.module.css'

interface TextBlockProps {
	isExpanded: boolean
	setIsExpanded: (visible: boolean) => void
}

export const TextBlock = ({ isExpanded, setIsExpanded }: TextBlockProps) => {
	const toggleText = () => {
		setIsExpanded(!isExpanded)
	}
	const text = `Смотрела фильм и постановку в театре, но книга это отдельная любовь.
	Множество интересных цитат и мыслей которые приходиться перечитывать по
	несколько раз что бы полностью уловить мысль которую закладывал автор.
	Огромное количество противоречивых моментов от которых испытываешь
	различные эмоции и хочешь читать дальше. Советую всем, одна из тех книг
	с которой можно начать читать классику.`

	return (
		<div className={s.textBlock}>
			<div className={s.textContent}>
				{isExpanded ? text : `${text.slice(0, 50)}...`}
			</div>
			<button className={s.toggleButton} onClick={toggleText}>
				{isExpanded ? 'Скрыть' : 'Показать ещё'}
			</button>
		</div>
	)
}
