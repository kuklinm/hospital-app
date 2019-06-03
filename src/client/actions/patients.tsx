import * as types from './actionTypes'
import Patient from '../models/Patient';

export type PatientAction =
  | { type: 'FETCH_PATIENTS_SUCCESS'; payload: Patient[] }
  | { type: 'FETCH_PATIENTS_ERROR'; payload: Error }
  | { type: 'ADD_PATIENT'; payload: Patient }
  | { type: 'ADD_PATIENT_SUCCESS'; payload: Patient }
  | { type: 'ADD_PATIENT_ERROR'; payload: Error };

export const fetchPatientsSuccess = (patients: Patient[]): PatientAction => ({
  type: types.FETCH_PATIENTS_SUCCESS,
  payload: patients
});

export const fetchPatientsError = (error: Error): PatientAction => ({
  type: types.FETCH_PATIENTS_ERROR,
  payload: error
});

export const addPatient =  (patient: Patient): PatientAction => ({
  type: types.ADD_PATIENT,
  payload: patient
});

export const addPatientSuccess =  (patient: Patient): PatientAction => ({
  type: types.ADD_PATIENT_SUCCESS,
  payload: patient
});


export const addPatientError =  (error: Error): PatientAction => ({
  type: types.ADD_PATIENT_ERROR,
  payload: error
});

