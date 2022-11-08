import { Component } from 'react';

import { Overlay, Modal } from './Modal.styled';

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.closeModal();
      }
    });
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay className="overlay" onClick={this.handleBackdropClick}>
        <Modal className="modal">
          <img src={this.props.largePicture} alt="" />
        </Modal>
      </Overlay>
    );
  }
}

export default ModalWindow;
