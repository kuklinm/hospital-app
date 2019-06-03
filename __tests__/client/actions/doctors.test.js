import configureStore from 'redux-mock-store';
import * as doctorsActions from '../../../src/client/actions/doctors';
import {FETCH_DOCTORS_SUCCESS, FETCH_DOCTORS_ERROR} from '../../../src/client/actions/actionTypes';

const mockStore = configureStore();
const store = mockStore();

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

beforeEach(() => {
  store.clearActions();
});

describe('fetchDoctorsSuccess', () => {
  it('has the correct type', () => {
    const action = doctorsActions.fetchDoctorsSuccess();
    expect(action.type).toEqual(FETCH_DOCTORS_SUCCESS);
  });

  it('has the correct payload', () => {
    const mockData = [mockedDoctorsData];
    const action = doctorsActions.fetchDoctorsSuccess(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('fetchDoctorsError', () => {
  it('has the correct type', () => {
    const action = doctorsActions.fetchDoctorsError();
    expect(action.type).toEqual(FETCH_DOCTORS_ERROR);
  });
});
