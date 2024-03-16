import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './components/auth-context.jsx'
import './App.css'
import MainLayout from './layouts/main-layout/main.layuout.jsx'

function App() {

	return (
		<HashRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<MainLayout />} />
				</Routes>
			</AuthContextProvider>
		</HashRouter>
	)
}

export default App;
