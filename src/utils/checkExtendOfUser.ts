export interface TArray {
	userId: string
}

export const checkExtendOfUser = (arr: TArray[], userId: string): boolean => {
	const result: TArray[] = arr?.filter(el => el.userId === userId)

	if (result?.length) {
		return true
	}

	return false
}
