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

  uploadFile(file) {
    const uploadURL = '/api/read/';
    return this.req.post(uploadURL, file);
  }
  
  dataAnalysis(sourceKey1, sourceKey2, sampleDoubleHole, internalReferenceDoubleHole, referenceGroupDoubleHole) {
    const url = '/api/analysis/';
    const params = {
      source_key_one: sourceKey1, 
      source_key_two: sourceKey2, 
      sample_double_hole: sampleDoubleHole,
      inter_refer_dobule_hole: internalReferenceDoubleHole,
      refer_group_double_hole: referenceGroupDoubleHole,
    };
    return this.req.post(url, params);
  }
  
}

export { PcrAPI };
