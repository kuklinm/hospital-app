import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDoctorsSuccess, fetchDoctorsError} from '../actions/doctors';
import {fetchRoomsSuccess, fetchRoomsError} from '../actions/rooms';
import {
  fetchPatientsSuccess,
  fetchPatientsError,
  addPatientSuccess,
  addPatientError} from '../actions/patients';
import {addProcedureSuccess} from '../actions/procedures';

import ProcedureAddFormComponent from '../components/procedure-add-form/ProcedureAddFormComponent';

function mapStateToProps(state: any) {
  return {
    doctors: state.doctors.data,
    rooms: state.rooms.list,
    patients: state.patients.list
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    fetchDoctorsSuccess,
    fetchDoctorsError,
    fetchRoomsSuccess,
    fetchRoomsError,
    fetchPatientsSuccess,
    fetchPatientsError,
    addPatientSuccess,
    addPatientError,
    addProcedureSuccess
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcedureAddFormComponent);