import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProceduresSuccess, fetchProceduresError} from '../actions/procedures';
import ProcedureListComponent from '../components/procedure-list/ProcedureListComponent';

function mapStateToProps(state: any) {
  return {
    procedures: state.procedures.list
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({fetchProceduresSuccess, fetchProceduresError}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcedureListComponent);