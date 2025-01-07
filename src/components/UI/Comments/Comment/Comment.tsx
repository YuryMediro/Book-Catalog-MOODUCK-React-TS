import { useState } from 'react'
import { StarRating } from '../../StarRating/StarRating'
import { TextBlock } from '../../TextBlock/TextBlock'
import s from './Comment.module.css'
import { ReactSVG } from 'react-svg'
import { dislike, like } from '../../../../assets/img'

interface CommentProps {
	rating: number
	initialLikes?: number
	initialDislikes?: number
}

export const Comment = ({
	rating,
	initialLikes = 0,
	initialDislikes = 0,
}: CommentProps) => {
	const [likes, setLikes] = useState(initialLikes)
	const [dislikes, setDislikes] = useState(initialDislikes)
	const [isLiked, setIsLiked] = useState(false)
	const [isDisliked, setIsDisliked] = useState(false)

	const handleLike = () => {
		if (isLiked) {
			setLikes(likes - 1)
		} else {
			setLikes(likes + 1)
			if (isDisliked) {
				setDislikes(dislikes - 1)
				setIsDisliked(false)
			}
		}
		setIsLiked(!isLiked)
	}
	const handleDislike = () => {
		if (isDisliked) {
			setDislikes(dislikes - 1)
		} else {
			setDislikes(dislikes + 1)
			if (isLiked) {
				setLikes(likes - 1)
				setIsLiked(false)
			}
		}
		setIsDisliked(!isDisliked)
	}

	const [isExpanded, setIsExpanded] = useState(false)
	return (
		<div className={s.commentContainer}>
			<div className={s.header}>
				<p>Наталья Фетисова</p>
				<p>06.06.2023</p>
			</div>
			<div className={s.content}>
				<p className={s.title}>Одна из любимых историй</p>
				<TextBlock isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
			</div>
			<div className={s.ratingContainer}>
				<StarRating rating={rating} handleRating={() => {}} />
				<div className={s.likeDisContainer}>
					<div onClick={handleLike} className={s.likeDis}>
						<ReactSVG src={like} className={s.like} />
					</div>
					<span>{likes}</span>
					<div onClick={handleDislike} className={s.likeDis}>
						<ReactSVG src={dislike} className={s.dislike} />
					</div>
					<span>{dislikes}</span>
				</div>
			</div>
		</div>
	)
}
