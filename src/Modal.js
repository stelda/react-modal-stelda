import React from 'react';
import './modal.css';

function Modal({ isOpen, onClose, message, overlayClassName, contentClassName, closeButtonClassName}) {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${overlayClassName}`}>
            <div className={`modal-content ${contentClassName}`}>
                <button className={`modal-close ${closeButtonClassName}`} onClick={onClose}>
                    &times;
                </button>
                <div className="modal-message">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Modal;
