import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './services/authcontext.jsx'
import './App.css'
import UserLayout from './layouts/user-layout/user-layout.jsx'
import AboutLayout from './layouts/about-layout/about.layout.jsx'
import ProtectedRouter from './services/protected.router.jsx'
import SupportLayout from './layouts/support-layout/support.layout.jsx'
import CreateCommunity from './components/community/create-community.jsx'
import CreateExperience from './components/experiences/create-experience.jsx'
import MainLayout from './layouts/main-layout/main.layout.jsx'

function App() {

	return (
		<HashRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/about" element={<AboutLayout />} />
					<Route path="/support" element={<SupportLayout />} />
					<Route element={<ProtectedRouter />} >

						<Route path="/create-community" element={<CreateCommunity />} />
						<Route path="/create-experience" element={<CreateExperience />} />
						<Route path="/user-feed" element={<UserLayout />} />
					</Route>
				</Routes>
			</AuthContextProvider>
		</HashRouter>
	)
}

export default App;
