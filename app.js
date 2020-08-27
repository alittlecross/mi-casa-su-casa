const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const { configure } = require('@dwp/govuk-casa');

const casaApp = configure(app, {
  allowPageEdit: true,
  compiledAssetsDir: './static',
  i18n: {
    dirs: ['./locales'],
    locales: ['en', 'cy']
  },
  mountUrl: '/paper-claims/',
  phase: 'beta',
  serviceName: 'common:serviceName',
  sessions: {
    name: 'casa-session-id',
    secret: 'super-super-secret',
    secure: false,
    ttl: 1800
  },
  views: {
    dirs: ['./views/']
  }
});

const nunjucks = app.get('nunjucksEnv');

nunjucks.addFilter('monthAsText', require('./lib/month-as-text'));

require('./routes/index.js')(casaApp.router);

casaApp.loadDefinitions(
  require('./definitions/pages.js'),
  require('./definitions/plan.js')
);

require('./routes/submit.js')(casaApp.router, casaApp.csrfMiddleware, casaApp, casaApp.config.mountUrl);
require('./routes/complete.js')(casaApp.router);

const port = process.env.PORT || 4000;

app.listen(port, _ => {
  console.log('Server running on %s', 'http://localhost:' + port);
});
