import { useParams } from 'react-router'
import { Comment } from './Comment/Comment'
import s from './Comments.module.css'
import { useGetComments } from 'shared/apiHooks/apiGetComments'
import { useVisible } from '@hooks/useMoreAndVisibleComments'
export const Comments = () => {
	const { id } = useParams<{ id?: string }>() // Получаем id книги из URL
	const { data: comments = [], isLoading, error } = useGetComments(id!)
	const { visibleItems, showMore } = useVisible(3)

	if (isLoading) return <p>Загрузка комментариев...</p>
	if (error) return <p>Ошибка загрузки комментариев: {error.message}</p>

	return (
		<section className={s.commentsContainer}>
			{comments.length ? (
				comments
					.slice(0, visibleItems)
					.map(comment => (
						<Comment
							key={comment._id}
							rating={comment.rating}
							title={comment.title}
							text={comment.text}
							date={comment.date}
							userId={comment.userId}
							likes={comment.likes}
							dislikes={comment.dislikes}
							commentId={comment._id}
						/>
					))
			) : (
				<p className={s.noComments}>
					Комментариев ещё нет — вы можете быть первым
				</p>
			)}

			{comments.length > visibleItems && (
				<p className={s.showMoreComment} onClick={showMore}>
					Показать больше комментариев
				</p>
			)}
		</section>
	)
}
