import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import Card from '../components/Card/Card.jsx';
import Loading from '../components/Loading/Loading.jsx';
import '../style/game.css';

const Game = inject(['wordsStore'])(
	observer(({ wordsStore }) => {
		const { words } = wordsStore;
		const [count, setCount] = useState(0);
		const [learnedWords, setLearnedWords] = useState(0);

		function handlePressed() {
			setLearnedWords((prevCount) => {
				return prevCount + 1;
			});
		}
		console.log(learnedWords);
		function handlerPrev() {
			let copyCount = count;
			copyCount--;
			copyCount < 0 ? setCount(words.length - 1) : setCount(copyCount);
		}

		function handlerNext() {
			let copyCount = count;
			copyCount++;
			copyCount >= words.length ? setCount(0) : setCount(copyCount);
		}

		if (!words || (words && words.length === 0)) return <Loading />;
		else
			return (
				<div className="conteinerCard">
					<button className="button_prev" onClick={handlerPrev}>
						&#8249;
					</button>
					<Card
						key={words.id}
						item={words[count]}
						handlePressed={handlePressed}
					/>
					<button className="button_next" onClick={handlerNext}>
						&#8250;
					</button>
				</div>
			);
	})
);

export default Game;
