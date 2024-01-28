import React from "react";
import { Link } from "react-router-dom";

interface Property {
  name: string;
  location: string;
  distanceFromCityCenter: string;
  amenities: string[];
  roomOptions: number;
  offers: number;
  price: {
    from: string;
    status?: string;
  };
  images: string[];
}

interface CardProps {
  properties: Property[];
}

const handleDefClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const Card: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="px-2 md:px-0 card border border-md my-4  border-gray-300 rounded-lg flex flex-col md:flex-row w-full bg-white">
      <div className="img-part md:w-1/3 py-1">
        <img
          className="w-full h-auto rounded-xl aspect-square"
          src={property.images[0]}
          alt={property.name}
        />
      </div>
      <div className="contant-Part md:mx-6 w-full md:w-2/3 mt-4 md:mt-0">
        <div className="cardHeader">
          <h3 className="text-xl font-semibold pt-2">{property.name}</h3>
          <p className="text-xs text-gray-500 py-1">{property.location}</p>
        </div>
        <div className="card-body">
          <ul>
            <li className="text-xs text-gray-500 py-1">{`Distance from City Center: ${property.distanceFromCityCenter}`}</li>
            <li className="text-xs text-black py-1">{`Amenities: ${property.amenities.join(
              ", "
            )}`}</li>
            <div className="flex items-center gap-3 my-2">
              <li className="bg-gray-200 text-xs p-1 rounded-md">{`Room Options: ${property.roomOptions}`}</li>
              <li className="bg-gray-200 text-xs p-1 rounded-md">{`Offers: ${property.offers}`}</li>
            </div>

            <div className="flex justify-between items-center py-2">
              <li className="flex items-center">
                {" "}
                <p className="text-xs"> "From"</p>
                <li>
                  <p className="font-semibold text-lg ">{`${
                    property.price.from
                  } ${property.price.status || ""}`}</p>
                </li>
              </li>

              <div>
                {/* Modal toggle */}
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={handleDefClick}
                >
                  Enquire
                </button>

                {/* Main modal */}
                <div
                  onClick={() => handleDefClick}
                  id="default-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full cursor-default"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* Modal header */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Terms of Service
                        </h3>
                        <button
                          onClick={handleDefClick}
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      {/* Modal body */}
                      <div className="p-4 md:p-5 space-y-4">
                        <div className="main-Container flex ">
                          <div className="Left-container w-3/5">
                            <div>Book Now</div>
                            <div>
                              our ideal student accommodation is a few steps
                              away! Please fill in your details below so we can
                              find you a new home!
                            </div>
                            <form></form>
                          </div>
                          <div className="Right-Container w-2/5 outline"> hello</div>
                        </div>
                      </div>
                      {/* Modal footer */}
                      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          onClick={handleDefClick}
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          onClick={handleDefClick}
                          data-modal-hide="default-modal"
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExamCityCard: React.FC<CardProps> = ({ properties }) => {
  return (
    <>
      <div className="properties-list">
        <Link target="_main" to={`/examcitydescription`}>
          {properties.map((property, index) => (
            <Card key={index} property={property} />
          ))}
        </Link>
      </div>
    </>
  );
};

export default ExamCityCard;