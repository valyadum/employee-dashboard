
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
import EmployeeTable from 'components/EmployeeTable/EmployeeTable';
import style from './MainContent.module.scss'
import UserBudget from 'components/UserBudget/UserBudget';

function MainContent() {


    return <div className={`'content' ${style.container}`}>
        <DashboardHeader />
        <UserBudget/>
        <EmployeeTable />
  </div>;
}

export default MainContent