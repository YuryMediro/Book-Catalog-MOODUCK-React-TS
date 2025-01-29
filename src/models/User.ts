export interface User {
	id: string
	email: string
	username: string
	password: string
	isActivated: boolean
	activationLink: string
}