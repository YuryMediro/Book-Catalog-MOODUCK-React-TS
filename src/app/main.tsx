import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from '../Redux/Reducers/redux-store'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../shared/http/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
)
