import * as types from './actionTypes';
import Room from '../models/Room';

export type RoomAction =
  | { type: 'FETCH_ROOMS_SUCCESS'; payload: Room[] }
  | { type: 'FETCH_ROOMS_ERROR'; payload: Error };

export const fetchRoomsSuccess = (rooms: Room[]): RoomAction => ({
  type: types.FETCH_ROOMS_SUCCESS,
  payload: rooms
});

export const fetchRoomsError = (error: Error): RoomAction => ({
  type: types.FETCH_ROOMS_ERROR,
  payload: error
});