import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Table, Form, FormGroup, 
         Label, Input, Container,
         Row, Col, FormText, Button } from 'reactstrap';

import cookie from 'react-cookies';
import "filepond/dist/filepond.min.css";

let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });


class ShowFile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Col sm={8}>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="A1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="A6" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="B1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="B6" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="C1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="C6" />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="A1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="A6" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="B1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="B6" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="C1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="C6" />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="A1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="A6" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="B1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="B6" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleStart" className="mr-sm-2">Start</Label>
            <Input type="email" name="email" id="exampleStart" placeholder="C1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label htmlFor="exampleEnd" className="mr-sm-2">End</Label>
            <Input type="password" name="password" id="exampleEnd" placeholder="C6" />
          </FormGroup>

        </Form>
      </Col>
    );
  }
}

export default ShowFile;
