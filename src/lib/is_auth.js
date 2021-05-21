import { getCookies } from './cookie';
import Axios from 'axios';

var is_auth = async () => {
		let token = getCookies('auth-token');
		
		if (!token) {
			return false
		}

		var resAuth = await Axios.post(
			`${process.env.REACT_APP_BASE_URL}api/is-auth`, {
			 token:token
			},
		).then(res => {
			if (res.data.status){
				return true;
			}
		}).catch(err => {

			return false

		})

		return resAuth;

	}

export { is_auth };
