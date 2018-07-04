import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        <Modal isModalShow={this.state.isModalShow}>
          <div className="modal">
            <div className="modal__fog">
              <div className="modal__body">
                <h1>Модальное окно</h1>
                <button onClick={this.hideModal}>Close</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalButton;
