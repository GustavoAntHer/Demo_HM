function menu(check,obj) {
	var ver = check.checked;
	if (ver == true) {
		obj.style.right = '0';
		obj.style.width = '100vw';
	}
	else {
		obj.style.width = '0';
		obj.style.right = '-100vw';
	}
}
