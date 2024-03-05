

const ServicesManage = () => {


  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-xl ">Services List</div>
      <div>
        <hr />
      </div>
      <div>
        <label
          htmlFor="inputname"
          className="block text-gray-800 font-semibold text-sm"
        >
          Search Services
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

      <div className="services-list">
       
      </div>
    </div>
  );
};

export default ServicesManage;







