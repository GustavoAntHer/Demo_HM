function menu(check,obj) {
	var ver = check.checked;
	if (ver == false) {
		obj.style.display = 'block';
	}
	else {
		obj.style.display = 'none';
	}
}