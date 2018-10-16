var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

class PcrAPI {

  init ({sfcsrfToken}) {
    this.req = axios.create({
      headers: {
        'X-CSRFToken': sfcsrfToken,
      }
    });
    return this;
  }
  
  updateData(value1, value2, value3, value4, value5, updateLink) {
    const params = {
      value1: value1,
      value2: value2,
      value3: value3,
      value4: value4,
      value5: value5
    }

    return this.req.post(updateLink, params)
  }
}

export { PcrAPI };
