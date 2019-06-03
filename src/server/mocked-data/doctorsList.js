const {timeout} = require('../helper');
const returnDoctorsList = async () => {

  await timeout(2000);

  return [
    {
      id: 1,
      name: 'Red',
    },
    {
      id: 2,
      name: 'Stewie',
    },
    {
      id: 3,
      name: 'Misha',
    },
    {
      id: 4,
      name: 'JOJO',
    },
    {
      id: 5,
      name: 'Dr. House',
    },
    {
      id: 6,
      name: 'Jud Lo',
    },

  ];
};

module.exports = {returnDoctorsList};