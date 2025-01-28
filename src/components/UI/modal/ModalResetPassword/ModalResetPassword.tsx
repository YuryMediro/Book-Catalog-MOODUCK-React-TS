import { SubmitHandler, useForm } from 'react-hook-form'
import { Modal } from '../Modal'
import s from './ModalResetPassword.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactSVG } from 'react-svg'
import { code, eye, lock } from 'assets/img'
import clsx from 'clsx'
import { Button } from '@components/UI/Button/Button'
import { useConfirmPasswordVisible } from '@hooks/useConfirmPasswordVisible'
import { usePasswordVisible } from '@hooks/usePasswordVisible'
import { formResetPasswordValues } from '@utils/types/formResetPasswordValues'
import { validateResetPasswordSchema } from '@utils/validate/validateResetPassword'


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
	const handleOnClick = () => {
		setVisible(false)
	}
	const onSubmit: SubmitHandler<formResetPasswordValues> = data => {
		console.log({ data })
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}

	return (
		<Modal title={'Сброс пароля'} visible={visible} setVisible={setVisible}>
			<form className={s.reset_pass_form} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.input_container}>
					<div className={clsx(s.input, { [s.error]: errors.code })}>
						<ReactSVG src={code} />
						<input
							className={clsx(s.inputFields, {
								[s.error]: errors.code,
							})}
							type='code'
							placeholder='Введите код с E-mail'
							{...register('code')}
						/>
					</div>
					{errors.code && (
						<p className={s.error_message}>{errors.code.message}</p>
					)}
				</div>
				<div className={s.input_container}>
					<div className={clsx(s.input, { [s.error]: errors.password })}>
						<ReactSVG src={lock} />
						<input
							className={clsx(s.inputFields, {
								[s.error]: errors.password,
							})}
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
				</div>
				<div className={s.input_container}>
					<div className={clsx(s.input, { [s.error]: errors.confirmPassword })}>
						<ReactSVG src={lock} />
						<input
							className={clsx(s.inputFields, {
								[s.error]: errors.confirmPassword,
							})}
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
				</div>

				<Button
					className={s.button}
					disabled={!isValid}
					onClick={handleOnClick}
					type='submit'
				>
					сбросить пароль
				</Button>
			</form>
		</Modal>
	)
}
