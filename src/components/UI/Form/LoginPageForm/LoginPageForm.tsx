import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../Button/Button'
import s from './LoginPageForm.module.css'
import { ReactSVG } from 'react-svg'
// import { useDispatch } from 'react-redux'
// import { AppDispatch } from '../../../Redux/Reducers/redux-store'
import { yupResolver } from '@hookform/resolvers/yup'
import { ModalForgetPassword } from '../../modal/ModalForgetPassword/ModalForgetPassword'
import { ModalResetPassword } from '../../modal/ModalResetPassword/ModalResetPassword'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router'
import { formLoginValues } from '../../../../app/types/formLoginValues'
import { validateLoginSchema } from '../../../../utils/validateLoginSchema'
import { usePasswordVisible } from '../../../../hooks/usePasswordVisible'
import { useFormModal } from '../../../../hooks/useFormModal'
import { email, eye, lock } from '../../../../assets/img'
import clsx from 'clsx'
export const LoginPageForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<formLoginValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateLoginSchema),
	})

	// const useAppDispatch: () => AppDispatch = useDispatch
	// const dispatch = useAppDispatch()

	const passwordVisible = usePasswordVisible(false)
	const modalForgetPassword = useFormModal(false)
	const modalResetPassword = useFormModal(false)

	const onSubmit: SubmitHandler<formLoginValues> = (data, event) => {
		console.log({ data })
		event?.preventDefault()
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}

	return (
		<section className={s.logIn_form_container}>
			<h1 className={s.logIn_title}>ВХОД</h1>
			<form className={s.logIn_form} onSubmit={handleSubmit(onSubmit)}>
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
				<p
					className={s.forgot_password}
					onClick={modalForgetPassword.handleOnClick}
				>
					Забыли пароль?
				</p>
				{createPortal(
					<ModalForgetPassword
						visible={modalForgetPassword.visible}
						setVisible={modalForgetPassword.handleOnClick}
						setResetPasswordVisible={modalResetPassword.handleOnClick} //чтобы открыть modalResetPass
					/>,
					document.body
				)}
				{/* для формы в форме createPortal */}
				{createPortal(
					<ModalResetPassword
						visible={modalResetPassword.visible}
						setVisible={modalResetPassword.handleOnClick}
					/>,
					document.body
				)}
				{/* для формы в форме createPortal */}
				<div className={s.button_container}>
					<NavLink to={'/booksPage'}>
						<Button
							className={s.submit_button}
							type='submit'
							disabled={!isValid}
						>
							Войти
						</Button>
					</NavLink>
				</div>
			</form>
		</section>
	)
}
