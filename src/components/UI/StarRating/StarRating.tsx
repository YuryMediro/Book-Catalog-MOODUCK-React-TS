import { Rating } from 'react-simple-star-rating'
import { Star } from './Star'

interface StarRatingProps {
	rating: number
	disabled: boolean
	handleRating: (rating: number) => void
}

export const StarRating = ({ handleRating, rating, disabled }: StarRatingProps) => {
	return (
		<div>
			<Rating
				allowHover={disabled ? false : true}
				onClick={handleRating}
				initialValue={rating}
				emptyIcon={<Star star={false}></Star>}
				fillIcon={<Star star={true}></Star>}
				emptyStyle={{ display: 'flex' }}
				fillStyle={{ display: '-webkit-inline-box' }} //заполнение звезд
				transition //плавность заполнения звезд
				tooltipArray={['1', '2', '3', '4', '5']} //Массив строк для отображения во всплывающей подсказке
			/>
		</div>
	)
}
