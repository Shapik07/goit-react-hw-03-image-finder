import PropTypes from 'prop-types';
import { Component } from 'react';

import { Overlay, Modal } from './Modal.styled';

class ModalWindow extends Component {
  static propTypes = {
    largePicture: PropTypes.string.isRequired,
  };

  handleBackdropClick = e => {
    console.log('click');
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  handleEscKeydown = e => {
    console.log('keydown');
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscKeydown);
  }

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
