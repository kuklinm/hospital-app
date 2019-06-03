import configureStore from 'redux-mock-store';
import * as proceduresActions from '../../../src/client/actions/procedures';
import { FETCH_PROCEDURES_SUCCESS, FETCH_PROCEDURES_ERROR } from '../../../src/client/actions/actionTypes';

const mockStore = configureStore();
const store = mockStore();

const mockedProcedureData = [
  {
    id: 1,
    doctor: 'JOJO',
    patient: 'Jordison',
    room: 'Dentist Cabinet 01',
    description: 'Tooth check',
    status: 'Planned',
    startTime: 2014,
    estimatedTime: 200000000
  },
  {
    id: 2,
    doctor: 'Red',
    patient: 'Jordison',
    room: 'Dentist Cabinet 02',
    description: 'Face check',
    status: 'Planned',
    startTime: 2014,
    estimatedTime: 200000000
  },
];


beforeEach(() => {
  store.clearActions();
});

describe('fetchProceduresSuccess', () => {
  it('has the correct type', () => {
    const action = proceduresActions.fetchProceduresSuccess();
    expect(action.type).toEqual(FETCH_PROCEDURES_SUCCESS);
  });

  it('has the correct payload', () => {
    const mockData = [mockedProcedureData];
    const action = proceduresActions.fetchProceduresSuccess(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('fetchProceduresError', () => {
  it('has the correct type', () => {
    const action = proceduresActions.fetchProceduresError();
    expect(action.type).toEqual(FETCH_PROCEDURES_ERROR);
  });
});
