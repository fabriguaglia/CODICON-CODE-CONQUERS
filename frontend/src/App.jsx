import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './services/authcontext.jsx'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout.jsx'
import UserLayout from './layouts/user-layout/user-layout.jsx'
import AboutLayout from './layouts/about-layout/about.layout.jsx'
import ProtectedRouter from './services/protected.router.jsx'

import SupportLayout from './layouts/support-layout/support.layout.jsx'

import CreateCommunity from './layouts/user-layout/create-community.jsx'


function App() {

	return (
		<HashRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<UserLayout />} />
					<Route path="/about" element={<AboutLayout />} />
					<Route path="/support" element={<SupportLayout />} />
					<Route path="*" />
					<Route element={<ProtectedRouter />} >

						<Route path="/create-community" element={<CreateCommunity />} />

					</Route>
				</Routes>
			</AuthContextProvider>
		</HashRouter>
	)
}

export default App;
