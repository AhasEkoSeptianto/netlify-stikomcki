import Axios from 'axios';

const get = async (url) => {
	
	var resApi = [];

	await Axios.get(url)
		.then(res => resApi = res)
		.catch(err => resApi = err);

	return resApi;
}

const post = async (url, data) => {
	var resApi = [];
	console.log('here')
	await Axios.post(url, data)
		.then(res => resApi = res)
		.catch(err => resApi = err);

	return resApi;
}

export { get, post };