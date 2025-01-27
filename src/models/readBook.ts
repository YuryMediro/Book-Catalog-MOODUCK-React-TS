import { Images } from './Books'

export interface readBook {
	_id: string
	title: string
	authors?: string[]
	painters?: string[]
	translaters?: string[]
	bookSeries?: string
	bookBinding?: string
	genres?: string[]
	description?: string
	publisher?: string
	publishedDate?: string
	pageCount?: number
	img?: Images
}
