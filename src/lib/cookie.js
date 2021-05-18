// cookies
import Cookies from "universal-cookie";

var cookies = new Cookies();

const getCookies = (cookieName) => {
	let rescookies = cookies.get(cookieName);
	return rescookies;
}

const setCookies = (bareer, val) => {
	let rescookies = cookies.set(bareer, val, { path:'/', samesite:'none', secure:true })
	return rescookies
} 

const getAllCookies = () => {
	let rescookies = cookies.getAll();
	return rescookies;
}

const removeCookies = (cookieName) => {
	let rescookies = cookies.remove(cookieName);
	return removeCookies;
}


export {
	getCookies,
	setCookies,
	getAllCookies,
	removeCookies,
}