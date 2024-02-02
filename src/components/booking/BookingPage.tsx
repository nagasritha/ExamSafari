import { Navigate, useNavigate } from "react-router-dom";

const BookingPage = () => {

  const navigate = useNavigate();

  const handleBookingForm = ()=>{
    navigate("/bookingform");
  }



  return (
    <div className="px-60 pt-12 bg-gray-100 h-screen">
      <div className="upper-portion">
        <div className="flex gap-6">
          <div className="font-semibold">Home /</div>
          <div className="font-semibold">Profile /</div>
          <div className="font-semibold">Booking</div>
        </div>

        <div className="font-bold text-2xl py-4">Booking</div>
      </div>

      <div className="main-portion bg-white rounded-lg ">
        <div className="w-full h-2/3 upper-div px-4 py-5  ">
          <div className="lower-div mx-4">
            <div className="nav-bar flex gap-12 w-full   font-semibold py-3 text-sm ">
              <div>Enquiry</div>
              <div>Booking Details </div>
              <div>Payment</div>
              <div>Confirmation</div>
              <div>Moved in</div>
            </div>
            <div className="horizontal mb-6">
              <hr />
            </div>

            <div className="card flex">
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
