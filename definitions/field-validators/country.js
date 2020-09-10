const { validationRules: r, simpleFieldValidation: v, ValidationError } = require('@dwp/govuk-casa');

const validDate = value => {
  const object = {
    summary: 'country:fields.dates.errors.invalid',
    focusSuffix: [],
  };

  if (value.mm && !value.mm.match(/^(0?[1-9]|1[0-2])$/g)) {
    object.focusSuffix.push('[mm]');
  }
  if (value.yyyy && !value.yyyy.match(/^(19\d\d|20[0-9][0-9]|2100)$/g)) {
    object.focusSuffix.push('[yyyy]');
  }

  if (object.focusSuffix.length) {
    return Promise.reject(new ValidationError(object));
  } else {
    return Promise.resolve();
  }
};

module.exports = {
  country: v([
    r.required.bind({
      errorMsg: 'country:fields.country.errors.empty',
    }),
  ]),

  lived: v([
    r.required.bind({
      errorMsg: 'country:fields.lived.errors.empty',
    }),
  ]),

  livedFrom: v([
    validDate,
  ]),

  livedTo: v([
    validDate,
  ]),

  worked: v([
    r.required.bind({
      errorMsg: 'country:fields.worked.errors.empty',
    }),
  ]),

  workedFrom: v([
    validDate,
  ]),

  workedTo: v([
    validDate,
  ]),

  nino: v([
    r.optional,
  ]),
};
