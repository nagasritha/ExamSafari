import Dashboard from "./Dashboard";
import Services from "./Services";
import ServicesAdd from "./ServicesAdd";
import ServicesManage from "./ServicesManage";


interface MainContainerProps {
  selected: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ selected }) => {
  const renderContent = () => {
    switch (selected) {
      case "dashboard":
        return (
          <div className="dashboard">
            <Dashboard />
          </div>
        );
      case "services":
        return (
          <div className="">
            <Services/>
          </div>
        );
      case "users":
        return (
          <div className="booking">
            {/* Your Users component */}
          </div>
        );
        case "addServices":
          return (
            <div className="">
              <ServicesAdd/>
            </div>
          );
          case "manageServices":
          return (
            <div className="">
              <ServicesManage/>
            </div>
          );
      default:
        return null;
    }
  };

  return <div className="main-container ">{renderContent()}</div>;
};

export default MainContainer;
