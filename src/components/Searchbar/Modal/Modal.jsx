import PropTypes from 'prop-types';
import { Component } from 'react';

import { Overlay, Modal } from './Modal.styled';

class ModalWindow extends Component {
  static propTypes = {
    largePicture: PropTypes.string.isRequired,
  };

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
    const { largePicture } = this.props;

    return (
      <Overlay className="overlay" onClick={this.handleBackdropClick}>
        <Modal className="modal">
          <img src={largePicture} alt="" />
        </Modal>
      </Overlay>
    );
  }
}

export default ModalWindow;
