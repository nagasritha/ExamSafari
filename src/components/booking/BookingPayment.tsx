import BookingCard from "./BookingCard"
import BookingHeader from "./BookingHeader"
import Plateform from "./Plateform"

const BookingPayment = () => {
  return (
   

    <div className="bg-gray-100  relative">
      <BookingHeader/>


      <div className="Booking-form mx-16 pt-20 ">
        <div className="flex">
        <Plateform/>
            <BookingCard/>
        </div>
      </div>
    </div>
  )
}

export default BookingPayment
