function menu(check,obj) {
	var ver = check.checked;
	if (ver == true) {
		obj.style.display = 'block';
	}
	else {
		obj.style.display = 'none';
	}
}
function rotar(check,men, gal,ini,l) {
	var ver = check.checked;
	if (ver == true) {
		men.style.rotate = '180deg';
		gal.style.visibility = 'hidden';
		ini.style.background = '#4163b2';
		l.src= "2.2.1.png";
	}
	else {
		men.style.rotate = '0deg';
		gal.style.visibility = 'initial';
		ini.style.background = "radial-gradient(rgba(0, 0, 0, .1),rgba(0, 0, 0, .2) ,rgba(0, 0, 0, .5))";
		l.src= "2.2.png";
	}
}

function rotar2(check,men, ini) {
	var ver = check.checked;
	if (ver == true) {
		men.style.rotate = '180deg';
		ini.style.background = '#4163b2';
	}
	else {
		men.style.rotate = '0deg';
		ini.style.background = 'rgba(222, 22, 75, 0.9)';
	}
}