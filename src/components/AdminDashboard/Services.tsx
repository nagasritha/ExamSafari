const Services = () => {
    // Define JSON data for services
    const servicesData = [
      {
        name: "Travel Services",
        imageUrl: "/images/service1.png"
      },
      {
        name: "Accommodation Services",
        imageUrl: "/images/service2.png"
      },
      {
        name: "Travel + Accommodation Services",
        imageUrl: "/images/service3.png"
      }
    ];
  
    return (
        <div className="h-full">
        <div className="bg-white font-semibold text-2xl pl-2 ">Services</div>

      <div className="flex gap-2 md:flex-row flex-col overflow-hidden">
        {/* Map through servicesData to generate divs */}
        {servicesData.map((service, index) => (
          <div key={index} className="service1 md:w-1/3 w-full flex flex-col  shadow-md gap-2 p-2 rounded-lg">
            <div>
              <img src={service.imageUrl} alt="" />
            </div>
            <div className="flex gap-2">
              <div className="font-bold text-blue-600">Service name:</div>
              <div className="font-bold">{service.name}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default Services;
  