import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../Button/Button'
import { Modal } from '../Modal'
import s from './ModalForgetPassword.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { formForgetPasswordValues } from '../../../../utils/types/formForgetPasswordValues'
import { validateForgetPasswordSchema } from '../../../../utils/validate/validateForgetPasswordSchema'

interface ModalForgetPasswordProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	setResetPasswordVisible: (visible: boolean) => void //чтобы открыть modalResetPass
}

export const ModalForgetPassword = ({
	visible,
	setVisible,
	setResetPasswordVisible,
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
	const onSubmit: SubmitHandler<formForgetPasswordValues> = (data, event) => {
		console.log({ data })
		event?.preventDefault()
		reset()
		setVisible(false) //чтобы открыть modalResetPass
		setResetPasswordVisible(true) //чтобы открыть modalResetPass
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
						className={clsx(s.input, {
							[s.error]: errors.email,
						})}
						type='email'
						placeholder='Введите ваш E-mail'
						{...register('email')}
					/>
					{errors.email && (
						<p className={s.error_message}>{errors.email.message}</p>
					)}
				</div>
				<Button type='submit' className={s.button} disabled={!isValid}>
					отправить
				</Button>
			</form>
		</Modal>
	)
}
