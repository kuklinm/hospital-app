import proceduresReducer from '../../../src/client/reducers/procedures';
import {FETCH_PROCEDURES_ERROR, FETCH_PROCEDURES_SUCCESS} from '../../../src/client/actions/actionTypes';

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
];

const mockedError = new Error();

const initialState = {
  list: [],
  error: null,
  loading: true
};

it('handles actions of type FETCH_PROCEDURES_SUCCESS', () => {
  const action = {
    type: FETCH_PROCEDURES_SUCCESS,
    payload: [mockedProcedureData]
  };

  const newState = proceduresReducer(initialState, action);

  expect(newState).toEqual({ list: [mockedProcedureData], error: null, loading: false });
});


it('handles actions of type FETCH_PROCEDURES_ERROR', () => {
  const action = {
    type: FETCH_PROCEDURES_ERROR,
    payload: mockedError
  };

  const newState = proceduresReducer(initialState, action);

  expect(newState).toEqual({ ...initialState, error: mockedError, loading: false });
});