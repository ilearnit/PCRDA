var axios = require('axios');

class PcrAPI {

  init ({sfcsrfToken}) {
    this.req = axios.create({
      headers: {
        'X-CSRFToken': sfcsrfToken,
      }
    });
    return this;
  }
  
  updateData(value, value4, value5, updateLink) {
    const params = {
      value: value,
      value4: value4,
      value5: value5
    };

    return this.req.post(updateLink, params);
  }
}

export { PcrAPI };
