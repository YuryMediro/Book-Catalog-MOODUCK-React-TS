import { Layout } from '../../components/Layout/Layout'
import s from './BooksPage.module.css'
export const BooksPage = () => {
	return (
		<div className={s.wrapper}>
			<Layout>
				<div className={s.content}>Books Page</div>
			</Layout>
		</div>
	)
}
