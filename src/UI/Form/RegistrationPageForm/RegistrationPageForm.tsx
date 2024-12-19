import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../Button/Button'
import s from './RegistrationPageForm.module.css'
import { ReactSVG } from 'react-svg'
import { email, lock, eye, user } from '../../../assets/img'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../Redux/Reducers/redux-store'
import { usePasswordVisible } from '../../../hooks/usePasswordVisible'
import { validateRegSchema } from '../../../utils/validadeRegScema'
import { yupResolver } from '@hookform/resolvers/yup'
import { formRegValues } from '../../../app/types/formRegValues'
import { useConfirmPasswordVisible } from '../../../hooks/useConfirmPasswordVisible'

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

	const useAppDispatch: () => AppDispatch = useDispatch
	const dispatch = useAppDispatch()

	const passwordVisible = usePasswordVisible(false)
	const confirmPasswordVisible = useConfirmPasswordVisible(false)

	const onSubmit: SubmitHandler<formRegValues> = data => {
		console.log({ data })
		reset()
		// Здесь можно добавить логику для отправки данных на сервер
	}
	return (
		<section className={s.registration_form_container}>
			<h1 className={s.registration_title}>РЕГИСТРАЦИЯ</h1>
			<form className={s.registration_form} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.input_container}>
					<ReactSVG src={user} />
					<input
						className={s.input_field}
						id='username'
						type='username'
						placeholder='nickname123'
						{...register('username')}
					/>
				</div>
				{errors.username && (
					<p className={s.error_message}>{errors.username.message}</p>
				)}
				<div className={s.input_container}>
					<ReactSVG src={email} />
					<input
						className={s.input_field}
						id='email'
						type='email'
						placeholder='example@mail.ru'
						{...register('email')}
					/>
				</div>
				{errors.email && (
					<p className={s.error_message}>{errors.email.message}</p>
				)}
				<div className={s.input_container}>
					<ReactSVG src={lock} />
					<input
						className={s.input_field}
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
				<div className={s.input_container}>
					<ReactSVG src={lock} />
					<input
						className={s.input_field}
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

				<div className={s.button_container}>
					<Button className={s.submit_button} type='submit' disabled={!isValid}>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</section>
	)
}
