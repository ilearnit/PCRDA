import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Table, Form, FormGroup, Label, Input, Container, Row, Col, FormText } from 'reactstrap';

import cookie from 'react-cookies';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import Header from './navs';


let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });




class PCRIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      position: [],
      files: [],
      fileContent:''
    };
  }
  

  render() {
    let onUploadFile = {
      process: {
        url: "/api/read/",
        method: "POST",
        onload:(res) => {
          let data = JSON.parse(res);
          this.setState({
            value: data.data.Cp,
            position: data.data.Pos
          });
        },
      },
      revert: {
        url: "/api/read/",
        onload: (res => {
          this.setState({
            value: [],
            position: []
          });
        })
      }
    };

    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col sm={3}>
            <Label className='d-flex justify-content-center'>Source Data</Label>
            <Table bordered striped responsive className="mb-0">
              <thead>
                <tr>
                  <th width="45%">Pos</th>
                  <th width="55%">Cp</th>
                </tr>
              </thead>
            </Table>
            <Table bordered striped hover responsive>
              <tbody>
              {this.state.value.slice(0, 12).map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{this.state.position[index]}</th>
                    <th>{item}</th>
                  </tr>
                )}) 
              }
              </tbody>
            </Table>
            <FilePond server={onUploadFile}/>
            </Col>
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
