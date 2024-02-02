
import {Calendar, momentLocalizer} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";
import { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "../herosection/hero.css";
import { Link } from "react-router-dom";
import "./index.css";
const localizer = momentLocalizer(moment);
const events = [
  {
    title: 'Event 1',
    start: new Date(2024, 1, 15, 10, 0),
    end: new Date(2024, 1, 15, 12, 0),
  },
];
const navigation = [
  {
    name: "Contact Us",
    href: "#",
    current: false,
    style: { fontSize: "70px" },
  },
  { name: "Team", href: "#", current: false, style: { fontSize: "70px" } },
  { name: "Projects", href: "#", current: false, style: { fontSize: "70px" } },
  //{ name: "Calendar", href: "#", current: false, style: { fontSize: "70px" } },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  function handleNotificationClick(
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    throw new Error("Function not implemented.");
  }
  const [isvisible, setIsvisible] = useState(false);
  function handleBellIconHover() {
    //alert('Bell Icon Hovered!');
    setIsvisible(true);
  }
  const [ismodalvisible, setIsmodalvisible] = useState(false);
  const openModal = () => {
    setIsmodalvisible(true);
  };

  const closeModal = () => {
    setIsmodalvisible(false);
  };

  const [symbol, setSymbol] = useState<boolean>(false);

  const setSymbolTo = (num: number): void => {
    console.log(num)
    setSymbol(num === 1);
  };

  return (
    <Disclosure as="nav" className="nav-width pr-10">
      {(open: any) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-0">
            <div className="relative flex h-20 items-center justi-2 fy-between">
             
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <div onClick={() => setSymbolTo(symbol ? 0 : 1)}>
                  {open ? (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true"/>
                  ) : ( 
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true"/>
                  )}
                  </div>
                </Disclosure.Button>
              </div>
                  <Link to={"/"}>
                    <img
                      className="h-11 logo"
                      src={"/images/logo.png"}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-8 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-5 py-3 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    {/* Calendar button */}
                    <button
                      onClick={openModal}
                      className={classNames(
                        "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-5 py-3 text-sm font-medium"
                      )}
                    >
                      Calendar
                    </button>
                    <div
                      className={`fixed inset-0 z-50 flex items-center justify-center ${
                        ismodalvisible ? "" : "hidden"
                      }`}
                    >
                      <div className="absolute inset-0 bg-black opacity-50"></div>
                      <div className="bg-white p-8 rounded-lg z-10">
                        <div>
                          <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500, width: 800 }}
                          />
                        </div>
                        <button
                          className="mt-4 px-4 py-2 bg-[#142d55] text-white rounded hover:bg-[#40BAD4]"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="group">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onMouseOver={handleBellIconHover}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-7 w-7" aria-hidden="true" />
                    {/* Pop-up notification */}
                    <div
                      className={`absolute z-10 w-[400px] ${
                        isvisible ? "block" : "hidden"
                      } bg-[#c0ccdc] border-t-4 border-[#c0ccdc] rounded-b text-[#142d55] px-4 py-3 shadow-md transition-transform duration-300 ease-in-out transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 right-12 -top-4`}
                      role="alert"
                      onClick={handleNotificationClick}
                    >
                      <div className="flex">
                        <div className="py-1">
                          <svg
                            className="fill-current h-6 w-6 text-[#142d55] mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">
                            Our privacy policy has changed
                          </p>
                          <p className="text-sm">
                            Make sure you know how these changes affect you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                <Link to={"/Login"}>
                  <button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">  
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                  </Link>
                </div>
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {(active: any) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {(active: any) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {(active: any) => (
                        <Link to={"/Login"}>
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Login
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition> */}
              </Menu>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
