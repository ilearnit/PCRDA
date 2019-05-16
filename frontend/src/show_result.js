import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ShowResult extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader toggle={this.props.toggle}>0.5^ΔΔCT</ModalHeader>
          <ModalBody>
            <ul style={{'listStyle': 'none'}}>
              {this.props.result.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ShowResult;
