import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import WordItem from '../components/WordItem/WordItem.jsx';
import AddNew from '../components/AddNew/AddNew.jsx';
import '../style/home.css';
import '../style/variables.css';

const Home = inject(['wordsStore'])(
	observer(({ wordsStore }) => {
		const { words } = wordsStore;
		const titleArr = ['english', 'transcription', 'russian', 'topic'];

		function editWordItem(english, transcription, russian, tags, id) {
			const resultEditWords = words.map((item) => {
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
				{words.map((item) => (
					<WordItem
						key={item.id}
						item={{ ...item }}
						editWordItem={editWordItem}
					/>
				))}
			</div>
		);
	})
);

export default Home;
