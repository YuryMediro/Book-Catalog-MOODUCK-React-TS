import { IAuthorsAndGenres } from "models/IAuthorsAndGenres"

export const sortAuthorsGenres = (
	objects: IAuthorsAndGenres[]
): IAuthorsAndGenres[] => {
	return objects.sort((a, b) => a.author.localeCompare(b.author))
}
