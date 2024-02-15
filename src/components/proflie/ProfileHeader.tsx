import { Link } from "react-router-dom"

const ProfileHeader = () => {
  return (
    <div className="h-16 bg-blue-50  flex items-center ">
        <div className="w-1/5">
      <div className="logo-2  ">
      <Link to={"/"}>
                    <img
                      className="w-36 mx-12 h-auto "
                      src={"/images/logo.png"}
                      alt="Your Company"
                    />
                  </Link>
      </div>
      </div>
      

      <div className="w-4/5 flex justify-between items-center px-2">
       <div className="font-semibold text-xl">Dashboard</div>
      <div>
        <div className="Search-bar w-72 ">
        <div>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default ProfileHeader
