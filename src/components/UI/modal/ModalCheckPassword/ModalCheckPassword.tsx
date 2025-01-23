import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../Button/Button'
import { Modal } from '../Modal'
import s from './ModalCheckPassword.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { eye } from '../../../../assets/img'
import { formCheckPasswordValues } from '../../../../utils/types/formCheckPasswordValues'
import { validateCheckPasswordSchema } from '../../../../utils/validate/validateCheckPasswordSchema'
import { usePasswordVisible } from '../../../../hooks'

interface ModalCheckPasswordProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	setNewPassword: (visible: boolean) => void //чтобы открыть modalResetPass
}

export const ModalCheckPassword = ({
	visible,
	setVisible,
	setNewPassword,
}: ModalCheckPasswordProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<formCheckPasswordValues>({
		mode: 'onBlur',
		resolver: yupResolver(validateCheckPasswordSchema),
	})

	const passwordVisible = usePasswordVisible(false)

	const onSubmit: SubmitHandler<formCheckPasswordValues> = (data, event) => {
		console.log({ data })
		event?.preventDefault()
		reset()
		setVisible(false)
		setNewPassword(true)
		// Здесь можно добавить логику для отправки данных на сервер
	}
	return (
		<Modal title={'Изменение пароля'} visible={visible} setVisible={setVisible}>
			<form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
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
				<Button className={s.button} type='submit'>
					Подтвердить
				</Button>
			</form>
		</Modal>
	)
}
