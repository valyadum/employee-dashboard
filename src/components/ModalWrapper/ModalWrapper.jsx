import { useEffect } from "react";
import { createPortal } from "react-dom";
import style from './ModalWraper.module.scss'
import { CircleX } from "lucide-react";


const ModalWrapper = ({ children, onClose }) => {
  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <div
      className={style.backDrop}
      initial={'initial'}
      animate={'isOpen'}
      exit={'exit'}
      onClick={onClose}
    >
      <div
        className={style.modalContainer}
        onClick={event => event.stopPropagation()}
      >
        <button
          className={style.modalCloseButton}
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          <CircleX
            width="18"
            height="18"
            color="#111"
          />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ModalWrapper;
