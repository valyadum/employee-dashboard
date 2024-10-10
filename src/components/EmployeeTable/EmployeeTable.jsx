import React, { useEffect } from 'react';
import styles from './EmployeeTable.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStaff, getStaff } from '../../redux/operations';
import { Pencil, Trash2 } from 'lucide-react';

const EmployeeTable = () => {
 const dispatch = useDispatch();
 const { staff, loading, error } = useSelector(state => state.staff);

 useEffect(() => {
   dispatch(getStaff());
 }, [dispatch]);
  console.log(staff);
  
    const getStatusClass = status => {
      switch (status) {
        case 'Free':
          return styles.free;
        case 'Busy':
          return styles.busy;
        case 'On Vacation':
          return styles.vacation;
        default:
          return '';
      }
    };

  const handleDelete = (data) => {
    console.log(data);
    dispatch(deleteStaff(data));
  
}
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.employeeTableContainer}>
      <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {staff?.map(workers => {
            return (
              <tr key={workers.id}>
                <td>
                  <div className={styles.employeeInfo}>
                    <img
                      src={workers.avatar}
                      alt="Avatar"
                      className={styles.avatar}
                    />
                    <span>{workers.name}</span>
                  </div>
                </td>
                <td>{workers.email}</td>
                <td
                  className={`${styles.status} ${getStatusClass(
                    workers.status
                  )}`}
                >
                  {workers.status}
                </td>
                <td>{workers.role}</td>
                <td>
                  <button className={styles.editBtn}>
                    <Pencil color="#757D8A" width={16} height={16} />
                  </button>
                  <button className={styles.deleteBtn} onClick={()=>handleDelete(workers.id)}>
                    <Trash2 color="#757D8A" width={16} height={16} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
