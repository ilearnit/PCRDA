import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Label, Card, CardImg, Alert } from 'reactstrap';


import Header from './navs';


class PCRHelp extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDemo = () => {
    const url = 'https://pan.baidu.com/s/1OaIrEtk1XGEFMEBHlGNcdg';
    window.open(url, '_blank');
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Label sm={2} size="lg">操作说明</Label>
          <Card>
            <CardImg top width="100%" src='/static/pcr.jpeg' />
            <Alert color="danger">
              红色框内可以上传相关仪器分析后得到的结果数据。目前本网站仅支持 txt 文件格式，在后续会添加支持更多类型的文件。
              <br />具体文件格式见<a href="#" onClick={this.toggleDemo} className="alert-link">百度网盘</a>提取码:bivt
              <br />
              特别说明：这里必须上传两个文件，哪怕你要分析的数据，仅有一份文件，就将这份文件上传两次。
            </Alert>
            <Alert color="primary">
              蓝色框内可以选择内参如：GAPDH 所在孔的位置，根据个人习惯在做实验时，选择复孔格式为：
              <br />0 1 2 3 4 5 6 … 22 23 24
              <br />A
              <br />B
              <br />C
              <br />
              若start A1 end A12， 那么这里被选中的数据有  A1 - A12， B1 - B12，C1 - C12
              <br />
              算出 AVERAGEi = （Ai + Bi + Ci）/ 3 , (i = 1, 2, 3, 4, ..., 10, 11, 12)
            </Alert>
            <Alert color="success">
              绿色框内可以选择实验组中处理组的相关数据
              <br />0 1 2 3 4 5 6 … 22 23 24
              <br />D
              <br />E
              <br />F
              <br />
              若start D1 end D12， 那么这里被选中的数据有  D1 - D12， E1 - E12，F1 - F12
              <br />算出 AVERAGEi = （Di + Ei + Fi）/ 3 , (i = 1, 2, 3, 4, ..., 10, 11, 12)
              <br />ΔCTi = 实验组的 AVERAGEi - 内参组的 AVERAGEi
            </Alert>
            <Alert color="warning">
              黄色框内可以选择实验组中对照组的相关数据
              <br />0 1 2 3 4 5 6 … 22 23 24
              <br />D
              <br />E
              <br />F
              <br />
              若start D1 end D6， 那么这里被选中的数据有  D1 - D6， E1 - E6，F1 - F6
              <br />算出 AVERAGEi = ΔCTi / 3 , (i = 1, 2, 3, 4, 5, 6)
            </Alert>
            <Alert color="dark">
              ΔΔCTi = ΔCTi - 对照组的 AVERAGEi
              <br />最终结果 result = 0.5^ΔΔCTi
            </Alert>
          </Card>
        </Container>
      </div>
    );
  }
}


ReactDOM.render(
  <PCRHelp />,
  document.getElementById('root')
);
