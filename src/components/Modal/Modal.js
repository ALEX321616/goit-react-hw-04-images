import s from './Modal.module.css';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Modal = ({ largeImageURL, alt, showModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', showModal);
    return () => {
      window.removeEventListener('keydown', showModal);
    };
  });

  return ReactDOM.createPortal(
    <div className={s.overlay} onClick={showModal}>
      <div className={s.modal}>
        <img className={s.modalImg} src={largeImageURL} alt={alt} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
