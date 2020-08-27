const moment = require('moment');

module.exports = month => {
  return month ? moment(month, 'MM').format('MMM') : '';
};
