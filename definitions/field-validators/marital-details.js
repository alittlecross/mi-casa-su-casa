const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

module.exports = {
  dateOfMarriage: v([
    r.required.bind({
      errorMsg: {
        summary: 'marital-details:fields.dateOfMarriage.errors.empty',
        focusSuffix: ['[dd]', '[mm]', '[yyyy]']
      }
    }),
    r.dateObject.bind({
      allowSingleDigitDay: true,
      allowSingleDigitMonth: true,
      errorMsg: {
        summary: 'marital-details:fields.dateOfMarriage.errors.invalid'
      }
    })
  ]),

  nino: v([
    r.required.bind({
      errorMsg: 'marital-details:fields.nino.errors.empty'
    }),
    r.nino.bind({
      allowWhitespace: true,
      errorMsg: 'marital-details:fields.nino.errors.invalid'
    })
  ]),

  firstName: v([
    r.required.bind({
      errorMsg: 'marital-details:fields.firstName.errors.empty'
    })
  ]),

  surname: v([
    r.required.bind({
      errorMsg: 'marital-details:fields.surname.errors.empty'
    })
  ]),

  anyOtherNames: v([
    r.optional
  ]),

  dob: v([
    r.required.bind({
      errorMsg: {
        summary: 'marital-details:fields.dob.errors.empty',
        focusSuffix: ['[dd]', '[mm]', '[yyyy]']
      }
    }),
    r.dateObject.bind({
      allowSingleDigitDay: true,
      allowSingleDigitMonth: true,
      errorMsg: {
        summary: 'marital-details:fields.dob.errors.invalid'
      }
    })
  ])
};
