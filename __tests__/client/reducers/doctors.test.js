import doctorsReducer from '../../../src/client/reducers/doctors';
import {FETCH_DOCTORS_SUCCESS, FETCH_DOCTORS_ERROR} from '../../../src/client/actions/actionTypes';

const mockedDoctorsData = [
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
  data: [],
  error: null,
  loading: true
};

it('handles actions of type FETCH_DOCTORS_SUCCESS', () => {
  const action = {
    type: FETCH_DOCTORS_SUCCESS,
    payload: [mockedDoctorsData]
  };

  const newState = doctorsReducer(initialState, action);

  expect(newState).toEqual({ data: [mockedDoctorsData], error: null, loading: false });
});


it('handles actions of type PHONE_SELECTED', () => {
  const action = {
    type: FETCH_DOCTORS_ERROR,
    payload: mockedError
  };

  const newState = doctorsReducer(initialState, action);

  expect(newState).toEqual({ ...initialState, error: mockedError, loading: false});
});

