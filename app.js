/**
 * Function that converts Fahrenheit to Celsius
 * @formula     C = (F - 32) x 5/9
 * @precision   4 decimal places
 */
const convertFahrToCelsius = (param) => {
  let result, calc, error;

  // check if parameter is valid. if not then show error message
  if (
    isNaN(param) ||
    JSON.stringify(param) == '[]' ||
    param == null ||
    JSON.stringify(param) == '""' ||
    param === true ||
    param === false
  ) {
    if (Array.isArray(param)) {
      error = `${JSON.stringify(param)} is not a valid number but a/an array.`;
    } else if (typeof param === 'object') {
      error = `${JSON.stringify(param)} is not a valid number but a/an object.`;
    } else if (typeof param === 'string') {
      param == '' ? (param = '""') : param;
      error = `${param} is not a valid number but a/an string.`;
    } else if (param === true || param === false) {
      error = `${param} is not a valid number but a/an boolean.`;
    }

    return error;
  } else {
    // carry out conversion once parameter is valid
    calc = (param - 32) * (5 / 9);
    result = Number(calc.toFixed(4));
    return result;
  }
};

/**
 *  checkYuGiOh
 *  takes a number n, as an argument
 *  creates an array of numbers from 1 to n
 *  replace multiples of 2, 3, and 5 with "yu", "gi" and "oh"
 *  then return the resulting array.
 *  numbers that have multiple factors, use hyphens as separators
 */
const checkYuGiOh = (n) => {
  let i = 1;
  let nums = [];

  // check if parameter is valid
  if (
    isNaN(n) ||
    JSON.stringify(n) == '[]' ||
    n == null ||
    JSON.stringify(n) == '""' ||
    n === true ||
    n === false
  ) {
    return `invalid parameter: ${JSON.stringify(n)}`;
  } else {
    // if parameter is valid then create an array of numbers from 1 to n
    while (i <= n) {
      nums.push(i);
      i++;
    }
  }

  // loop through the numbers and replace multiples of 2, 3, and 5 with "yu", "gi" and "oh"
  nums.forEach((num, index) => {
    if (num % 2 == 0) {
      nums[index] = 'yu';
    }
    if (num % 3 == 0) {
      nums[index] = 'gi';
    }
    if (num % 5 == 0) {
      nums[index] = 'oh';
    }
    if (num % 2 == 0 && num % 3 == 0) {
      nums[index] = 'yu-gi';
    }
    if (num % 2 == 0 && num % 5 == 0) {
      nums[index] = 'yu-oh';
    }
    if (num % 2 == 0 && num % 3 == 0 && num % 5 == 0) {
      nums[index] = 'yu-gi-oh';
    }
  });

  return nums;
};
