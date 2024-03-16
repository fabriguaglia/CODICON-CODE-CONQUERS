import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './services/authcontext.jsx'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout.jsx'

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
