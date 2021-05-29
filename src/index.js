import React from "react";
import ReactDOM from "react-dom";

// router
import Router from "./router.js";

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/store.js";

// router
import { BrowserRouter as Route } from "react-router-dom";

// tailwind css
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Route>
			<Router />
		</Route>
	</Provider>,
	document.getElementById("root")
);
