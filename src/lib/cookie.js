// cookies
import Cookies from "universal-cookie";

var cookies = new Cookies();

const getCookies = (cookieName) => {
	return cookies.get(cookieName);
}

const setCookies = (bareer, val) => {
	return cookies.set(bareer, val, { path:'/', samesite:'none', secure:true })

}

const getAllCookies = () => {
	return cookies.getAll();
}

const removeCookies = (cookieName) => {
	return cookies.remove(cookieName);
}


export {
	getCookies,
	setCookies,
	getAllCookies,
	removeCookies,
}