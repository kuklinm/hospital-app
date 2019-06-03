const {timeout} = require('../helper');
const returnRoomList = async () => {

  await timeout(3000);

  return [
    {
      id: 1,
      name: 'Dentist Cabinet 01',
    },
    {
      id: 2,
      name: 'Dentist Cabinet 02',
    },
    {
      id: 3,
      name: 'Surgery Room 01',
    },
    {
      id: 4,
      name: 'Surgery Room 02',
    },
    {
      id: 5,
      name: 'Room with cats',
    },
    {
      id: 6,
      name: 'Room with funny people',
    },

  ];
};

module.exports = {returnRoomList};