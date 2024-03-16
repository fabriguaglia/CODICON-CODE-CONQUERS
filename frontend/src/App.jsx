import './App.css'
import MainLayout from './layouts/main-layout/main.layuout.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'


function App() {

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<MainLayout />} />
			</Routes>
		</HashRouter>
	)
}

export default App
