export default class BaseRepository {
	uri!: string;
	constructor(uri: string) {
		this.uri = uri;
	}
}
