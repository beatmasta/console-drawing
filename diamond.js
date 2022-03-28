const N = Number(process && process.argv && process.argv[2]) || 21;

const drawConsoleDiamond = (N) => {

	const half = Math.floor(N / 2);
	let output = '';

	for (let i = 0, j = 1; i < N / 2; i++, j += 2) {

		const spaces = Array.from(Array(Math.floor((N - j) / 2))).fill(' ').join('');

		output += spaces;
		output += Array.from(Array(j)).fill('*').join('');
		output += spaces;

		console.log(output);

		output = '';
		
	}

	for (let i = 1, j = N - 2; i <= half; i++, j -= 2) {

		const spaces = Array.from(Array(i)).fill(' ').join('');

		output += spaces;
		output += Array.from(Array(j)).fill('*').join('');
		output += spaces;

		console.log(output);

		output = '';

	}

};

drawConsoleDiamond(N);
