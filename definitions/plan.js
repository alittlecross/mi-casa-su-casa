const { Plan } = require('@dwp/govuk-casa');

const plan = new Plan();

plan.addSequence(
  'find',
  'found',
    'contact-details',
  );

  plan.setRoute('contact-details', 'alternative', (r, c) => c.isPageValid('contact-details') && c.data['contact-details'].alternative === 'yes');
  plan.setRoute('contact-details', 'marital-status', (r, c) => c.isPageValid('contact-details') && c.data['contact-details'].alternative === 'no');

  plan.setRoute(
    'alternative',
    'marital-status',
  );

  plan.setRoute('marital-status', 'marital-details', (r, c) => c.isPageValid('marital-status') && c.data['marital-status'].maritalStatus === 'married');
  plan.setRoute('marital-status', 'lived-worked-1', (r, c) => c.isPageValid('marital-status') && c.data['marital-status'].maritalStatus !== 'married');

  plan.setRoute(
    'marital-details',
    'lived-worked-1',
  );

  plan.setRoute('lived-worked-1', 'country-1', (r, c) => c.isPageValid('lived-worked-1') && c.data['lived-worked-1'].outside === 'Yes');
  plan.setRoute('lived-worked-1', 'claim-date', (r, c) => c.isPageValid('lived-worked-1') && c.data['lived-worked-1'].outside === 'No');

  plan.setRoute(
    'country-1',
    'lived-worked-2',
  );

  plan.setRoute('lived-worked-2', 'country-2', (r, c) => c.isPageValid('lived-worked-2') && c.data['lived-worked-2'].outside === 'Yes');
  plan.setRoute('lived-worked-2', 'claim-date', (r, c) => c.isPageValid('lived-worked-2') && c.data['lived-worked-2'].outside === 'No');

  plan.setRoute(
    'country-2',
    'lived-worked-3',
  );

  plan.setRoute('lived-worked-3', 'country-3', (r, c) => c.isPageValid('lived-worked-3') && c.data['lived-worked-3'].outside === 'Yes');
  plan.setRoute('lived-worked-3', 'claim-date', (r, c) => c.isPageValid('lived-worked-3') && c.data['lived-worked-3'].outside === 'No');

  plan.setRoute(
    'country-3',
    'lived-worked-4',
  );

  plan.setRoute('lived-worked-4', 'country-4', (r, c) => c.isPageValid('lived-worked-4') && c.data['lived-worked-4'].outside === 'Yes');
  plan.setRoute('lived-worked-4', 'claim-date', (r, c) => c.isPageValid('lived-worked-4') && c.data['lived-worked-4'].outside === 'No');

  plan.addSequence(
    'country-4',
    'lived-worked-5',
    'claim-date',
  'bank',
  'declaration',
  'review',
);

plan.addOrigin('main', 'find');

module.exports = plan;
