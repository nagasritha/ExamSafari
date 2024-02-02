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
                <div>
                  <p className="font-semibold text-lg ">{`${
                    property.price.from
                  } ${property.price.status || ""}`}</p>
                </div>
              </li>

              
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
        <Link to='/examcitydescription'>
          {properties.map((property, index) => (
            <Card key={index} property={property} />
          ))}
        </Link>
      </div>
    </>
  );
};

export default ExamCityCard;