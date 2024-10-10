import React, { useState } from 'react';
import styles from './ModalAddEmploee.module.scss';

const ModalAddEmployee = ({ onClose, onSave }) => {
  
    const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    status: 'free',
    role: '',
  });


  const handleInputChange = e => {
    const { name, value } = e.target;
    setEmployeeData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(employeeData);
    
    onClose(); 
  };

  return (
    <div className={styles.modalContent}>
      <h2>Додати нового працівника</h2>
      <div className={styles.modalForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Ім'я</label>
          <input
            type="text"
            id="name"
            name="name"
              value={employeeData.name}
              onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
              value={employeeData.email}
              onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="status">Статус</label>
          <select
            id="status"
            name="status"
              value={employeeData.status}
              onChange={handleInputChange}
          >
            <option value="free">Free</option>
            <option value="busy">Busy</option>
            <option value="vacation">On Vacation</option>
            <option value="workin">Workin</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="role">Роль</label>
          <input
            type="text"
            id="role"
            name="role"
              value={employeeData.role}
              onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className={styles.modalActions}>
        <button className={styles.saveButton} onClick={()=>handleSubmit()}>Створити</button>
      </div>
    </div>
  );
};

export default ModalAddEmployee;
