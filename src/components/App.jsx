import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import '../scss/style.scss'

export const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainContent />
    </div>
  );
};
