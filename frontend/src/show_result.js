import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ShowResult extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader toggle={this.props.toggle}>ΔΔCT</ModalHeader>
          <ModalBody>
            <ul style={{'list-style': 'none'}}>
              {this.props.result.map((item, index) => {
                return (
                  <li key={index}>{item}</li>    
                )                                        
              })}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
      </div>
      );
    }
  }

export default ShowResult;
