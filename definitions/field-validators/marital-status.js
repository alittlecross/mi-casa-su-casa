const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

module.exports = {
  maritalStatus: v([
    r.required.bind({
      errorMsg: 'marital-status:fields.maritalStatus.errors.empty',
    }),
  ]),
};
