import { SubmitHandler, useForm } from 'react-hook-form'
import s from './RegistrationPageForm.module.css'
import { ReactSVG } from 'react-svg'
import { yupResolver } from '@hookform/resolvers/yup'
import { email, eye, lock, user } from 'assets/img'
import clsx from 'clsx'
import { Button } from '@components/UI/Button/Button'
import { ModalCompleteReg } from '@components/UI/modal/ModalCompleteReg/ModalCompleteReg'
import { useConfirmPasswordVisible } from '@hooks/useConfirmPasswordVisible'
import { useFormModal } from '@hooks/useFormModal'
import { usePasswordVisible } from '@hooks/usePasswordVisible'
import { formRegValues } from '@utils/types/formRegValues'
import { validateRegSchema } from '@utils/validate/validadeRegSchema'
import {
	RegisterProps,
	useRegisterHooks,
} from 'shared/apiHooks/apiHooksRegister'
import React from 'react'
import { ErrorMessage } from '@components/UI/Error/ErrorMessage'

export const RegistrationPageForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<formRegValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateRegSchema),
	})

	const [serverError, setServerError] = React.useState<string | null>(null)
	const { mutate, status } = useRegisterHooks(setServerError)

	console.log(status)

	const passwordVisible = usePasswordVisible(false)
	const confirmPasswordVisible = useConfirmPasswordVisible(false)
	const completeReg = useFormModal(false)

	console.log(`COMPLETE_REG >> ${completeReg.visible}`)

	const onSubmit: SubmitHandler<RegisterProps> = data => {
		mutate(
			{
				email: data.email,
				password: data.password,
				username: data.username,
			},
			{
				onSuccess: () => {
					reset() // Открываем модальное окно после успешной регистрации
				},
				onError: () => {
					reset()
				},
			}
		)
	}

	// Проверка, в процессе ли загрузка
	const isLoading = status === 'pending'

	return (
		<section className={s.registration_form_container}>
			<h1 className={s.registration_title}>РЕГИСТРАЦИЯ</h1>
			<form className={s.registration_form} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.input_container}>
					<div className={clsx(s.input, { [s.error]: errors.username })}>
						<ReactSVG src={user} />
						<input
							className={clsx(s.inputFields, {
								[s.error]: errors.username,
							})}
							id='username'
							type='username'
							placeholder='nickname123'
							{...register('username')}
						/>
					</div>
					{errors.username && (
						<p className={s.error_message}>{errors.username.message}</p>
					)}
				</div>
				<div className={s.input_container}>
					<div className={clsx(s.input, { [s.error]: errors.email })}>
						<ReactSVG src={email} />
						<input
							className={clsx(s.inputFields, {
								[s.error]: errors.email,
							})}
							id='email'
							type='email'
							placeholder='example@mail.ru'
							{...register('email')}
						/>
					</div>
					{errors.email && (
						<p className={s.error_message}>{errors.email.message}</p>
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
							placeholder='strongPsW2#'
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
							placeholder='strongPsW2#'
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

				<div className={s.button_container}>
					<Button
						className={s.submit_button}
						type='submit'
						disabled={!isValid || isLoading}
					>
						{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
					</Button>
				</div>
				<ModalCompleteReg
					visible={completeReg.visible}
					setVisible={completeReg.handleOnClick}
				/>
			</form>
			{serverError && (
				<ErrorMessage
					message={serverError}
					duration={5000}
					onClose={() => setServerError(null)}
				/>
			)}
		</section>
	)
}
