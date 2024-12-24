import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './components/App'
import { Provider } from 'react-redux'
import store from './Redux/Reducers/redux-store'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
