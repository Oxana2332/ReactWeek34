import { makeAutoObservable } from 'mobx';
import GET from '../services/GET';

class WordsStore {
	rows = [];

	constructor() {
		makeAutoObservable(this);
		this.fetch();
	}

	async fetch() {
		const data = await GET.getWords();
		this.rows = data;
	}
}

export default new WordsStore();
