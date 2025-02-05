import { IAuthorsAndGenres } from 'models/IAuthorsAndGenres'
import { FilterMobile } from '../FilterMobile/FilterMobile'
import { ChangeEvent } from 'react'
import { Filter } from '../Filter/Filter'

interface FilterContainerProps {
	setColum: (type: boolean) => void
	searchedAuthors: IAuthorsAndGenres[]
	genres: IAuthorsAndGenres[]
	handleOnClickAuthor: (id: string) => void
	handleOnClickGenre: (id: string) => void
	value: string
	handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
	clear: () => void
	onApplyFilters: () => void
}

export const FilterContainer = ({
	setColum,
	genres,
	searchedAuthors,
	handleOnClickAuthor,
	handleOnClickGenre,
	value,
	handleOnChange,
	clear,
	onApplyFilters,
}: FilterContainerProps) => {
	const mobile = window.innerWidth <= 1165
	// <>
	// 	<div className={s.desktop}><FilterMobile /></div>
	// 	<div><Filter /></div>
	// </>
	return (
		<>
			{mobile ? (
				<FilterMobile setColum={setColum} />
			) : (
				<Filter
					searchedAuthors={searchedAuthors}
					genres={genres}
					handleOnClickAuthor={handleOnClickAuthor}
					handleOnClickGenre={handleOnClickGenre}
					value={value}
					handleOnChange={handleOnChange}
					clear={clear}
					onApplyFilters={onApplyFilters}
				/>
			)}
		</>
	)
}
