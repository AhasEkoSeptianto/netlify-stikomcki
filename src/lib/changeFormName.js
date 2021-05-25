const changeName = (name) => {
	console.log(name)
	if (name.length >= 29) {
		var resMaxName = maxLength(30, name);
		return resMaxName;
	}

	var name = name.split(' ');
	var resName = [];
	var space = "";

	// menyimpan value jika ada space tertinggal diakhir, funsi lain dari trim()
	var name = name.filter((el, index) => {
		if (el == "" && index != 0){
			space = " ";
		}
		return el != "";
	});


	// iterasi
	name.forEach(val =>{
		
		// ubah string menjadi array
		let arrVal = val.split(''); 
		// ubah chart pertama menjadi uppercase
		let upper = val.charAt(0).toUpperCase();
		// hapus array nilai pertama yang akan diganti 
		arrVal.splice(0,1);
		// ubah arr val menjadi string kembali
		arrVal = arrVal.join('');

		let res = upper + arrVal ;
		resName.push(res);

	})

	// concat()
	resName = resName.join(' ');

	return resName + space;
}

var maxLength = (max, name) => {
	let resName = name.split('');
	resName = resName.splice( 0, max );
	resName = resName.join('');
	return resName;
}

var changeNumberPhone = (number) => {
	if (number.charAt(0) === "0") {

		number = "";

		return number;
	}

	var phoneNumb = number.replace(/[^0-9]+/g, "");
	phoneNumb = maxLength(13, phoneNumb);

	return phoneNumb;
}

export { 
	changeName,
	maxLength,
	changeNumberPhone,
}