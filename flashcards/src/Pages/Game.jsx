import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Card from '../components/Card/Card.jsx';
import WordsStore from '../stores/Words.js';
import '../style/game.css';

const Game = observer(() => {
	const { rows } = WordsStore;
	const [words, setWords] = useState(false);
	const [count, setCount] = useState(0);
	const [learnedWords, setLearnedWords] = useState(0);

	useEffect(() => {
		setWords(rows);
	}, []);

	function handlePressed() {
		setLearnedWords((prevCount) => {
			return prevCount + 1;
		});
	}

	function handlerPrev() {
		let copyCount = count;
		copyCount--;
		copyCount < 0 ? setCount(rows.length - 1) : setCount(copyCount);
	}

	function handlerNext() {
		let copyCount = count;
		copyCount++;
		copyCount >= rows.length ? setCount(0) : setCount(copyCount);
	}

	if (!rows) return <h1>Loading...</h1>;
	else
		return (
			<div className="conteinerCard">
				<button className="button_prev" onClick={handlerPrev}>
					&#8249;
				</button>
				<Card
					key={rows.id}
					item={rows[count]}
					handlePressed={handlePressed}
				/>
				<button className="button_next" onClick={handlerNext}>
					&#8250;
				</button>
			</div>
		);
});

export default Game;
