import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Table, Form, FormGroup, 
         Label, Input, Container,
         Row, Col, FormText, Button } from 'reactstrap';

import cookie from 'react-cookies';
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import Header from './navs';
import ShowFile from './show_file';
import Operation from './operation';


let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });


class PCRIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceKey1: '',
      sourceKey2: ''
    };
  }

  setSourceKey1 = (key) => {
    this.setState({
      sourceKey1: key
    })
  }

  setSourceKey2 = (key) => {
    this.setState({
      sourceKey2: key
    })
  }

  render() {
    console.log(this.state.sourceKey1)
    console.log(this.state.sourceKey2)
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <ShowFile setSourceKey={this.setSourceKey1} />
            <ShowFile setSourceKey={this.setSourceKey2}/>
            <Operation />
          </Row>
        </Container>
      </div>
    );
  }
}


ReactDOM.render(
  <PCRIndex />,
  document.getElementById('root')
);
