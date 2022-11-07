import { Overlay, Modal } from './Modal.styled';

function ModalWindow({ largePicture }) {
  console.log(largePicture);
  return (
    <Overlay className="overlay">
      <Modal className="modal">
        <img src={largePicture} alt="" />
      </Modal>
    </Overlay>
  );
}

export default ModalWindow;
