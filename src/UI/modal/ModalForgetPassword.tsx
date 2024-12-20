import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { Modal } from './Modal'
import s from './ModalForgetPassword.module.css'
import { formForgetPasswordValues } from '../../app/types/formForgetPasswordValues'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateForgetPasswordSchema } from '../../utils/validateForgetPasswordSchema'

interface ModalForgetPasswordProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalForgetPassword = ({
	visible,
	setVisible,
}: ModalForgetPasswordProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<formForgetPasswordValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateForgetPasswordSchema),
	})

	const onSubmit: SubmitHandler<formForgetPasswordValues> = data => {
		console.log({ data })
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}

	return (
		<Modal title={'Забыли пароль?'} visible={visible} setVisible={setVisible}>
			<form className={s.forget_pass_form} onSubmit={handleSubmit(onSubmit)}>
				<p className={s.description}>
					Введите ваш E-mail, мы отправим письмо с кодом восстановления пароля
				</p>
				<div className={s.input_container}>
					<input
						className={`${s.input} ${errors.email ? s.error : ''}`}
						type='email'
						placeholder='Введите ваш E-mail'
						{...register('email')}
					/>
					{errors.email && (
						<p className={s.error_message}>{errors.email.message}</p>
					)}
				</div>
				<Button className={s.button} disabled={!isValid}>
					отправить
				</Button>
			</form>
		</Modal>
	)
}
