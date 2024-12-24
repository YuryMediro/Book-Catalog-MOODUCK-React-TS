import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit"


// Комбинируем редьюсеры
let rootReducers = combineReducers({
	
})

// Типы состояния приложения
export type AppStateType = ReturnType<typeof rootReducers> //тип всего приложения STATE
export type AppDispatch = typeof store.dispatch //Типизация useDispatch
// Типизация для actions
export type InferActionsType<T> = T extends {
	[keys: string]: (...args: any[]) => infer U
}
	? U
	: never // это надо для action

// Типизация для thunk
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
	R,
	AppStateType,
	unknown,
	A
>

// Создаём store
const store = configureStore({
  reducer: rootReducers,
})


// Расширяем тип Window
declare global {
	interface Window {
		store: typeof store
	}
}

window.store = store

export default store
