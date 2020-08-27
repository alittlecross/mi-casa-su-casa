const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

module.exports = {
  signed: v([
    r.required.bind({
      errorMsg: 'declaration:fields.signed.errors.empty'
    })
  ])
};
