const { assert } = require('chai');

const monthAsText = require('../../lib/month-as-text');

describe('monthAsText', () => {
  it('Returns "" when passed ""', () => {
    const result = monthAsText('');
    assert.equal(result, '');
  });

  it('Returns "Jan" when passed "1"', () => {
    const result = monthAsText('1');
    assert.equal(result, 'Jan');
  });

  it('Returns "Jan" when passed "01"', () => {
    const result = monthAsText('01');
    assert.equal(result, 'Jan');
  });

  it('Returns "Invalid date" when passed "13"', () => {
    const result = monthAsText('13');
    assert.equal(result, 'Invalid date');
  });
});
