import { ReactSVG } from 'react-svg'
import { Modal } from '../Modal'
import s from './ModalNewPassword.module.css'
import { eye } from '../../../../assets/img'
import clsx from 'clsx'
import { Button } from '../../Button/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { formNewPasswordValues } from '../../../../app/types/formNewPasswordValues'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateNewPasswordSchema } from '../../../../utils/validateNewPasswordSchema'
import { useConfirmPasswordVisible, usePasswordVisible } from '../../../../hooks'

interface ModalNewPasswordProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

export const ModalNewPassword = ({
	visible,
	setVisible,
}: ModalNewPasswordProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<formNewPasswordValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateNewPasswordSchema),
	})

	const passwordVisible = usePasswordVisible(false)
	const confirmPasswordVisible = useConfirmPasswordVisible(false)
	const handleOnClick = () => {
		setVisible(false)
	}

	const onSubmit: SubmitHandler<formNewPasswordValues> = data => {
		console.log({ data })
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}
	return (
		<Modal title={'Изменение пароля'} visible={visible} setVisible={setVisible}>
			<form className={s.form_container} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.input_container}>
					<div className={clsx(s.input, { [s.error]: errors.password })}>
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
					Сохранить изменения
				</Button>
			</form>
		</Modal>
	)
}
