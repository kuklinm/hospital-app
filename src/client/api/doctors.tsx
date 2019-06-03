const axios = require('axios');

class DoctorsApi {
  static fetchDoctors() {
    return axios.get('/api/doctors', {withCredentials: true}).then((response: any) => response.data)
  }
}

export default DoctorsApi;