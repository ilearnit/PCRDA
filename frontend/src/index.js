import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import cookie from 'react-cookies';
import 'bootstrap/dist/css/bootstrap.css';


let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });


class PCRIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      items: '',
      interReferMean:'',
      deltaCT: '',
      controlGroup: '',
      deltaDeltaCT: ''
    };

  }

  handleChangeOne = (event) => {
    this.setState({value1: event.target.value});
  }

  handleChangeTwo = (event) => {
    this.setState({value2: event.target.value});
  }

  handleChangeThree = (event) => {
    this.setState({value3: event.target.value});
  }

  handleChangeInterReferMean = (event) => {
    this.setState({interReferMean: event.target.value})
  }

  handleControlGroup = (event) => {
    this.setState({controlGroup: event.target.value})
  }

  onCopyDeltaCT = () => {
    this.setState({
      controlGroup: this.state.deltaCT,
    })
  }

  onCopyMean = () => {
    this.setState({
      interReferMean: this.state.items, 
    })
  }

  onClear = () => {
    this.setState({
      value1: '',
      value2: '',
      value3: '',
      items: ''
    })
  }

  handleSubmit = () => {
    const url = '/api/update/';
    let value1 = this.state.value1;
    let value2 = this.state.value2;
    let value3 = this.state.value3;
    let value4 = this.state.interReferMean;
    let value5 = this.state.controlGroup;

    pcrAPI.updateData(value1, value2, value3, value4, value5, url)
      .then(res => {
        this.setState({
          items: res.data.mean_str.replace(/,/g, '\n'),
          deltaCT: res.data.delta_CT,
          deltaDeltaCT: res.data.delta_delta_CT
        })
      })
  }

  render() {
    const { items, deltaCT , deltaDeltaCT } = this.state;
    let delta = deltaCT.replace(/,/g, '\n');
    let deltaDelta = deltaDeltaCT.replace(/,/g, '\n');

    return (
      <Container>
        <Form>
          <Row>
            <Col md={1}>
              <FormGroup>
                <Label>复孔一</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" value={this.state.value1} onChange={this.handleChangeOne}/>
              </FormGroup>
            </Col>

            <Col md={1}>
              <FormGroup>
                <Label>复孔二</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" value={this.state.value2} onChange={this.handleChangeTwo}/>
              </FormGroup>
            </Col>

            <Col md={1}>
              <FormGroup>
                <Label>复孔三</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" value={this.state.value3} onChange={this.handleChangeThree} />
              </FormGroup>
              <Button onClick={this.onClear}> Clear 一 二 三 </Button>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label>Mean</Label>
                <textarea name='text' className="form-control" style={{'height': '448px','width': '100%'}} value={items}></textarea>
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label> Inter refer mean</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" value={this.state.interReferMean} onChange={this.handleChangeInterReferMean} />
              </FormGroup>
              <Button onClick={this.onCopyMean}>Copy Mean to interReferMean </Button>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label> ΔCT </Label>
                <textarea name='text' className="form-control" style={{'height': '448px','width': '100%'}} value={delta}></textarea>
              </FormGroup>
            </Col>

            <Col md={1}>
              <FormGroup>
                <Label> CG ΔCT </Label>
                <textarea className="form-control" style={{'height': '448px'}} value={this.state.controlGroup} onChange={this.handleControlGroup}></textarea>
              </FormGroup>
              <Button onClick={this.onCopyDeltaCT}> Copy ΔCT to CG ΔCT</Button> 
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label> ΔΔCT </Label>
                <textarea className="form-control" style={{'height': '448px'}} value={deltaDelta}></textarea>
              </FormGroup>
            </Col>


          </Row>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}


ReactDOM.render(
  <PCRIndex />,
  document.getElementById('root')
)
