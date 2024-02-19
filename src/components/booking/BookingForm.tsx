import BookingCard from "./BookingCard"
import BookingHeader from "./BookingHeader"
import PersonalDetails from "./PersonalDetails"

const BookingForm = () => {
  return (
    <div className="md:bg-gray-100 h-full  relative">
      <BookingHeader/>


      <div className="Booking-form md:mx-16 mx-8 pt-20 ">
        <div className="flex">
            <PersonalDetails/>
            <BookingCard/>
        </div>
      </div>
    </div>
  )
}

export default BookingForm
