module.exports = {
  countryItem: {
    country: 'Japan',
  },

  countryGovukSummaryListRowsArray: [{
    classes: '',
    key: {
      text: 'lived-worked:reviewBlock.key',
    },
    value: {
      html: 'Japan<br>',
    },
  }],

  basicItem: {
    country: 'Japan',
    livedFrom: {},
    livedTo: {},
    workedFrom: {},
    workedTo: {},
    nino: 'AB123456C',
  },

  basicGovukSummaryListRowsArray: [{
    classes: '',
    key: {
      text: 'lived-worked:reviewBlock.key',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: <br>lived-worked:reviewBlock.values.worked: <br>AB123456C',
    },
  }],

  mixedItem: {
    country: 'Japan',
    livedFrom: { mm: '1' },
    livedTo: { yyyy: '2002' },
    workedFrom: { yyyy: '2001' },
    workedTo: { mm: '2' },
    nino: 'AB123456C',
  },

  mixedGovukSummaryListRowsArray: [{
    classes: '',
    key: {
      text: 'lived-worked:reviewBlock.key',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: Jan to 2002<br>lived-worked:reviewBlock.values.worked: 2001 to Feb<br>AB123456C',
    },
  }],

  completeItem: {
    country: 'Japan',
    livedFrom: { mm: '1', yyyy: '2001' },
    livedTo: { mm: '2', yyyy: '2002' },
    workedFrom: { mm: '1', yyyy: '2001' },
    workedTo: { mm: '2', yyyy: '2002' },
    nino: 'AB123456C',
  },

  completeGovukSummaryListRowsArray: [{
    classes: '',
    key: {
      text: 'lived-worked:reviewBlock.key',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: Jan 2001 to Feb 2002<br>lived-worked:reviewBlock.values.worked: Jan 2001 to Feb 2002<br>AB123456C',
    },
  }],

  multiGovukSummaryListRowsArray: [{
    classes: 'govuk-summary-list__row--no-border',
    key: {
      text: 'lived-worked:reviewBlock.key',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: Jan 2001 to Feb 2002<br>lived-worked:reviewBlock.values.worked: Jan 2001 to Feb 2002<br>AB123456C',
    },
  },
  {
    classes: 'govuk-summary-list__row--no-border',
    key: {
      text: '',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: Jan 2001 to Feb 2002<br>lived-worked:reviewBlock.values.worked: Jan 2001 to Feb 2002<br>AB123456C',
    },
  },
  {
    classes: 'govuk-summary-list__row--no-border',
    key: {
      text: '',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: Jan 2001 to Feb 2002<br>lived-worked:reviewBlock.values.worked: Jan 2001 to Feb 2002<br>AB123456C',
    },
  },
  {
    classes: '',
    key: {
      text: '',
    },
    value: {
      html: 'Japan<br>lived-worked:reviewBlock.values.lived: Jan 2001 to Feb 2002<br>lived-worked:reviewBlock.values.worked: Jan 2001 to Feb 2002<br>AB123456C<br><br>lived-worked:reviewBlock.values.more: Yes',
    },
  }],
};
