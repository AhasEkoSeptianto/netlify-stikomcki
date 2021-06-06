import { getCookies } from './../lib/cookie';

//  create redux
const initialState = {
	user: getCookies('user'),
	dashboardNav: '',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "change_name": {
			return {
				...state,
				user: action.user,
			};
		}

		case "change_navDashboard": {
			return {
				...state,
				dashboardNav: action.nav,
			}
		}

		default : {
			return state;
		}
	}
};

export default rootReducer;
