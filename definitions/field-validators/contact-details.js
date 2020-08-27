const { validationRules: r, simpleFieldValidation: v } = require('@dwp/govuk-casa');

module.exports = {
  phone: v([
    r.optional
  ]),

  home: v([
    r.required.bind({
      errorMsg: 'contact-details:fields.phone.errors.empty'
    }),
    r.regex.bind({
      pattern: /^[0-9-+() ]+$/,
      errorMsg: 'contact-details:fields.phone.errors.invalid'
    }),
    r.strlen.bind({
      max: 20,
      errorMsgMax: 'contact-details:fields.phone.errors.tooLong'
    })
  ], ({ waypointId, journeyContext }) => {
    const formData = journeyContext.data[waypointId];
    return formData.phone && formData.phone.includes('home');
  }),

  mobile: v([
    r.required.bind({
      errorMsg: 'contact-details:fields.phone.errors.empty'
    }),
    r.regex.bind({
      pattern: /^[0-9-+() ]+$/,
      errorMsg: 'contact-details:fields.phone.errors.invalid'
    }),
    r.strlen.bind({
      max: 20,
      errorMsgMax: 'contact-details:fields.phone.errors.tooLong'
    })
  ], ({ waypointId, journeyContext }) => {
    const formData = journeyContext.data[waypointId];
    return formData.phone && formData.phone.includes('mobile');
  }),

  work: v([
    r.required.bind({
      errorMsg: 'contact-details:fields.phone.errors.empty'
    }),
    r.regex.bind({
      pattern: /^[0-9-+() ]+$/,
      errorMsg: 'contact-details:fields.phone.errors.invalid'
    }),
    r.strlen.bind({
      max: 20,
      errorMsgMax: 'contact-details:fields.phone.errors.tooLong'
    })
  ], ({ waypointId, journeyContext }) => {
    const formData = journeyContext.data[waypointId];
    return formData.phone && formData.phone.includes('work');
  }),

  email: v([
    r.optional,
    r.email.bind({
      errorMsg: 'contact-details:fields.email.errors.invalid'
    })
  ]),

  alternative: v([
    r.required.bind({
      errorMsg: 'contact-details:fields.alternative.errors.empty'
    })
  ])
};
