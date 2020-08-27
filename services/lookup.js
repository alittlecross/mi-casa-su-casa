module.exports = reference => {
  if (reference === 'QQ 12 34 56 X' || reference === '12345678') {
    return {
      name: {
        firstName: 'Ken',
        lastName: 'Adams'
      },
      dob: {
        dd: '30',
        mm: '10',
        yyyy: '1954'
      },
      nino: 'QQ 12 34 56 X',
      address: {
        address1: '5 Windsor Street',
        address2: 'South Gosforth',
        address3: 'Newcastle upon Tyne',
        postcode: 'NE3 1YL'
      },
      earliestDate: {
        dd: '30',
        mm: '10',
        yyyy: '2020'
      }
    };
  } else {
    return false;
  }
};
