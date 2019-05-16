import React from 'react';
import { Label, Col } from 'reactstrap';
import Select from 'react-select';
import { KEY_VALUE } from './constant';


class SelectEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    // Object { value: 0, label: 'A1'}
    this.setState({ selectedOption });
    this.props.handleSelected(selectedOption);
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <Col sm={6}>
        <Label>{this.props.label}</Label>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={KEY_VALUE}
          placeholder={'请输入或下拉选择………'}
        />
      </Col>
    );
  }
}

export default SelectEditor;
