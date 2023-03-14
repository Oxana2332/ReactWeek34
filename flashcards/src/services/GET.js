class GET {
	static async getWords() {
		try {
			const response = await fetch(
				`http://itgirlschool.justmakeit.ru/api/words`
			);
			const data = await response.json();
			return data;
		} catch (e) {
			console.error(e);
		}
	}
}

export default GET;
