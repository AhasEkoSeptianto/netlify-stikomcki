import { getCookies } from './../lib/cookie';

//  create redux
const initialState = {
	user: getCookies('user'),
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "change_name": {
			return {
				...state,
				user: action.user,
			};
		}
		
		default : {
			return state;
		}
	}
};

export default rootReducer;
