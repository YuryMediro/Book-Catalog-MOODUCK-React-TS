import { useEffect, useState } from 'react'
import s from './ErrorMessage.module.css'
import clsx from 'clsx'

interface ErrorMessageProps {
	message: string
	onClose: () => void // Функция, вызываемая при закрытии уведомления
	duration: number // продолжительность показа ошибки
}

export const ErrorMessage = ({
	message,
	onClose,
	duration,
}: ErrorMessageProps) => {
	const [progress, setProgress] = useState(100)

	useEffect(() => {
		// Начальный шаг времени
		const step = 100 // Шаг изменения
		const interval = 5 // Интервал в миллисекундах (чем меньше, тем плавнее)

		const totalSteps = duration / interval
		const decrement = step / totalSteps

		const intervalId = setInterval(() => {
			setProgress(prev => {
				const newProgress = prev - decrement
				if (newProgress <= 0) {
					clearInterval(intervalId) // Останавливаем прогресс, когда он достигает 0
					onClose() // Закрытие уведомления
					return 0
				}
				return newProgress
			})
		}, interval)

		return () => clearInterval(intervalId) // Очистка интервала при размонтировании
	}, [duration, onClose])

	return (
		<div className={clsx(s.errorNotification)}>
			<div
				className={s.progressBar}
				style={{
					width: `${progress}%`, // Применение плавного изменения ширины
				}}
			/>
			<div className={s.message}>{message}</div>
		</div>
	)
}
