import * as yup from 'yup'

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/)

export const validateForgetPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.matches(regExpEmail, 'Неверный формат почты'),
})
