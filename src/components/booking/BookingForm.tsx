import BookingCard from "./BookingCard"
import BookingHeader from "./BookingHeader"
import PersonalDetails from "./PersonalDetails"

const BookingForm = () => {
  return (
    <div className="bg-gray-100  relative">
      <BookingHeader/>


      <div className="Booking-form mx-16 pt-20 ">
        <div>
            <PersonalDetails/>
            <BookingCard/>
        </div>
      </div>
    </div>
  )
}

export default BookingForm