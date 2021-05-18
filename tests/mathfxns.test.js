const { assert, expect } = require('chai');
const { describe, it, afterEach } = require('mocha');
const MathFxns = require('../mathfxns.js');

describe('class constructor \n', () => {
  // add a test hook
  afterEach(() => {
    console.log('\n...Completed class instance test!\n');
  });
  it('should create an instance of the class', () => {
    const newInstance = new MathFxns();
    console.log(`   Creating a ${newInstance.name} class for testing!`);
    expect(newInstance).to.be.a('object');
  });
});

describe('functions \n', () => {
  // add a test hook demo
  var numTest = 1;
  afterEach(() => {
    console.log(`\n...Completed functional test ${numTest++}!\n`);
  });

  describe('addTwoNums', () => {
    it('should return the sum of two numbers', () => {
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 11;
      const sum = 16;
      assert.ok(math.addTwoNums(num1, num2) === sum);
    });
  });

  describe('subtractTwoNums', () => {
    it('should return the sum of all numbers', () => {
      const math = new MathFxns();
      const num1 = 11;
      const num2 = 5;
      const answer = 6;
      assert.equal(math.subtractTwoNums(num1, num2), answer);
    });
  });

  describe('divideTwoNums', () => {
    it('should return the quotient of two numbers', () => {
      const math = new MathFxns();
      const num1 = 15;
      const num2 = 5;
      const quotient = 3;
      assert.deepEqual(math.divideTwoNums(num1, num2), quotient);
    });
  });

  describe('multiplyTwoNums', () => {
    it('should return the product of two numbers', () => {
      const math = new MathFxns();
      const num1 = 15;
      const num2 = 5;
      const product = 75;
      expect(math.multiplyTwoNums(num1, num2)).to.equal(product);
    });
  });

  describe('addAllNums', () => {
    it('should return the sum of all numbers', () => {
      const math = new MathFxns();
      const numsArr = [4, 63, 5, 17, 8];
      const sum = 97;
      expect(math.addAllNums(...numsArr)).to.equal(sum);
    });
  });

  describe('isPrime', () => {
    it('should return true or false', () => {
      const math = new MathFxns();
      const num = 5;
      expect(math.isPrime(num)).to.equal(true);
    });
    it('should throw an error if negative', () => {
      const math = new MathFxns();
      const num = -5;
      assert.throws(() => math.isPrime(num), 'Number is not positive!');
      // expect(() => math.isPrime(num)).to.throw(
      //   Error,
      //   'Number is not positive!'
      // );
    });
  });

  describe('factor', () => {
    it('should return an array', () => {
      const math = new MathFxns();
      const num = 12;
      const factors = [1, 2, 3, 4, 6, 12];
      expect(math.factor(num)).to.be.a('array');
    });
    it('should return all the factors of the number', () => {
      const math = new MathFxns();
      const num = 16;
      const factors = [1, 2, 4, 8, 16];
      assert.sameMembers(math.factor(num), factors);
      // expect(math.factor(num)).to.have.same.members(factors);
    });
  });
});
