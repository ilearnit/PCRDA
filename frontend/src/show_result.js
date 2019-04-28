import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ShowResult extends React.Component {

  copy = () => {
    copy(this.props.result) 
    toast.success("Result is copied to the clipboard.", {position: toast.POSITION.TOP_CENTER});
    this.props.toggle();
  }


  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader toggle={this.props.toggle}>ΔΔCT</ModalHeader>
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
            <Button color="primary" onClick={this.copy}>Copy</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
      </div>
      );
    }
  }

export default ShowResult;
