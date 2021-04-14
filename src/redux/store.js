//  create redux
const initialState = {
	username: "annonymous",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "login": {
			return {
				...state,
				username: action.user,
			};
		}
		case "logout": {
			return {
				...state,
				username: "",
			};
		}
		default : {
			console.log("none");
		}
	}
	return state;
};

// sucribe
// store.subscribe(() => {
// 	console.log("store change ", store.getState());
// });

export default rootReducer;
