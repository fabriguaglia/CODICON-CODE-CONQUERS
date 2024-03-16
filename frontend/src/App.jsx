import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './services/authcontext.jsx'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout.jsx'
import AboutLayout from './layouts/about-layout/about.layout.jsx'

function App() {

	return (
		<HashRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/about" element={<AboutLayout />} />
				</Routes>
			</AuthContextProvider>
		</HashRouter>
	)
}

export default App;
