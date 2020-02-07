export const convertTime = (str) => {
	var matcher = str.match(/([012][0-9]):([0-5][0-9]):([0-5][0-9])(AM|PM)/);

	let hh = matcher[1];
	let mm = matcher[2];
	let ss = matcher[3];
	const period = matcher[4];

	if(hh === '12' && period === 'AM') {
		return `00:${mm}:${ss}`;
	}

	if(hh === '12' && period === 'PM') {
		return `12:${mm}:${ss}`;
	}

	if(period === 'PM') {
		return `${+hh + 12}:${mm}:${ss}`;
	}

	return `${hh}:${mm}:${ss}`;
};
