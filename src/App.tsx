import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Accomadation from './pages/accomadation/Accomadation';
import Allahabad from './pages/allahabad/Allahabad';
import Banaras from './pages/banaras/Banaras';
import Kanpur from './pages/kanpur/Kanpur';
import Lucknow from './pages/lucknow/Lucknow';
import Travel from './pages/travel/Travel';
import TravelWithAccomadation from './pages/travelwithaccomadation/TravelWithAccomadation';
import NoPage from './pages/nopage/NoPage';
import Profile from './pages/profile/Profile';
import ExamCityDescription from "./components/examcitydescription/ExamCityDescription";
import ExamCityMain from "./components/examcity/ExamCityMain";
import BookingForm from "./components/booking/BookingForm";
import BookingPage from "./components/booking/BookingPage";
import BookingPayment from "./components/booking/BookingPayment";
import MyProfile from "./components/proflie/MyProfile";
import Admin from "./components/AdminDashboard/Admin";
import Loader from "./components/ui/Loader";
import Loading from "./components/Loading/loading";
import UserDetails from "./pages/UserDetails";
import Failure from "./components/Failure";
import Empty from "./components/Empty";


function App() {
  return (
    <div className="page-width">
      <Router>
        <Routes>
          <Route path='/loader' element={<Loader/>}/>
          <Route path='loading' element={<Loading/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accomadation" element={<Accomadation />} />
          <Route path="/allahabad" element={<Allahabad />} />
          <Route path="/profile" element={<Profile/>} />  
          <Route path= "myprofile" element={<MyProfile/>}/>
          <Route path="/banaras" element={<Banaras />} />
          <Route path="/kanpur" element={<Kanpur />} />
          <Route path="/lucknow" element={<Lucknow />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travelwithaccomadation" element={<TravelWithAccomadation />} />
          <Route path="/examcitydescription" element={<ExamCityDescription />} />
          <Route path="/examcitymain" element={<ExamCityMain />} />
          <Route path="/bookingform" element={<BookingForm/>}/>
          <Route path="/*" element={<NoPage />} />
          <Route path="/bookingform" element={<BookingForm/>}/>
          <Route path="/bookingpage" element={<BookingPage/>}/>
          <Route path="/payment" element={<BookingPayment/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path='/admin/:id' element={<UserDetails/>}/>
          <Route path="/failure" element={<Failure/>}/>
          <Route path="/empty" element={<Empty/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;