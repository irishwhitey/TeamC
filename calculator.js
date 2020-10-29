function sumNumbers(a, b){
	return a + b;
}

function multiplyNumbers(a, b)
{
	return a * b;
}

function divideNumbers(a, b)
{
	return a / b;
}

module.exports = {
	calculate : (problem) => {
		var split = problem.split(" ");

		var a = parseInt(split[0]);
		var b = parseInt(split[2]);

		var operator = split[1];

		switch(operator)
		{
			case '+':
				return sumNumbers(a, b);
			case '*':
				return multiplyNumbers(a, b);
			case '/':
				return divideNumbers(a,b);
		}
	}
};
