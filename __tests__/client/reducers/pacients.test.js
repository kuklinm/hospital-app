import patientsReducer from '../../../src/client/reducers/patients';
import {FETCH_PATIENTS_SUCCESS, FETCH_PATIENTS_ERROR} from '../../../src/client/actions/actionTypes';

const mockedPatientsData = [
  {
    id: 1,
    name: 'Joseph Joetar',
  },
  {
    id: 2,
    name: 'Polnaref',
  },
];

const mockedError = new Error();

const initialState = {
  list: [],
  error: null,
  loading: true
};

it('handles actions of type FETCH_PATIENTS_SUCCESS', () => {
  const action = {
    type: FETCH_PATIENTS_SUCCESS,
    payload: [mockedPatientsData]
  };

  const newState = patientsReducer(initialState, action);

  expect(newState).toEqual({ list: [mockedPatientsData], error: null, loading: false });
});


it('handles actions of type FETCH_PATIENTS_ERROR', () => {
  const action = {
    type: FETCH_PATIENTS_ERROR,
    payload: mockedError
  };

  const newState = patientsReducer(initialState, action);

  expect(newState).toEqual({ ...initialState, error: mockedError, loading: false});
});
