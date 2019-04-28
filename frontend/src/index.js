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
      sourceKey2: '',
      sampleDoubleHoleStart: '',
      sampleDoubleHoleEnd: '',
      internalReferenceDoubleHoleStart: '',
      internalReferenceDoubleHoleEnd: '',
      referenceGroupDoubleHoleStart: '', 
      referenceGroupDoubleHoleEnd: '', 
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

  setSampleDoubleHoleStart = (selectedOption) => {
    this.setState({
      sampleDoubleHoleStart: selectedOption.value
    })
  }

  setSampleDoubleHoleEnd = (selectedOption) => {
    this.setState({
      sampleDoubleHoleStart: selectedOption.value
    })
  }

  setInternalReferenceDoubleHoleStart = (selectedOption) => {
    this.setState({
      internalReferenceDoubleHoleStart: selectedOption.value  
    })
  } 

  setInternalReferenceDoubleHoleEnd = (selectedOption) => {
    this.setState({
      internalReferenceDoubleHoleEnd: selectedOption.value  
    })
  } 

  setReferenceGroupDoubleHoleStart = (selectedOption) => {
    this.setState({
      referenceGroupDoubleHoleStart: selectedOption.value  
    }) 
  } 

  setReferenceGroupDoubleHoleEnd = (selectedOption) => {
    this.setState({
      referenceGroupDoubleHoleEnd: selectedOption.value  
    }) 
  } 

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <ShowFile label={'Source Data One'} setSourceKey={this.setSourceKey1} />
            <ShowFile label={'Source Data Two'} setSourceKey={this.setSourceKey2} />
            <Col>
              <Label>{'Input sample double hole start and end(Tips: Choose from source data one): '}</Label>
              <Row>
                <Operation label={'Start'} handleSelected={this.setSampleDoubleHoleStart} />
                <Operation label={'End'} handleSelected={this.setSampleDoubleHoleEnd} />
              </Row>
              <br />
              <Label>{'Input internal reference double hole start and end(Tips: Choose from source data two): '}</Label>
              <Row>
                <Operation label={'Start'} handleSelected={this.setInternalReferenceDoubleHoleStart} />
                <Operation label={'End'} handleSelected={this.setInternalReferenceDoubleHoleEnd} />
              </Row>

              <br />
              <Label>{'Input reference group double hole start and end(Tips: Choose from source data two): '}</Label>
              <Row>
                <Operation label={'Start'} handleSelected={this.setReferenceGroupDoubleHoleStart} />
                <Operation label={'End'} handleSelected={this.setReferenceGroupDoubleHoleEnd} />
              </Row>
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
