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
      referenceGroupDoubleHole: [1, 0],
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
      toast("请检查源文件是否存在或是否正确选择了孔板位置。", {position: toast.POSITION.TOP_CENTER});
      return;
    }

    pcrAPI.dataAnalysis(sourceKey1, sourceKey2, sampleDoubleHole, internalReferenceDoubleHole, referenceGroupDoubleHole).then(res => {
      this.setState({
        result: res.data.result,
        showResult: true,
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
            <ShowFile label={'源文件一'} setSourceKey={this.setSourceKey1} />
            <ShowFile label={'源文件二'} setSourceKey={this.setSourceKey2} />
            <Col>
              <br />
              <br />
              <Label>{'请输入内参组所在的位置(说明: 文件一仅用于选取内参组所在位置): '}</Label>
              <Row>
                <Operation label={'开始'} handleSelected={this.setSampleDoubleHoleStart} />
                <Operation label={'结束'} handleSelected={this.setSampleDoubleHoleEnd} />
              </Row>
              <br />
              <Label>{'请输入实验组所在的位置(说明: 文件二用于选取实验组所在位置): '}</Label>
              <Row>
                <Operation label={'开始'} handleSelected={this.setInternalReferenceDoubleHoleStart} />
                <Operation label={'结束'} handleSelected={this.setInternalReferenceDoubleHoleEnd} />
              </Row>

              <br />
              <Label>{'请输入对照组所在的位置(说明: 文件二用于选取对照组所在位置): '}</Label>
              <Row>
                <Operation label={'开始'} handleSelected={this.setReferenceGroupDoubleHoleStart} />
                <Operation label={'结束'} handleSelected={this.setReferenceGroupDoubleHoleEnd} />
              </Row>

              <br />
              <Button onClick={this.handleSubmit} className={'float-right'}>提交</Button>
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
