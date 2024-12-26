import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../Button/Button'
import { Modal } from '../Modal'
import s from './ModalEmailVisible.module.css'
import { formEmailValues } from '../../../../app/types/formEmailValues'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateEmailSchema } from '../../../../utils/validateEmailSchema'
import clsx from 'clsx'

interface ModalEmailVisibleProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalEmailVisible = ({
	visible,
	setVisible,
}: ModalEmailVisibleProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<formEmailValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateEmailSchema),
	})

	const handleOnClick = () => {
		setVisible(false)
	}
	const onSubmit: SubmitHandler<formEmailValues> = data => {
		console.log({ data })
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}

	return (
		<Modal title={'Изменение E-mail'} visible={visible} setVisible={setVisible}>
			<form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.inputContainer}>
					<input
						className={clsx(s.input, {
							[s.error]: errors.email,
						})}
						id='email'
						type='email'
						placeholder='Введите новый адрес E-mail'
						{...register('email')}
					/>
					{errors.email && (
						<p className={s.error_message}>{errors.email.message}</p>
					)}
				</div>
				<Button className={s.button} type='submit' onClick={handleOnClick}>
					Сохранить изменения
				</Button>
			</form>
		</Modal>
	)
}
