const { validationRules: r, simpleFieldValidation: v, ValidationError } = require('@dwp/govuk-casa');

const moment = require('moment');

module.exports = {
  acceptEarliestDate: v([
    r.required.bind({
      errorMsg: 'claim-date:fields.acceptEarliestDate.errors.empty'
    })
  ]),

  newClaimDate: v([
    r.required.bind({
      errorMsg: {
        summary: 'claim-date:fields.newClaimDate.errors.empty',
        focusSuffix: ['[dd]', '[mm]', '[yyyy]']
      }
    }),
    r.dateObject.bind({
      allowSingleDigitDay: true,
      allowSingleDigitMonth: true,
      errorMsg: {
        summary: 'claim-date:fields.newClaimDate.errors.invalid'
      }
    }),
    function futureDate (value, { journeyContext }) {
      const earliestDate = journeyContext.data.found.earliestDate;

      const a = moment(value.dd + ' ' + value.mm + ' ' + value.yyyy, 'DD MM YYYY');
      const b = moment(earliestDate.dd + ' ' + earliestDate.mm + ' ' + earliestDate.yyyy, 'DD MM YYYY');

      if (a <= b) {
        return Promise.reject(new ValidationError({
          summary: 'claim-date:fields.newClaimDate.errors.tooEarly',
          focusSuffix: ['[dd]', '[mm]', '[yyyy]']
        }));
      } else {
        return Promise.resolve();
      }
    }
  ], ({ waypointId, journeyContext }) => {
    const formData = journeyContext.data[waypointId];
    return formData.acceptEarliestDate === 'no';
  })
};
