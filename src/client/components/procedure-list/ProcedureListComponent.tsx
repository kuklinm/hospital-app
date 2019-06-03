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

  handleCancelClick = () => {
    this.setState({registerNewProcedure: !this.state.registerNewProcedure});
  };

  render() {
    const {registerNewProcedure} = this.state;
    const {procedures} = this.props;
    const tableHeaders = ['Doctor', 'Patient', 'Room', 'Description', 'Start Time', 'Estimated Time', 'Status'];

    return (
      <Box my={3}>
        <Button
          variant="outlined"
          color={registerNewProcedure ? 'secondary' : 'primary'}
          onClick={this.handleCancelClick}>
          {registerNewProcedure ? 'Cancel' : 'Register new procedure'}
        </Button>

        {registerNewProcedure && <ProcedureAddFormContainer/>}
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, i: number) => <TableCell align="right" key={i}>{header}</TableCell>)}
            </TableRow>
          </TableHead>

          <TableBody>
            {procedures.map((procedure: Procedure, i : number) => {
              return (<ProcedureComponent
                key={i}
                procedure={procedure}/>)
            })}
          </TableBody>
        </Table>
      </Box>
    )
  }
}

export default ProcedureListComponent;