import * as types from '../actions/actionTypes';
import {PatientAction} from '../actions/patients';
import Patient from "../models/Patient";


interface PatientState {
  list: Patient[],
  error: any,
  loading: boolean,
  sending: boolean
}

const initialState: PatientState = {
  list: [],
  error: null,
  loading: true,
  sending: false
};

const patientsReducer = (state = initialState, action: PatientAction): PatientState => {
  switch (action.type) {
    case types.FETCH_PATIENTS_SUCCESS:
      return {...state, list: action.payload, error: null, loading: false};
    case types.FETCH_PATIENTS_ERROR:
      return {...state, error: action.payload, loading: false};
    case types.ADD_PATIENT:
      return {...state, error: null, sending: true};
    case types.ADD_PATIENT_SUCCESS:
      return {...state, list: [...state.list, action.payload], error: null, sending: false};
    case types.ADD_PATIENT_ERROR:
      return {...state, error: action.payload, sending: false};
    default:
      return {...state};
  }
};

export default patientsReducer;