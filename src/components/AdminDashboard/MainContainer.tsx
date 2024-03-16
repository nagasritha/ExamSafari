import City from "./City";
import CityAdd from "./CityAdd";
import CityManage from "./CityManage";
import Dashboard from "./Dashboard";
import EditHomePage from "./EditHomePage";
import Services from "./Services";
import ServicesAdd from "./ServicesAdd";
import ServicesManage from "./ServicesManage";
import UserBookings from "./UserBookings";
import Users from "./Users";
import UsersAdd from "./UsersAdd";
import History from "./History";


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
            <Users/>
          </div>
        );
        case "city":
        return (
          <div className="">
            <City/>
          </div>
        );
        case "addCity":
        return (
          <div className="">
            <CityAdd/>
          </div>
        );
        case "manageCity":
          return (
            <div className="">
              <CityManage/>
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
          case "addUser":
          return (
            <div className="">
              <UsersAdd/>
            </div>
          );
          case "editHomePage":
          return (
            <div className="">
              <EditHomePage/>
            </div>
          );
          case "userBookings":
          return (
            <div className="">
              <UserBookings/>
            </div>
          );
          case "history":
          return (
            <div className="">
              <History/>
            </div>
          );
      default:
        return null;
    }
  };

  return <div className="main-container ">{renderContent()}</div>;
};

export default MainContainer;
