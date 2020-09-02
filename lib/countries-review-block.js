const monthAsText = require('./month-as-text');

module.exports = (data, t) => {
  const rows = [];

  for (const item of data.countries) {
    if (item) {
      const classes = 'govuk-summary-list__row--no-border';
      let text = '';
      let html = item.country + '<br>';

      if (!rows.length) {
        text = t('lived-worked:reviewBlock.key');
      }

      if (item.lived === 'yes') {
        html += t('lived-worked:reviewBlock.values.lived') + ': ' + monthAsText(item.livedFrom.mm) + ' ' + item.livedFrom.yyyy + ' to ' + monthAsText(item.livedTo.mm) + ' ' + item.livedTo.yyyy + '<br>';
      }

      if (item.worked === 'yes') {
        html += t('lived-worked:reviewBlock.values.worked') + ': ' + monthAsText(item.workedFrom.mm) + ' ' + item.workedFrom.yyyy + ' to ' + monthAsText(item.workedTo.mm) + ' ' + item.workedTo.yyyy + '<br>';
      }

      if (item.nino) {
        html += item.nino;
      }

      rows.push({
        classes: classes,
        key: {
          text: text,
        },
        value: {
          html: html,
        },
      });
    }
  }

  if (rows.length === 4) {
    rows[3].value.html += '<br><br>' + t('lived-worked:reviewBlock.values.more') + ': ' + data.livedWorked.outside;
  }

  rows[rows.length - 1].classes = '';

  return rows;
};
