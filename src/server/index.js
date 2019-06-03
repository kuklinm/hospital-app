const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {returnDoctorsList} = require('./mocked-data/doctorsList');
const {returnProcedureList} = require('./mocked-data/procedureList');
const {returnPatientsList} = require('./mocked-data/patientsList');
const {returnRoomList} = require('./mocked-data/roomsList');

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/doctors', async (req, res) => {

  const doctorList = await returnDoctorsList();

  res.setHeader('Content-Type', 'application/json');
  res.send(doctorList);
  res.status(200);
  res.end();
});

app.get('/api/procedures', async (req, res) => {
  const procedureList = await returnProcedureList();
  res.setHeader('Content-Type', 'application/json');
  res.send(procedureList);
  res.status(200);
  res.end();
});

app.get('/api/rooms', async (req, res) => {
  const roomList = await returnRoomList();
  res.setHeader('Content-Type', 'application/json');
  res.send(roomList);
  res.status(200);
  res.end();
});

app.get('/api/patients', async (req, res) => {
  const patientsList = await returnPatientsList();
  res.setHeader('Content-Type', 'application/json');
  res.send(patientsList);
  res.status(200);
  res.end();
});

app.post('/api/procedure', (req, res) => {
  console.log(req.body);
  res.send(req.body);
  res.status(200);
  res.end();
});

app.listen(8080, () => console.log('Listening on port 8080!'));