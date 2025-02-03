import { useState } from 'react'
import s from './Comment.module.css'
import { ReactSVG } from 'react-svg'
import { dislike, like } from 'assets/img'
import { TextBlock } from '@components/UI/TextBlock/TextBlock'
import { StarRating } from '@components/UI/StarRating/StarRating'
import { useDate } from '@hooks/useDate'
import { TArray } from '@utils/checkExtendOfUser'
import { useUserData } from 'shared/apiHooks/apiGetUser'

interface CommentProps {
	rating: number
	initialLikes?: number
	initialDislikes?: number
	title: string
	text: string
	date: number
	userId: string
	dislikes: TArray[]
	likes: TArray[]
	commentId: string
}

export const Comment = ({
	rating,
	title,
	text,
	date,
	dislikes,
	likes,
	userId,
	commentId,
}: CommentProps) => {
	const { formattedDate } = useDate(date)
	const { data: userData } = useUserData(userId)

	const [isExpanded, setIsExpanded] = useState(false)
	
	return (
		<div className={s.commentContainer}>
			<div className={s.header}>
				<p>{userData?.username}</p>
				<p>{formattedDate}</p>
			</div>
			<div className={s.content}>
				<p className={s.title}>{title}</p>
				<TextBlock
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
					text={text}
				/>
			</div>
			<div className={s.ratingContainer}>
				<StarRating rating={rating} handleRating={() => {}} disabled={true} />
				<div className={s.likeDisContainer}>
					<div className={s.likeDis}>
						<ReactSVG src={like} className={s.like} />
					</div>
					<span>{likes?.length}</span>
					<div className={s.likeDis}>
						<ReactSVG src={dislike} className={s.dislike} />
					</div>
					<span>{dislikes?.length}</span>
				</div>
			</div>
		</div>
	)
}
