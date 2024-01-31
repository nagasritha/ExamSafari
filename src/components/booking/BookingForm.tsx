import BookingCard from "./BookingCard"
import BookingHeader from "./BookingHeader"
import PersonalDetails from "./PersonalDetails"

const BookingForm = () => {
  return (
    <div className="bg-gray-100">
      <BookingHeader/>


      <div className="Booking-form mx-16 mt-8">
        <div>
            <PersonalDetails/>
            <BookingCard/>
        </div>
      </div>
    </div>
  )
}

export default BookingForm
