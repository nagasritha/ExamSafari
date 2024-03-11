const City = () => {
    // Define JSON data for services
    const CityData = [
      {
        name: "allahabad",
        imageUrl: "/images/allahabad.png"
      },
      {
        name: "kanpur",
        imageUrl: "/images/kanpur.png"
      },
      {
        name: "lucknow",
        imageUrl: "/images/lucknow.png"
      }
    ];
  
    return (
        <div className="h-full">
        <div className="bg-white font-semibold text-2xl pl-2 ">City</div>

      <div className="flex gap-2 md:flex-row flex-col overflow-hidden">
        {/* Map through servicesData to generate divs */}
        {CityData.map((City, index) => (
          <div key={index} className="service1 md:w-1/3 w-full flex flex-col  shadow-md gap-2 p-2 rounded-lg">
            <div>
              <img src={City.imageUrl} alt="" />
            </div>
            <div className="flex gap-2">
              <div className="font-bold text-blue-600">City name:</div>
              <div className="font-bold">{City.name}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default City;
  