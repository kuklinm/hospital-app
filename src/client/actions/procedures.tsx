import * as types from './actionTypes';
import Procedure from '../models/Procedure';

export type ProcedureAction =
  | { type: 'FETCH_PROCEDURES_SUCCESS'; payload: Procedure[] }
  | { type: 'FETCH_PROCEDURES_ERROR'; payload: Error }
  | { type: 'ADD_PROCEDURE_SUCCESS'; payload: Procedure }
  | { type: 'ADD_PROCEDURE_ERROR'; payload: Error };

export const fetchProceduresSuccess = (procedures: Procedure[]): ProcedureAction => ({
  type: types.FETCH_PROCEDURES_SUCCESS,
  payload: procedures
});

export const fetchProceduresError =  (error: Error): ProcedureAction => ({
  type: types.FETCH_PROCEDURES_ERROR,
  payload: error
});

export const addProcedureSuccess = (procedure: Procedure): ProcedureAction => ({
  type: types.ADD_PROCEDURE_SUCCESS,
  payload: procedure
});

export const addProcedureError =  (error: Error): ProcedureAction => ({
  type: types.ADD_PROCEDURE_ERROR,
  payload: error
});