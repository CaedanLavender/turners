import './App.css';

// COMPONENT IMPORTS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import Quote from './pages/Quote';

// REACT ROUTER IMPORTS
import {
	Routes,
	Route,
	BrowserRouter
} from 'react-router-dom'

function App() {
	return (
			<div className="App">
				<Header />
				<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/insurance" element={<Insurance />} />
					<Route path="/insurance/get_quote" element={<Quote />} />
				</Routes>
				</BrowserRouter>
				<Footer />
			</div>
	);
}

export default App;