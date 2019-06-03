import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Procedure from '../../models/Procedure';
import {convertDate} from '../../helpers/dateConverter';



const procedure = (props: {procedure: Procedure}) => {
  const {doctor, patient, room, description, startTime, estimatedTime, status, id} = props.procedure;

  const convertedDate = convertDate(startTime);

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">{doctor}</TableCell>
      <TableCell align="right">{patient}</TableCell>
      <TableCell align="right">{room}</TableCell>
      <TableCell align="right">{description}</TableCell>
      <TableCell align="right">{convertedDate}</TableCell>
      <TableCell align="right">{estimatedTime}</TableCell>
      <TableCell align="right">{status}</TableCell>
    </TableRow>
  )
};

export default procedure;