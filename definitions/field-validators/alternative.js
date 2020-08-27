const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

module.exports = {
  alternative: v([
    r.required.bind({
      errorMsg: 'alternative:fields.alternative.errors.empty'
    })
  ])
};
