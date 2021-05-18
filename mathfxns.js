// https://devhints.io/mocha

class MathFxns {
  constructor() {
    this._name = 'MathFxns';
  }

  get name() {
    return this._name;
  }

  addTwoNums(num1, num2) {
    return num1 + num2;
  }
  subtractTwoNums(num1, num2) {
    return num1 - num2;
  }
  multiplyTwoNums(num1, num2) {
    return num1 * num2;
  }
  divideTwoNums(num1, num2) {
    return num1 / num2;
  }
  addAllNums(...rest) {
    return rest.reduce((sum, val) => (sum += val));
  }
  isPrime(num) {
    if (num > 0) {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num != 1;
    } else {
      throw new Error('Number is not positive!');
    }
  }
  factor(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) factors.push(i);
    }
    return factors;
  }
}

module.exports = MathFxns;
