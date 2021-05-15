import Cookies from "universal-cookie";

var is_auth = () => {
		var auth = new Cookies().get("user");
		if (auth) {
			return true;
		}
		return false;
	}

export { is_auth };