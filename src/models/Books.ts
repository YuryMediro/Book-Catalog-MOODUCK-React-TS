import { TArray } from "@utils/checkExtendOfUser"

export interface Images {
	largeFingernail: string
	mediumFingernail: string
	smallFingernail: string
}
// все поля которые есть у книги при запросе на ВСЕ книги
export interface Book {
	_id: string
	title: string
	authors: string[]
	description: string
	publisher: string
	pageCount: number
	img: Images
}

export type TBooks = {
	books: Array<Book>
	totalPages: number
}

export interface TComment {
	// все поля которые есть у комментариев
	bookId: string
	date: number
	dislikes: TArray[]
	likes: TArray[]
	rating: number
	text: string
	title: string
	userId: string
	_id: string
}
