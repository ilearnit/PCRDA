import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Label, Container, Row, Col, Button } from 'reactstrap';
import cookie from 'react-cookies';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './navs';
import ShowFile from './show_file';
import Operation from './operation';
import ShowResult from './show_result';


let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });

toast.configure();

class PCRIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceKey1: '',
      sourceKey2: '',
      sampleDoubleHole: [0, 0],
      internalReferenceDoubleHole: [0, 0],
      referenceGroupDoubleHole: [0, 0], 
      result: [],
      showResult: false,
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
    this.state.sampleDoubleHole[0] = selectedOption.value;
    this.setState({
      sampleDoubleHole: this.state.sampleDoubleHole 
    });
  }

  setSampleDoubleHoleEnd = (selectedOption) => {
    this.state.sampleDoubleHole[1] = selectedOption.value;
    this.setState({
      sampleDoubleHoleStart: this.state.sampleDoubleHole
    });
  }

  setInternalReferenceDoubleHoleStart = (selectedOption) => {
    this.state.internalReferenceDoubleHole[0] = selectedOption.value;
    this.setState({
      internalReferenceDoubleHoleStart: this.state.internalReferenceDoubleHole 
    });
  } 

  setInternalReferenceDoubleHoleEnd = (selectedOption) => {
    this.state.internalReferenceDoubleHole[1] = selectedOption.value;
    this.setState({
      internalReferenceDoubleHoleEnd: this.state.internalReferenceDoubleHole 
    });
  } 

  setReferenceGroupDoubleHoleStart = (selectedOption) => {
    this.state.referenceGroupDoubleHole[0] = selectedOption.value;
    this.setState({
      referenceGroupDoubleHoleStart: this.state.referenceGroupDoubleHole
    }); 
  } 

  setReferenceGroupDoubleHoleEnd = (selectedOption) => {
    this.state.referenceGroupDoubleHole[1] = selectedOption.value;
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

    if (sourceKey1 == '' || sourceKey2 == '') {
      toast("Please check if the source file exists or if the duplicate hole is selected correctly.", {position: toast.POSITION.TOP_CENTER});
      return;
    }

    pcrAPI.dataAnalysis(sourceKey1, sourceKey2, sampleDoubleHole, internalReferenceDoubleHole, referenceGroupDoubleHole).then(res => {
      this.setState({
        result: res.data.result,  
        showResult: true,
        // sampleDoubleHole: '',
        // internalReferenceDoubleHole: '',
        // referenceGroupDoubleHole: ''
      })
    })
  }

  toggleDialog = () => {
    this.setState({
      showResult: false  
    })
  }

  render() {
    let showResult = this.state.showResult;
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <ShowFile label={'Source File One'} setSourceKey={this.setSourceKey1} />
            <ShowFile label={'Source File Two'} setSourceKey={this.setSourceKey2} />
            <Col>
              <br />
              <br />
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

              <br />
              <Button onClick={this.handleSubmit} className={"float-right"}>Submit</Button>
            </Col>
          </Row>
        </Container>
        {showResult &&
          <ShowResult result={this.state.result} toggle={this.toggleDialog} />
        }
      </div>
    );
  }
}


ReactDOM.render(
  <PCRIndex />,
  document.getElementById('root')
);
