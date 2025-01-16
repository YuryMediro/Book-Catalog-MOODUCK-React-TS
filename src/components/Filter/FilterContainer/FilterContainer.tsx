import { Filter } from '../Filter/Filter'
import { FilterMobile } from '../FilterMobile/FilterMobile'

interface FilterContainerProps {
	setColum: (type: boolean) => void
}

export const FilterContainer = ({ setColum }: FilterContainerProps) => {
	const mobile = window.innerWidth <= 1165
	// <>
	// 	<div className={s.desktop}><FilterMobile /></div>
	// 	<div><Filter /></div>
	// </>
	return <>{mobile ? <FilterMobile setColum={setColum} /> : <Filter />}</>
}
