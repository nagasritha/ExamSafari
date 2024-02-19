const BookingCard = () => {

return (
    <div className="mx-4 md:flex hidden md:w-2/6 w-full flex-col bg-white p-4 rounded-xl h-fit">
      <div className="upperDiv">
        <div className="img">
          <img
            className="aspect-auto w-full rounded-xl"
            src="/images/HotelImage1.jpg"
            alt=""
          />
        </div>

        <div className="text py-4">
          <div className="Name font-semibold"> The Hub London</div>
          <div className="Dis text-sm"> London , England , GB</div>
        </div>

        <div className="hr pb-4">
          <hr />
        </div>
      </div>

      <div className="Lower-Div">
        <div className="font-bold text-lg pb-4">Room Type : Studio</div>
        <div className="pb-4 text-sm">7 sep , 2024</div>
        <div className="font-bold text-gray-700 text-xs">44 weeks</div>
        <div className="py-4  text-sm">12 july , 2024</div>
        <div className="font-semibold text-lg">345 $/ week</div>
      </div>
    </div>
  );
};

export default BookingCard;
