import {  useNavigate , Link } from "react-router-dom";


const BookingPage = () => {

  const navigate = useNavigate();

  const handleBookingForm = ()=>{
    navigate("/bookingform");
  }



  return (
    <div className="md:px-60 md:pt-12   h-screen">
      <div className="upper-portion pt-4">
        <div className="flex gap-6">
          <Link to={"/"}>
          <div className="font-semibold">Home /</div>
          </Link>
          <Link to={""}>
          <div className="font-semibold">Profile /</div>
          </Link>
          <div className="font-semibold">Booking</div>
        </div>

        <div className="font-bold text-2xl py-4">Booking</div>
      </div>

      <div className="main-portion bg-white rounded-lg ">
        <div className="w-full h-2/3 upper-div px-4 md:py-5  my-14 md:my-0 ">
          <div className="lower-div mx-4">
            <div className="nav-bar flex md:gap-12 gap-4  w-full   font-semibold py-3 text-xs md:text-sm ">
              <div>Enquiry</div>
              <div>Booking Details </div>
              <div>Payment</div>
              <div>Confirmation</div>
              <div>Moved in</div>
            </div>
            <div className="horizontal mb-6">
              <hr />
            </div>

            <div className="card-1 flex">
              <div className="img">
                <img
                  className="h-32 w-50 rounded-xl"
                  src="/images/HotelImage1.jpg"
                  alt=""
                />
              </div>

              <div className="text pl-5">
                <div className="upper-text pb-10">
                  <div className="Name font-semibold text-lg">
                    The Hub, London
                  </div>
                  <div className="tagline text-xs  text-gray-700  ">
                    S Lambeth Rd, London
                  </div>
                </div>

                <div className="lower-text">
                  <div className=" text-xs text-gray-700 ">Rent</div>
                  <div className="text-sm font-semibold ">£352/Week</div>
                </div>
              </div>
            </div>

            <div className="horizontal my-6">
              <hr />
            </div>

            <div className="2-buttons flex justify-end ">
              <button className=" text-sm py-1 rounded-md font-semibold px-4 border  border-blue-600 text-blue-600 mx-2">
                View Property
              </button>
              <button className="text-sm py-1 px-4 bg-blue-600 font-semibold text-white rounded-md"
                onClick={handleBookingForm}  >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
