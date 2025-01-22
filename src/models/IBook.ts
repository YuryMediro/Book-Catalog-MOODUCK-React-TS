export interface IImages {
	largeFingernail: string
	mediumFingernail: string
	smallFingernail: string
}
export interface IBook {
	// все поля которые есть у книги при запросе на ВСЕ книги
	_id: string
	authors: string[]
	genres: string[]
	title: string
	img: IImages
	description: string
	pageCount: number
	publisher: string
}
