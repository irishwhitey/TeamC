function sumNumbers(a, b){
	return a + b;
}

module.exports = {
	calculate : (problem) => {
		var split = problem.split(" ");

		var result = sumNumbers(parseInt(split[0]), parseInt(split[2]));
		
		return result;
	}
};
