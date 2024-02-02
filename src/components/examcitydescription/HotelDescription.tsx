
import { FaAngleRight } from "react-icons/fa6";

const HotelDescription = () => {
  return (
    <div>
      <div className="Description border border-gray-300 rounded-lg my-8 bg-white">
        <div>
          <div className="m-8 mb-0 ">
            <div className="text-2xl mb-2 font-semibold">Description</div>
            <div>
              If you wish to experience the best student accommodation in
              London, Arbour House is the one for you! Arbour House is a
              well-known student accommodation in London that offers a wide
              range of en suite rooms and self-contained apartments for you to
              choose from. Popular universities and colleges like the City
              University of London, which is a 4-minute walk away and the
              University of the Arts, which is a 10-minute walk away, make it a
              perfect choice for your new home
            </div>

            <div className="py-4">
              <hr />
            </div>
          </div>

          <div className="Modal-button">
            {/* <!-- Modal toggle --> */}
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className=" text-blue-600 flex items-center gap-1  hover:bg-gray-200  font-medium hover:rounded-md text-sm py-2 px-4 mx-4 my-2 text-center "
              type="button"
            >
              View full description <FaAngleRight />
            </button>

            {/* <!-- Main modal --> */}
            <div
              id="default-modal"
              tabIndex={-1}
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-y-auto">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Description
                    </h3>
                    <button
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
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5 space-y-4">
                    <div className="text-md font-semibold">About</div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </div>
                    <div className="text-md font-semibold">Feature</div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDescription
