import { makeAutoObservable } from 'mobx';
import GET from '../services/GET';

class WordsStore {
	words = [];

	constructor() {
		makeAutoObservable(this);
		this.fetch();
	}

	async fetch() {
		const data = await GET.getWords();
		this.words = data;
	}
}

export default WordsStore;
