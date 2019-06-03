const axios = require('axios');

class ProceduresApi {
  static fetchProcedures() {
    return axios.get('/api/procedures', {withCredentials: true}).then((response: any) => response.data)
  }
}

export default ProceduresApi;