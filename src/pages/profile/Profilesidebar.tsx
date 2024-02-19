import { Link } from "react-router-dom";
import React from 'react'
import { CiLogout } from "react-icons/ci";
interface ProfileSidebarProps {
  // className: string;
  // profilePhoto: string | undefined;
  profileData: any;
  editMode: boolean;
  userName: string;
  handleUploadPhoto: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditProfile: () => void;
  handleSaveProfile: () => void;
  handleDashboard: () => void;
  handleLogout: () => void;
}
const Profilesidebar: React.FC<ProfileSidebarProps> = ({
  // profilePhoto,
  profileData,
  editMode,
  userName,
  handleUploadPhoto,
  handleFileChange,
  handleInputChange,
  //handleEditProfile,
  handleDashboard,
  handleSaveProfile,
  handleLogout,
}) => {


  const renderProfileDetails = () => {
    return (
      <div className="mt-8 text-center">
        <img
          src={profileData.profilePhoto}
          alt="Profile"
          className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        />
        <div className="mt-2">
          <button
            className="inline-block bg-[#142d55] rounded-xl px-5 py-3 text-sm font-semibold text-white"
            onClick={handleUploadPhoto}
          >
            <label
              htmlFor="uploadPhoto"
              className="cursor-pointer text-bold-white-500 "
            >
              Upload
            </label>
            <input
              type="file"
              id="uploadPhoto"
              name="uploadPhoto"
              className="hidden"
              onChange={handleFileChange}
            />
          </button>
        </div>

        <div className="mt-2">
          {editMode ? renderEditMode() : renderDisplayMode()}
        </div>
      </div>
    );
  };

  const renderEditMode = () => (
    <>
      <label
        htmlFor="userName"
        className="block text-sm font-medium text-bold-black-600"
      ></label>
      <input
        type="text"
        id="userName"
        name="userName"
        className="mt-1 p-2 border border-gray-300 rounded-xl w-full"
        placeholder="Your Name"
        value={userName}
        onChange={handleInputChange}
      />

      <div className="mt-2">
        <button
          className="inline-block bg-[#142d55] rounded-xl px-5 py-3 text-sm font-semibold text-white"
          onClick={handleSaveProfile}
        >
          Save
        </button>
      </div>
    </>
  );

  const renderDisplayMode = () => (
    <>
      <span className="block text-sm font-medium text-black-600">
        {profileData.className}
      </span>
      {/* <div className="mt-2">
        <Link to="/edit-profile">
          <button
            className="inline-block bg-[#142d55] rounded-xl px-5 py-3 text-sm font-semibold text-white"
          // onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </Link>
      </div> */}
    </>
  );

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <a href="#" title="home">
            <img
              src="images\logo.png"
              className="w-100"
              alt="tailus logo"
            />
          </a>
        </div>

        {renderProfileDetails()}

        <ul className="space-y-2 tracking-wide mt-3">
          <li>
            <Link to='/profile'
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-500 hover:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  className="fill-current text-cyan-400 dark:fill-slate-600"
                ></path>
                <path
                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  className="fill-current text-gray-400 group-hover:text-cyan-300"
                ></path>
                <path
                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  className="fill-current group-hover:text-sky-300"
                ></path>
              </svg>
                <span className="-mr-1 font-medium" onClick={handleDashboard}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/edit-profile"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group rounded-xl hover:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>

                <span className="group-hover:text-gray-700">Profile Updated</span>
            </Link>
          </li>
          <li>
            <Link to="/history"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group rounded-xl hover:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
                <span className="group-hover:text-gray-700">History</span>
            </Link>
          </li>
          <li>
            <Link to='/bookingpage'
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group rounded-xl hover:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
                <span className="group-hover:text-gray-700">Booking Check</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button onClick={handleLogout} className='flex items-center'><CiLogout/>{" "}Logout</button>
      </div>
    </aside>
  );
};

export default Profilesidebar