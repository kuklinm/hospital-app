import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ProcedureListContainer from './containers/ProcedureListContainer';

function App() {
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className="App-header">
              Hospital Schedule
            </Typography>
          </Toolbar>
        </AppBar>
      <ProcedureListContainer/>
      </Container>
    </div>
  );
}

export default App;
