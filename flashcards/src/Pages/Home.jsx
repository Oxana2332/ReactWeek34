import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import WordItem from '../components/WordItem/WordItem.jsx';
import AddNew from '../components/AddNew/AddNew.jsx';
import WordsStore from '../stores/Words.js';
import '../style/home.css';
import '../style/variables.css';

const Home = observer(() => {
	const { rows } = WordsStore;
	console.log(rows);
	const [words, setWords] = useState([]);
	const titleArr = ['english', 'transcription', 'russian', 'topic'];

	useEffect(() => {
		setWords(rows);
	}, []);

	function editWordItem(english, transcription, russian, tags, id) {
		const resultEditWords = rows.map((item) => {
			if (item.id === id) {
				item.english = english;
				item.transcription = transcription;
				item.russian = russian;
				item.tags = tags;
				return item;
			}
			return item;
		});
	}

	return (
		<div className="dictionary">
			<div className="dictionary_count">
				{titleArr.map((elTitle) => {
					return (
						<div
							key={elTitle}
							className="dictionary_title"
							type="text"
							value={elTitle}
						>
							{elTitle}
						</div>
					);
				})}
			</div>
			<AddNew />
			{rows.map((item) => (
				<WordItem
					key={item.id}
					item={{ ...item }}
					editWordItem={editWordItem}
				/>
			))}
		</div>
	);
});

export default Home;
