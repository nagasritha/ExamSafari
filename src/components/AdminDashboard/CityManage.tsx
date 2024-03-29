import { useState } from 'react';

const CityManage = () => {
  // Define your services data
  const [City] = useState([
    { id: 1, name: 'allahabad', imageUrl: '/images/allahabad.png' },
    { id: 2, name: 'kanpur', imageUrl: '/images/kanpur.png' },
    { id: 3, name: 'lucknow', imageUrl: '/images/lucknow.png' },
  ]);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-xl">City List</div>
      <div>
        <hr />
      </div>
      <div>
        <label
          htmlFor="inputname"
          className="block text-gray-800 font-semibold text-sm"
        >
          Search City
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="inputname"
            className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          />
        </div>
      </div>
      <div className="pt-2">
        <hr />
      </div>

      <div className="services-list  flex gap-6  justify-center flex-wrap">
        {City.map((city) => (
          <div key={city.id} className="flex flex-col md:w-2/5 w-full gap-1 p-2 rounded-md shadow-md">
            <div>
              <img src={city.imageUrl} alt={city.name} />
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-lg md:text-base">{city.name}</div>
              <button className="bg-gray-300 py-1 md:px-3 px-8 rounded-lg md:text-xs text-sm font-semibold">edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityManage;
