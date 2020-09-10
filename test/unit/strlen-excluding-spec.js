const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { assert } = require('chai');

const strlenExcluding = require('../../lib/strlen-excluding');

const config = {
  length: 6,
  excludePattern: /[- ]/g,
  errorMsg: 'bank:fields.sortCode.errors.length',
};

const validationError = {
  summary: 'bank:fields.sortCode.errors.length',
  inline: 'bank:fields.sortCode.errors.length',
  focusSuffix: [],
  fieldKeySuffix: undefined,
  variables: {},
  message: 'bank:fields.sortCode.errors.length',
  field: undefined,
  fieldHref: undefined,
  validator: undefined,
};

describe('strlenExcluding', () => {
  it('Returns a resolved promise when passed a valid value (no hyphens)', () => {
    return assert.isFulfilled(strlenExcluding(config)('000000'));
  });

  it('Returns a resolved promise when passed a valid value (hyphens)', () => {
    return assert.isFulfilled(strlenExcluding(config)('00-00-00'));
  });

  it('Returns a resolved promise when passed a valid value (spaces)', () => {
    return assert.isFulfilled(strlenExcluding(config)('00 00 00'));
  });

  it('Returns a rejected promise when passed a short value (no hyphens)', () => {
    return assert.isRejected(strlenExcluding(config)('00000'), validationError);
  });

  it('Returns a rejected promise when passed a short value (spaces)', () => {
    return assert.isRejected(strlenExcluding(config)('00-00-0'), validationError);
  });

  it('Returns a rejected promise when passed a short value (no hyphens)', () => {
    return assert.isRejected(strlenExcluding(config)('00 00 0'), validationError);
  });

  it('Returns a rejected promise when passed a long value (no hyphens)', () => {
    return assert.isRejected(strlenExcluding(config)('0000000'), validationError);
  });

  it('Returns a rejected promise when passed a long value (spaces)', () => {
    return assert.isRejected(strlenExcluding(config)('00-00-00-0'), validationError);
  });

  it('Returns a rejected promise when passed a long value (no hyphens)', () => {
    return assert.isRejected(strlenExcluding(config)('00 00 00 0'), validationError);
  });
});
