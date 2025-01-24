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
