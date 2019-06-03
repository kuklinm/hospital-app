const {timeout} = require('../helper');

const returnProcedureList = async () => {
  await timeout(2000);
  return [
    {
      id: 1,
      doctor: 'JOJO',
      patient: 'Jordison',
      room: 'Dentist Cabinet 01',
      description: 'Tooth check',
      status: 'Finished',
      startTime:  '2019-02-03T15:15:20+03:00',
      estimatedTime: 200000000
    },
    {
      id: 2,
      doctor: 'Red',
      patient: 'Jordison',
      room: 'Dentist Cabinet 02',
      description: 'Face check',
      status: 'Finished',
      startTime: '2019-04-03T15:15:20+03:00',
      estimatedTime: 200000000
    },
    {
      id: 3,
      doctor: 'Stewie',
      patient: 'Jordison',
      room: 'Surgery Romm 01',
      description: 'Mind check',
      status: 'Planned',
      startTime: '2019-06-03T15:15:20+03:00',
      estimatedTime: 200000000
    }, {
      id: 4,
      doctor: 'Red',
      patient: 'Jordison',
      room: 'Room with funny people',
      description: 'Monopoly rules check',
      status: 'Planned',
      startTime: '2019-06-03T15:15:20+03:00',
      estimatedTime: 200000000
    }, {
      id: 5,
      doctor: 'JOJO',
      patient: 'Jordison',
      room: 'Room with funny people',
      description: 'Eye check',
      status: 'Finished',
      startTime: '2019-02-03T15:15:20+03:00',
      estimatedTime: 200000000
    }, {
      id: 6,
      doctor: 'Stewie',
      patient: 'Jordison',
      room: 'Room with funny people',
      description: 'Feet check',
      status: 'Finished',
      startTime: '2019-01-03T15:15:20+03:00',
      estimatedTime: 200000000
    },
  ];
};

module.exports = {returnProcedureList};