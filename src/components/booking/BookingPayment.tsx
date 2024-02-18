import BookingCard from "./BookingCard";
import BookingHeader from "./BookingHeader";
import Plateform from "./Plateform";

const BookingPayment = () => {
  return (
    <div className="md:bg-gray-100  relative">
      <div>
      <BookingHeader />
      </div>

      <div className="Booking-form md:mx-16 mx-4 pt-20  ">
        <div className="flex">
          <Plateform />
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default BookingPayment;
