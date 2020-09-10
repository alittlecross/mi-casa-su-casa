const { ValidationError } = require('@dwp/govuk-casa');

const validator = (config = {}) => function strlenExcluding(fieldValue) {
  return new Promise((resolve, reject) => {
    const updatedFieldValue = fieldValue.replace(config.excludePattern, '');
    if (updatedFieldValue.length !== config.length) {
      return reject(new ValidationError(config.errorMsg));
    }
    return resolve();
  });
};

module.exports = validator;
