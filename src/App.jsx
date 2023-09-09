import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"

import "./App.css"

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="flex flex-colum">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>

				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
