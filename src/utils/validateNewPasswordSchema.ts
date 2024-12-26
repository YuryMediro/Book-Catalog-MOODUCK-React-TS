import * as yup from 'yup'

export const validateNewPasswordSchema = yup.object().shape({
	password: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.min(8, 'Пароль должен состоять не менее чем из 8 символов')
		.max(20, 'Пароль не должен состоять более чем из 20 символов'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Пароли должны совпадать')
		.required('Обязательное поле'),
})
