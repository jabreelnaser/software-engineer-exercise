const { sum } = require('../../src/index');
const assert = require('assert');

describe('#sum', () => {
  it('should sum an array of integers', () => {
    assert.strictEqual(5, sum([2, 3]));
    assert.strictEqual(15, sum([1, 2, 3, 4, 5]));
  });

  it('should sum an array of floats', () => {
    assert.strictEqual(7.25, sum([2.25, 3.75, 1.25]));
  });
});
