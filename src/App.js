import './App.css';

// COMPONENT IMPORTS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Insure from './pages/Insure';
import Quote from './pages/Quote';

// REACT ROUTER IMPORTS
import {
	Routes,
	Route
} from 'react-router-dom'

function App() {
	return (
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/insure" element={<Insure />} />
					<Route path="/insure/quote" element={<Quote />} />
				</Routes>
				<Footer />
			</div>
	);
}

export default App;