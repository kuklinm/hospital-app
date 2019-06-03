import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import ProcedureComponent from "../procedure/Procedure";
import ProcedureAddFormContainer from "../../containers/ProcedureAddFormContainer";

import ProceduresApi from "../../api/procedures";

interface MyComponentProps {
  fetchProceduresSuccess: any,
  procedures: any,
}

import Procedure from '../../models/Procedure';

class ProcedureListComponent extends Component<MyComponentProps> {
  state = {
    registerNewProcedure: false,
  };

  componentDidMount() {
    const {fetchProceduresSuccess} = this.props;
    ProceduresApi.fetchProcedures().then((response: any) => {
      fetchProceduresSuccess(response);
    });
  }


  handleRegisterClick = () => {
    this.setState({registerNewProcedure: true});
  };


  handleCancelClick = () => {
    this.setState({registerNewProcedure: false});
  };

  render() {
    const registerNewProcedure = this.state.registerNewProcedure;

    return (
      <Box my={3}>{registerNewProcedure ? (<Button variant="outlined"
                                                   color="secondary"
                                                   onClick={this.handleCancelClick}>Cancel</Button>) :
        (<Button variant="outlined"
                 color="primary"
                 onClick={this.handleRegisterClick}>Register new procedure</Button>)}

        {registerNewProcedure && <ProcedureAddFormContainer/>}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell align="right">Patient</TableCell>
              <TableCell align="right">Room</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">Estimated Time</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.props.procedures.map((procedure: Procedure) => {
              return (<ProcedureComponent
                key={procedure.id}
                procedure={procedure}/>)
            })}
          </TableBody>
        </Table>
      </Box>
    )
  }
}

export default ProcedureListComponent;