const {timeout} = require('../helper');
const returnPatientsList = async () => {

  await timeout(2000);

  return [
    {
      id: 1,
      name: 'Joseph Joetar',
    },
    {
      id: 2,
      name: 'Polnaref',
    },
    {
      id: 3,
      name: 'Abdul',
    },
    {
      id: 4,
      name: 'Dio',
    },
    {
      id: 5,
      name: 'Chinzano',
    },
    {
      id: 6,
      name: 'Jet Lee',
    },

  ];
};

module.exports = {returnPatientsList};