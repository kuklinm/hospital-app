import configureStore from 'redux-mock-store';
import * as patientsActions from '../../../src/client/actions/patients';
import {
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_ERROR,
  ADD_PATIENT_SUCCESS, ADD_PATIENT_ERROR
} from '../../../src/client/actions/actionTypes';

const mockStore = configureStore();
const store = mockStore();

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


beforeEach(() => {
  store.clearActions();
});

describe('fetchPatientsSuccess', () => {
  it('has the correct type', () => {
    const action = patientsActions.fetchPatientsSuccess();
    expect(action.type).toEqual(FETCH_PATIENTS_SUCCESS);
  });

  it('has the correct payload', () => {
    const mockData = [mockedPatientsData];
    const action = patientsActions.fetchPatientsSuccess(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('fetchPatientsError', () => {
  it('has the correct type', () => {
    const action = patientsActions.fetchPatientsError();
    expect(action.type).toEqual(FETCH_PATIENTS_ERROR);
  });
});

describe('addPatientSuccess', () => {
  it('has the correct type', () => {
    const action = patientsActions.addPatientSuccess();
    expect(action.type).toEqual(ADD_PATIENT_SUCCESS);
  });

  it('has the correct payload', () => {
    const mockData = [mockedPatientsData];
    const action = patientsActions.addPatientSuccess(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('addPatientError', () => {
  it('has the correct type', () => {
    const action = patientsActions.addPatientError();
    expect(action.type).toEqual(ADD_PATIENT_ERROR);
  });
});
