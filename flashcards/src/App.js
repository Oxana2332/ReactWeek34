import { Route, NavLink, Routes } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Footer from './components/Footer/Footer.jsx';
import { Home, Game, Error } from './Pages';
import WordsStore from './stores/Words.js';
import '../src/style/app.css';
import './style/header.css';

function App() {
	return (
		<Provider wordsStore={new WordsStore()}>
			<div className="App">
				<header className="header">
					<NavLink className="header_link" end to="/">
						Home
					</NavLink>
					<NavLink className="header_link" end to="/">
						<img src="assets/logo.svg" alt="logo" />
					</NavLink>
					<NavLink className="header_link" end to="/game">
						Game
					</NavLink>
				</header>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/game" element={<Game />} />
					<Route path="*" element={<Error />} />
				</Routes>

				<Footer />
			</div>
		</Provider>
	);
}

export default App;
