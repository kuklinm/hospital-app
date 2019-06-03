import * as types from './actionTypes'
import Doctor from '../models/Doctor';

export type DoctorAction =
  | { type: 'FETCH_DOCTORS_SUCCESS'; payload: Doctor[] }
  | { type: 'FETCH_DOCTORS_ERROR'; payload: Error };

export const fetchDoctorsSuccess = (doctors: Doctor[]): DoctorAction => ({
  type: types.FETCH_DOCTORS_SUCCESS,
  payload: doctors
});

export const fetchDoctorsError =  (error: Error): DoctorAction => ({
  type: types.FETCH_DOCTORS_ERROR,
  payload: error
});