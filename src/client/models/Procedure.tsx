export default interface Procedure {
  id?: string;
  doctor: string;
  description: string;
  room: string;
  patient: string;
  startTime: Date;
  estimatedTime: string;
  status: string;
}