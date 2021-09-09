import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

function Modal({ show, children, onClose }) {
  // Render nothing if the "show" prop is false
  if (!show) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="flex items-center">
      <button onClick={onClose}>
        <div className="fixed inset-0 bg-gray-500 opacity-50 z-30"></div>
      </button>
      <div
        className="bg-white z-40 border rounded-md p-2 w-11/12 sm:w-8/12 md:w-6/12"
        style={backdropStyle}
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
}

//styles
const backdropStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
