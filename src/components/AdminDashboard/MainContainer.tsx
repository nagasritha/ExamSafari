import Dashboard from "./Dashboard";
import ServicesAdd from "./ServicesAdd";

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
            <ServicesAdd />
          </div>
        );
      case "users":
        return (
          <div className="booking">
            {/* Your Users component */}
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="main-container bg-gray-100">{renderContent()}</div>;
};

export default MainContainer;
