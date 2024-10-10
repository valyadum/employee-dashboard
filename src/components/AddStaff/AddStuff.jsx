import React, { useState } from 'react';
import style from './AddStuff.module.scss';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import ModalAddEmployee from 'components/ModalAddEmploee/ModalAddEmploee';


function AddStuff() {
  const [shownModal, setShownModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={style.addBtn}
        onClick={() => setShownModal(true)}
      >
        Add Employee
      </button>
      {shownModal && (
        <ModalWrapper width={400} onClose={() => setShownModal(false)}>
          <ModalAddEmployee onClose={() => setShownModal(false)} />
        </ModalWrapper>
      )}
      {/* {handleSaveEmployee} */}
    </div>
  );
}

export default AddStuff;
