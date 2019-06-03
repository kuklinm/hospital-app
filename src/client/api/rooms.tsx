const axios = require('axios');

class RoomsApi {
  static fetchRooms() {
    return axios.get('/api/rooms', {withCredentials: true}).then((response: any) => response.data)
  }
}

export default RoomsApi;