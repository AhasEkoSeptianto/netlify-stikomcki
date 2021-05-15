//  create redux
const initialState = {
	user: "annonymous",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "login": {
			return {
				...state,
				user: action.user,
			};
		}
		case "logout": {
			return {
				...state,
				user: "",
			};
		}
		default : {
			console.log("none");
		}
	}
	return state;
};

export default rootReducer;
