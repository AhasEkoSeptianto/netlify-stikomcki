import Axios from 'axios';

const get = async (url) => {
	
	var resApi = [];

	await Axios.get(url)
		.then(res => resApi = res)
		.catch(err => resApi = err);

	
	return resApi;
}

const post = async (url, data) => {
	
	var resApi = await Axios.post(url, data, {
			headers : {
			  'Content-Type' : 'application/json',
			  'Accept' : 'application/json'
			}})

	return resApi;
}

export { get, post };