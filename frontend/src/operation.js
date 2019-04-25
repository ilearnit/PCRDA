import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Table, Form, FormGroup, 
         Label, Input, Container,
         Row, Col, FormText, Button } from 'reactstrap';

import cookie from 'react-cookies';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });


class ShowFile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      files: [],
      page: 0
    };
  }


  render() {
    return (
      <Col sm={6}>
      </Col>
    );
  }
}

export default ShowFile;
