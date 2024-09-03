import { FC, PropsWithChildren } from 'react';
import { ModalProps } from './Modal.types';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ title, children }) => {
  return (
    // <button
    //   type="button"
    //   className="btn me-auto"
    //   data-bs-dismiss="modal"
    // >

    <div
      className="modal"
      id="modal"
      tabIndex={-1}
    >
      <div
        className="modal-dialog"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              id="close-btn"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
