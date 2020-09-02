const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

const strlenExcluding = require('../../lib/strlenExcluding');

module.exports = {
  name: v([
    r.required.bind({
      errorMsg: 'bank:fields.name.errors.empty',
    }),
  ]),

  sortCode: v([
    r.required.bind({
      errorMsg: 'bank:fields.sortCode.errors.empty',
    }),

    strlenExcluding({
      length: 6,
      excludePattern: /[- ]/g,
      errorMsg: 'bank:fields.sortCode.errors.length',
    }),

    r.regex.bind({
      pattern: /^(\d{2}[- ]?){2}\d{2}$/,
      errorMsg: 'bank:fields.sortCode.errors.invalid',
    }),
  ]),

  accountNumber: v([
    r.required.bind({
      errorMsg: 'bank:fields.accountNumber.errors.empty',
    }),
    r.regex.bind({
      pattern: /^[0-9]{8}$/,
      errorMsg: 'bank:fields.accountNumber.errors.invalid',
    }),
  ]),

  rollOrReference: v([
    r.optional,
  ]),
};
