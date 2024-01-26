

const Accordion = () => {
  return (
    <div className='w-full'>
      <div className="accordion bg-white border border-gray-300 rounded-lg px-6 mb-8 w-full">
        <div className="m-4 ml-0 text-xl font-semibold">
          Frequently Asked Questions ?
        </div>

        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>Can i apply for dual occupancy</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dual occupancy is available on most rooms over 23sqm. Both
                occupants would need to apply and mention in their application
                that they are applying for dual occupancy so that the price can
                be amended. The price would be the total rent plus an additional
                £50 and then divided by two for each occupant’s weekly cost
                unless otherwise stated..
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Do i have to pay booking fee ?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The property management does not charge a booking fee. When you
                accept your room offer, you’ll be asked to pay a deposit to
                secure your room which is secured with a deposit protection
                service and refunded at the end of your tenancy.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>What if i want to cancel my booking ?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can cancel your tenancy agreement for up to 14 days after
                the date of your booking (the Initial Cancellation Period). For
                bookings made from 1st August to 30th September ahead of the
                academic year the booking is for, the Initial Cancellation
                Period reduces to 7 days. They will refund the full security
                deposit. Please note, £20 will be deducted from the refunded
                amount to cover any international bank charges for deposit
                refunds made to non-UK banks. If you cancel your booking after
                the Initial Cancellation Period, you remain liable for the
                weekly rent (for each and every week or part week) until you are
                able to find another tenant that is acceptable to management and
                they are able to re-let the room. The replacement tenant must be
                over the age of 18 and have the necessary student status (it is
                your responsibility to find another tenant and provide them with
                the correction information). If you find a suitable replacement
                tenant and the room is re-let they will refund your deposit,
                less any appropriate charges, as well as a deduction of £50 for
                the variation of the contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
