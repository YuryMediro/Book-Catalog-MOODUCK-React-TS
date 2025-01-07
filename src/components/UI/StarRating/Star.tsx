import { ReactSVG } from 'react-svg'
import { starNotPainted, starPainted } from '../../../assets/img'

interface StarProps {
	star: boolean
}

export const Star = ({ star }: StarProps) => {
	return (
		<>
			{star ? (
				<ReactSVG src={starPainted} />
			) : (
				<ReactSVG src={starNotPainted} />
			)}
		</>
	)
}
