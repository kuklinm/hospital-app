const axios = require('axios');

class PatientsApi {
  static fetchPatients() {
    return axios.get('/api/patients', {withCredentials: true}).then((response: any) => response.data)
  }
}

export default PatientsApi;