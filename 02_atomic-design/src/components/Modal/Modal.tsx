import React from 'react';
import './Modal.css';

type ModalProps = {
  type?: 'normal' | 'choise';
  text: string;
};

const Modal = ({
  type = 'normal',
  text,
}: ModalProps) => {
  return (
    <div className='modalContainer' role='dialog' aria-modal='true' aria-labelledby='modal-text'>
      <div id="modalContent">
        <p id="modal-text">{text}</p>
        <div className="button-wrapper">
          <button type="button" className="modalClose btn1">확인</button>
          {type === 'choise' ? <button type="button" className="modalClose btn2">취소</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;