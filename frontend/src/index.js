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
      deltaCT: ''
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

  handleSubmit = () => {
    const url = '/api/update/';
    let value1 = this.state.value1;
    let value2 = this.state.value2;
    let value3 = this.state.value3;
    let value4 = this.state.interReferMean;

    pcrAPI.updateData(value1, value2, value3, value4, url)
      .then(res => {
        
        this.setState({
          items: res.data.mean_str,
          deltaCT: res.data.delta_CT
        })
      })
  }


  render() {
    const { items, deltaCT } = this.state;
    let arr = items.replace(/,/g, '\n');
    let delta = deltaCT.replace(/,/g, '\n');

    return (
      <Container>
        <Form>
          <Row>
            <Col md={1}>
              <FormGroup>
                <Label>复孔一</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" onChange={this.handleChangeOne}/>
              </FormGroup>
            </Col>

            <Col md={1}>
              <FormGroup>
                <Label>复孔二</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" onChange={this.handleChangeTwo}/>
              </FormGroup>
            </Col>

            <Col md={1}>
              <FormGroup>
                <Label>复孔三</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" onChange={this.handleChangeThree} />
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label>Mean</Label>
                <textarea className="form-control" style={{'height': '448px'}} value={arr}></textarea>
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label> Inter refer mean</Label>
                <Input style={{'height': '448px'}} type="textarea" name="text" value={this.state.interReferMean} onChange={this.handleChangeInterReferMean} />
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label> ΔCT </Label>
                <textarea className="form-control" style={{'height': '448px'}} value={delta}></textarea>
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
