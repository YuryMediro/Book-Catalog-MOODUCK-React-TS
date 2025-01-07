import * as yup from 'yup'

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/)

export const validateEmailSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.matches(regExpEmail, 'Неверный формат почты')
		.required('Поле E-mail обязательно'),
})
