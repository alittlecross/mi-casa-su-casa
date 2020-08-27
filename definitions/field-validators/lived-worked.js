const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

module.exports = {
  outside: v([
    r.required.bind({
      errorMsg: 'lived-worked:fields.outside.errors.empty'
    })
  ])
};
