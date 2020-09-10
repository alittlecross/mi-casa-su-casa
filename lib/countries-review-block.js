const monthAsText = require('./month-as-text');

const missing = (string) => {
  throw new Error(`Unable to translate '${string}'; t should be passed as argument to countriesReviewBlock filter.`);
};

module.exports = (data, t = missing) => {
  const rows = [];

  if (data && data.countries) {
    for (const item of data.countries) {
      if (item.country) {
        const classes = 'govuk-summary-list__row--no-border';
        const text = rows.length ? '' : t('lived-worked:reviewBlock.key');

        let html = item.country + '<br>';

        const lived = [];
        const worked = [];

        if (item.livedFrom) {
          const livedFromArray = [];

          if (item.livedFrom.mm) {
            livedFromArray.push(monthAsText(item.livedFrom.mm));
          }

          if (item.livedFrom.yyyy) {
            livedFromArray.push(item.livedFrom.yyyy);
          }

          const liveFromString = livedFromArray.join(' ');

          if (liveFromString) {
            lived.push(liveFromString);
          }
        }

        if (item.livedTo) {
          const livedToArray = [];
          if (item.livedTo.mm) {
            livedToArray.push(monthAsText(item.livedTo.mm));
          }

          if (item.livedTo.yyyy) {
            livedToArray.push(item.livedTo.yyyy);
          }

          const livedToString = livedToArray.join(' ');

          if (livedToString) {
            lived.push(livedToString);
          }
        }

        if (item.workedFrom) {
          const workedFromArray = [];

          if (item.workedFrom.mm) {
            workedFromArray.push(monthAsText(item.workedFrom.mm));
          }

          if (item.workedFrom.yyyy) {
            workedFromArray.push(item.workedFrom.yyyy);
          }

          const workedFromString = workedFromArray.join(' ');

          if (workedFromString) {
            worked.push(workedFromString);
          }
        }

        if (item.workedTo) {
          const workedToArray = [];

          if (item.workedTo.mm) {
            workedToArray.push(monthAsText(item.workedTo.mm));
          }

          if (item.workedTo.yyyy) {
            workedToArray.push(item.workedTo.yyyy);
          }

          const workedToString = workedToArray.join(' ');

          if (workedToString) {
            worked.push(workedToString);
          }
        }

        html += item.livedFrom || item.livedTo ? t('lived-worked:reviewBlock.values.lived') + ': ' : '';
        html += lived.length ? lived.join(' to ') : '';
        html += item.livedFrom || item.livedTo ? '<br>' : '';
        html += item.workedFrom || item.workedTo ? t('lived-worked:reviewBlock.values.worked') + ': ' : '';
        html += worked.length ? worked.join(' to ') : '';
        html += item.workedFrom || item.workedTo ? '<br>' : '';
        html += item.nino ? item.nino : '';

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

    if (rows.length) {
      rows[rows.length - 1].classes = '';
    }
  }

  return rows;
};
