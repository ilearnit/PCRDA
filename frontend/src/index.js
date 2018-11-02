import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import cookie from 'react-cookies';
import Example from './navs';
import 'bootstrap/dist/css/bootstrap.css';


let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });


class PCRIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: '',
      interReferMean:'',
      deltaCT: '',
      controlGroup: '',
      deltaDeltaCT: '',
      lastResult: '',
    };

  }

  handleChangeValue = (event) => {
    this.setState({value: event.target.value});
  }

  handleChangeInterReferMean = (event) => {
    this.setState({interReferMean: event.target.value})
  }

  handleControlGroup = (event) => {
    this.setState({controlGroup: event.target.value})
  }

  handleSubmit = () => {
    const url = '/api/update/';
    let value = this.state.value;
    let value4 = this.state.interReferMean;
    let value5 = this.state.controlGroup;

    pcrAPI.updateData(value, value4, value5, url)
      .then(res => {
        this.setState({
          items: res.data.mean_str.replace(/,/g, '\n'),
          deltaCT: res.data.delta_CT,
          deltaDeltaCT: res.data.delta_delta_CT,
          lastResult: res.data.result,
        })
      })
  }

  render() {
    const { items, deltaCT , deltaDeltaCT, lastResult } = this.state;
    let delta = deltaCT.replace(/,/g, '\n');
    let deltaDelta = deltaDeltaCT.replace(/,/g, '\n');
    let finalResult = lastResult.replace(/,/g, '\n');
    return (
      <Container>
        <Example />
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className='d-flex justify-content-center'>Source Data</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" value={this.state.value} onChange={this.handleChangeValue} />
              </FormGroup>
            </Col>

            <Col md={2}>
              <Row>
                <FormGroup>
                  <Label className='d-flex justify-content-center'>Mean</Label>
                  <textarea wrap="off" name='text' className="form-control" style={{'height': '200px','width': '100%'}} value={items}></textarea>
                </FormGroup>
                <FormGroup>
                  <Label className='d-flex justify-content-center'>Inter refer mean</Label>
                  <Input wrap="off" style={{'height': '200px'}} type="textarea" name="text" value={this.state.interReferMean} onChange={this.handleChangeInterReferMean} />
                </FormGroup>
              </Row>
            </Col>

            <Col md={2}>
              <Row>
                <FormGroup>
                  <Label className='d-flex justify-content-center'>ΔCT</Label>
                  <textarea wrap="off" name='text' className="form-control" style={{'height': '200px','width': '100%'}} value={delta}></textarea>
                </FormGroup>
                <FormGroup>
                  <Label className='d-flex justify-content-center'>CG ΔCT</Label>
                  <textarea wrap="off" className="form-control" style={{'height': '200px'}} value={this.state.controlGroup} onChange={this.handleControlGroup}></textarea>
                </FormGroup>
              </Row>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label className='d-flex justify-content-center'>ΔΔCT</Label>
                <textarea wrap="off" className="form-control" style={{'height': '448px'}} value={deltaDelta}></textarea>
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label className='d-flex justify-content-center'>2 ** - ΔΔCT</Label>
                <textarea wrap="off" className="form-control" style={{'height': '448px'}} value={finalResult}></textarea>
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
