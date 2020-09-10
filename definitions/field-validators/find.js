const { validationRules: r, simpleFieldValidation: v, ValidationError } = require('@dwp/govuk-casa');

const lookup = require('../../services/lookup');

module.exports = {
  reference: v([
    r.required.bind({
      errorMsg: 'find:fields.reference.errors.empty',
    }),
    function validReference(value, { journeyContext }) {
      const result = lookup(value);

      if (result) {
        journeyContext.setDataForPage('found', result);
        return Promise.resolve();
      } else {
        return Promise.reject(new ValidationError('find:fields.reference.errors.invalid'));
      }
    },
  ]),
};
