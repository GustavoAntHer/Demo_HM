function menu(check,obj) {
	var ver = check.checked;
	if (ver == true) {
		obj.style.display = 'block';
	}
	else {
		obj.style.display = 'none';
	}
}
function rotar(check,men) {
	var ver = check.checked;
	if (ver == true) {
		men.style.rotate = '180deg';
	}
	else {
		men.style.rotate = '-180deg';
	}
}