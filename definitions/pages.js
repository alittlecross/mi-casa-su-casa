const reviewPageDefinition = require('@dwp/govuk-casa/definitions/review-page');

const fieldValidators = require('./field-validators');

const pages = {};

const page = (name, suffix = '', reviewBlock) => {
  pages[name + suffix] = {
    view: `pages/${name}.njk`,
    fieldValidators: fieldValidators[name],
    hooks: {
      prerender(req, res, next) {
        res.locals.journeyContext = req.casa.journeyContext.data;
        next();
      },
    },
  };

  if (reviewBlock) {
    pages[name + suffix].reviewBlockView = `review-blocks/${name}.njk`;
  }
};

page('find');
page('found');

pages.found.hooks = {
  ...pages.found.hooks,
  pregather(req, res, next) {
    req.session.found = req.casa.journeyContext.data.found;
    next();
  },
  postvalidate(req, res, next) {
    req.casa.journeyContext.setDataForPage('found', req.session.found);
    next();
  },
};

page('contact-details', '', true);
page('alternative', '', true);
page('marital-status', '', true);
page('marital-details', '', true);
page('lived-worked', '-1');
page('country', '-1', true);
page('lived-worked', '-2');
page('country', '-2');
page('lived-worked', '-3');
page('country', '-3');
page('lived-worked', '-4');
page('country', '-4');
page('lived-worked', '-5');
page('claim-date', '', true);
page('bank', '', true);
page('declaration');

pages.review = reviewPageDefinition(pages);
pages.review.view = 'pages/review.njk';

module.exports = pages;
