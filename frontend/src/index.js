import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Label, Container, Row, Col, Button } from 'reactstrap';
import cookie from 'react-cookies';

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
      sampleDoubleHole: [],
      internalReferenceDoubleHole: [],
      referenceGroupDoubleHole: [], 
    };
  }

  setSourceKey1 = (key) => {
    this.setState({
      sourceKey1: key
    });
  }

  setSourceKey2 = (key) => {
    this.setState({
      sourceKey2: key
    });
  }

  setSampleDoubleHoleStart = (selectedOption) => {
    this.state.sampleDoubleHole.unshift(selectedOption.value);
    this.setState({
      sampleDoubleHole: this.state.sampleDoubleHole 
    });
  }

  setSampleDoubleHoleEnd = (selectedOption) => {
    this.state.sampleDoubleHole.push(selectedOption.value);
    this.setState({
      sampleDoubleHoleStart: this.state.sampleDoubleHole
    });
  }

  setInternalReferenceDoubleHoleStart = (selectedOption) => {
    this.state.internalReferenceDoubleHole.unshift(selectedOption.value);
    this.setState({
      internalReferenceDoubleHoleStart: this.state.internalReferenceDoubleHole 
    });
  } 

  setInternalReferenceDoubleHoleEnd = (selectedOption) => {
    this.state.internalReferenceDoubleHole.push(selectedOption.value);
    this.setState({
      internalReferenceDoubleHoleEnd: this.state.internalReferenceDoubleHole 
    });
  } 

  setReferenceGroupDoubleHoleStart = (selectedOption) => {
    this.state.referenceGroupDoubleHole.unshift(selectedOption.value);
    this.setState({
      referenceGroupDoubleHoleStart: this.state.referenceGroupDoubleHole
    }); 
  } 

  setReferenceGroupDoubleHoleEnd = (selectedOption) => {
    this.state.referenceGroupDoubleHole.push(selectedOption.value);
    this.setState({
      referenceGroupDoubleHoleEnd: this.state.referenceGroupDoubleHole
    }); 
  } 

  handleSubmit = () => {
    let sourceKey1 = this.state.sourceKey1;
    let sourceKey2 = this.state.sourceKey2;
    let sampleDoubleHole = this.state.sampleDoubleHole;
    let internalReferenceDoubleHole = this.state.internalReferenceDoubleHole;
    let referenceGroupDoubleHole = this.state.referenceGroupDoubleHole;
    pcrAPI.dataAnalysis(sourceKey1, sourceKey2, sampleDoubleHole, internalReferenceDoubleHole, referenceGroupDoubleHole).then(res => {
      console.log(res.data)  
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
              <Button onClick={this.handleSubmit}>Submit</Button>
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
