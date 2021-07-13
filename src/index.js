
// Return the sum of an array
const sum = (arrayOfNumbers) => {
	// Loop through arrayOfNumbers and add them together
	var outSum = 0;
	arrayOfNumbers.forEach(element => outSum += element);
	return outSum;
};

module.exports = {
  sum,
};
