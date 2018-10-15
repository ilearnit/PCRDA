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
  
  updateData(value1, value2, value3, updateLink) {
    //let formData = new FormData();
    //formData.append("value1", value1);
    //formData.append("value2", value2);
    //formData.append("value3", value3);
    //return (
    //  axios.create()({
    //    method: 'post',
    //    url: updateLink,
    //    data: formData,
    //  })
    //);
    const params = {
      value1: value1,
      value2: value2,
      value3: value3,
    }

    return this.req.post(updateLink, params)
  }
}

export { PcrAPI };
