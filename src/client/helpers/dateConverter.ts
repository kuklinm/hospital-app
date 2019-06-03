import moment from 'moment';

export const convertDate = (date: any): string => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};