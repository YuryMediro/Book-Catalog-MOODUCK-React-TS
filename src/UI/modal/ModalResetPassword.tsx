import { SubmitHandler, useForm } from 'react-hook-form'
import { formResetPasswordValues } from '../../app/types/formResetPasswordValues'
import { Button } from '../Button/Button'
import { Modal } from './Modal'
import s from './ModalResetPassword.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateResetPasswordSchema } from '../../utils/validateResetPassword'
import { ReactSVG } from 'react-svg'
import { code, eye, lock } from '../../assets/img'
import { usePasswordVisible } from '../../hooks/usePasswordVisible'
import { useConfirmPasswordVisible } from '../../hooks/useConfirmPasswordVisible'
import { useFormModal } from '../../hooks/useFormModal'

interface ModalResetPasswordProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalResetPassword = ({
	visible,
	setVisible,
}: ModalResetPasswordProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<formResetPasswordValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateResetPasswordSchema),
	})

	const passwordVisible = usePasswordVisible(false)
	const confirmPasswordVisible = useConfirmPasswordVisible(false)
	const completeReg = useFormModal(false)

	const onSubmit: SubmitHandler<formResetPasswordValues> = data => {
		console.log({ data })
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}

	return (
		<Modal title={'Сброс пароля'} visible={visible} setVisible={setVisible}>
			<form className={s.reset_pass_form} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.input_container}>
					<ReactSVG src={code} />
					<input
						className={s.input_field}
						type='code'
						placeholder='Введите код с E-mail'
						{...register('code')}
					/>
				</div>
				{errors.code && (
					<p className={s.error_message}>{errors.code.message}</p>
				)}
				<div className={s.input_container}>
					<ReactSVG src={lock} />
					<input
						className={s.input_field}
						id='password'
						type={passwordVisible.visible ? 'text' : 'password'}
						placeholder='Введите ваш новый пароль'
						{...register('password')}
					/>
					<ReactSVG
						className={s.eye_icon}
						src={eye}
						onClick={passwordVisible.handleOnClick}
					/>
				</div>
				{errors.password && (
					<p className={s.error_message}>{errors.password.message}</p>
				)}
				<div className={s.input_container}>
					<ReactSVG src={lock} />
					<input
						className={s.input_field}
						id='confirmPassword'
						type={confirmPasswordVisible.visible ? 'text' : 'password'}
						placeholder='Введите ваш новый пароль'
						{...register('confirmPassword')}
					/>
					<ReactSVG
						className={s.eye_icon}
						src={eye}
						onClick={confirmPasswordVisible.handleOnClick}
					/>
				</div>
				{errors.confirmPassword && (
					<p className={s.error_message}>{errors.confirmPassword.message}</p>
				)}

				<Button
					className={s.button}
					disabled={!isValid}
					onClick={completeReg.handleOnClick}
				>
					сбросить пароль
				</Button>
			</form>
		</Modal>
	)
}
