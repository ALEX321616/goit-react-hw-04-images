import s from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, alt, showModal }) => (
  <div className={s.overlay}>
    <div className={s.modal}>
      <img
        className={s.modalImg}
        src={largeImageURL}
        alt={alt}
        onClick={showModal}
      />
    </div>
  </div>
);

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
