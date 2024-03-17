import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './services/authcontext.jsx'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout.jsx'
import AboutLayout from './layouts/about-layout/about.layout.jsx'
import ProtectedRouter from './services/protected.router.jsx'
import SupportLayout from './layouts/support-layout/support.layout.jsx'

function App() {

	return (
		<HashRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/about" element={<AboutLayout />} />
					<Route path="/support" element={<SupportLayout />} />
					<Route path="*" />
					<Route element={<ProtectedRouter />} >
					</Route>
				</Routes>
			</AuthContextProvider>
		</HashRouter>
	)
}

export default App;
