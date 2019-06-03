import React, {Component} from 'react';
import {Formik} from 'formik';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import RoomsApi from "../../api/rooms";
import DoctorsApi from '../../api/doctors';

interface MyComponentProps {
  fetchDoctorsSuccess: any,
  fetchRoomsSuccess: any,
  addProcedureSuccess: any,
  doctors: any,
  rooms: any,
}

import Procedure from '../../models/Procedure';
import Doctor from '../../models/Doctor';
import Room from '../../models/Room';

class ProcedureAddFormComponent extends Component<MyComponentProps> {

  componentDidMount() {
    const {fetchDoctorsSuccess, fetchRoomsSuccess} = this.props;
    DoctorsApi.fetchDoctors().then((response: any) => {
      fetchDoctorsSuccess(response);
    });
    RoomsApi.fetchRooms().then((response: any) => {
      fetchRoomsSuccess(response)
    })
  }

  // @ts-ignore
  onSubmitForm = (values: Procedure, {setSubmitting}) => {
    const{addProcedureSuccess} = this.props;
    axios.post('/api/procedure', {...values, status: 'Planned'}).then(res => addProcedureSuccess(res.data));
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  render() {

    return (
      <div>
        <Formik
          initialValues={{doctor: '', patient: '', room: '', description: '', startTime: new Date(), estimatedTime: ''}}
          onSubmit={this.onSubmitForm}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <FormControl fullWidth margin='normal'>
                    <InputLabel htmlFor="doctor">Doctor</InputLabel>
                    <Select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="doctor"
                      value={values.doctor}
                    >
                      {this.props.doctors.map((doctor: Doctor) => {
                        return <MenuItem key={doctor.id} value={doctor.name}>{doctor.name}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField id='patient'
                             label="Pacient"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.patient}
                             margin='normal'
                             fullWidth/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <FormControl fullWidth margin='normal'>
                    <InputLabel htmlFor="room">Room</InputLabel>
                    <Select
                      name='room'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.room}
                    >
                      {this.props.rooms.map((room: Room) => {
                        return <MenuItem key={room.id} value={room.name}>{room.name}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    id='description'
                    label="Description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
                    name="startDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.startTime}
                    margin='normal'
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    type="number"
                    name="estimatedTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Min</InputAdornment>,
                    }}
                    value={values.estimatedTime}
                    margin='normal'
                    fullWidth
                  />
                </Grid>
              </Grid>
              <br/>
              <Button variant="outlined" color="primary" type="submit" disabled={isSubmitting}>
                Register procedure
              </Button>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

export default ProcedureAddFormComponent;
