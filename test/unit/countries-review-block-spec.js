const { assert } = require('chai');

const countriesReviewBlock = require('../../lib/countries-review-block');

const { countryItem, countryGovukSummaryListRowsArray, basicItem, basicGovukSummaryListRowsArray, mixedItem, mixedGovukSummaryListRowsArray, completeItem, completeGovukSummaryListRowsArray, multiGovukSummaryListRowsArray } = require('../lib/countries-review-block-data');

const t = string => string;

describe('countriesReviewBlock', () => {
  it('Returns empty array when called with no arguments', () => {
    const result = countriesReviewBlock();
    assert.deepEqual(result, []);
  });

  it('Returns empty array when called with object without "countries" property', () => {
    const result = countriesReviewBlock({});
    assert.deepEqual(result, []);
  });

  it('Returns empty array when called with object with empty "countries" property', () => {
    const result = countriesReviewBlock({ countries: [] });
    assert.deepEqual(result, []);
  });

  it('Returns empty array when called with object with "countries" property with array with object without "country" property', () => {
    const result = countriesReviewBlock({ countries: [{}] }, t);
    assert.deepEqual(result, []);
  });

  it('Returns empty array when called with object with "countries" property with array with object with empty "country" property', () => {
    const result = countriesReviewBlock({ countries: [{ country: '' }] }, t);
    assert.deepEqual(result, []);
  });

  it('Throws error when t function not passed as argument', () => {
    assert.throw(() => {
      countriesReviewBlock({ countries: [countryItem] });
    }, "Unable to translate 'lived-worked:reviewBlock.key'; t should be passed as argument to countriesReviewBlock filter.");
  });

  it('Returns valid govukSummaryList rows array when called with object with "countries" property with array with object (country item)', () => {
    const result = countriesReviewBlock({ countries: [countryItem] }, t);
    assert.deepEqual(result, countryGovukSummaryListRowsArray);
  });

  it('Returns valid govukSummaryList rows array when called with object with "countries" property with array with object (basic item)', () => {
    const result = countriesReviewBlock({ countries: [basicItem] }, t);
    assert.deepEqual(result, basicGovukSummaryListRowsArray);
  });

  it('Returns valid govukSummaryList rows array when called with object with "countries" property with array with object (mixed item)', () => {
    const result = countriesReviewBlock({ countries: [mixedItem] }, t);
    assert.deepEqual(result, mixedGovukSummaryListRowsArray);
  });

  it('Returns valid govukSummaryList rows array when called with object with "countries" property with array with object (complete item)', () => {
    const result = countriesReviewBlock({ countries: [completeItem] }, t);
    assert.deepEqual(result, completeGovukSummaryListRowsArray);
  });

  it('Returns valid govukSummaryList rows array when called with object with "countries" property with array with multiple objects, and "livedWorked" property', () => {
    const result = countriesReviewBlock({ countries: [completeItem, completeItem, completeItem, completeItem], livedWorked: { outside: 'Yes' } }, t);
    assert.deepEqual(result, multiGovukSummaryListRowsArray);
  });
});
