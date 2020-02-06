export const checkSequence = (start, str) => {
	var starting = start;
  while(str.length >= starting.length) {
      var next = +starting + 1;
      var reg = new RegExp(`^${next}`);
      if (!reg.test(str)) {
          throw new Error('Invalid sequence');
      }
      str = str.replace(reg, '');
      starting = String(next);
  };

  if (str.length) {
    throw new Error('Invalid sequence');
  }

  return start;
}


export const validate = (str) => {
	let start = str[0];
	let rest = str.slice(start.length);

	if (start === '0') {
		return 'Invalid input';
	}


	while(start.length < str.length/2) {
		try {
			return checkSequence(start, rest);
		} catch(e) {
			start += rest[0];
			rest = rest.slice(1);
		}
	}

	return 'Invalid input';

}
