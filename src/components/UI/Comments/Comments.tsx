import { Comment } from './Comment/Comment'
import s from './Comments.module.css'
export const Comments = () => {
	return (
		<section>
			<Comment rating={0} />
			{/* <p>Комментариев ещё нет — вы можете быть первым</p> */}
			<p className={s.showMoreComment}> Показать больше комментариев</p>
		</section>
	)
}
