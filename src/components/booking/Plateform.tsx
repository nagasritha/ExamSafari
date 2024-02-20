//@ts-nocheck
import {loadStripe} from '@stripe/stripe-js';

const Plateform = () => {
  // payment intergration
  const makePayment =async()=>{
    const stripe = loadStripe("pk_test_51OlIUqSF6rutrfP17T6yFS4T5uI9eh8nnkGjGrESgeFkb4Yoid6WAYJIWalmbupzSgUAtSmQSVFOkgMdbcfQ9M4q00ipNcYpym");

  

    const body = { "hotel prize": 300 };

    const headers = {
      "content-Type":"application/json"
    }
    const response = await fetch("http://localhost:3000/api/create-checkout-session",{
      method:"POST",
      headers: headers,
      body:JSON.stringify(body)
    });
    const session = await response.json();
    
    const result =stripe?.redirectToCheckout({
      sessionId :session.id
    })
    if (result.error){
      console.log(result.error)
    }
  }
  return (
    <div className=" md:w-4/6  w-full  ">
      <div className="upper-div flex justify-between pb-6">
        <div className="text-2xl font-bold">Payment</div>
        <div className="flex gap-2">
          <div className="md:flex hidden">Need help, we are here</div>
          <div className="font-bold underline"> Contact us</div>
        </div>
      </div>

      <div className="payment md:bg-white bg-gray-100 pb-4 mb-2 md:px-8 px-4 rounded-lg ">
        <div className="upper-Portion flex py-4 pl-0 pb-4 px-4 items-center">
          <div className="flex">
            <div className="border border-green-500  rounded-full py-3 ml-0 m-4 px-4 items-center justify-center text-sm font-bold ">
              2
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">Platform Fee</div>
            <div className="text-gray-700 text-sm">
              Congratulations! You’ve made it to the final step. Please pay the
              platform fee to confirm your booking.
            </div>
          </div>
        </div>

        <div className="mb-4">
          <hr />
        </div>

        <div className="main-portion flex justify-between mb-6 ">
          <div className="left">
            <div className="text-sm text-gray-700">Platform Fee</div>
            <div className="text-sm text-gray-700 py-2">
              Payment Gateway Charges
            </div>
            <div className="md:text-xl text-lg font-bold">
              Total Payable Amount
            </div>
          </div>
          <div className="Right">
            <div className="text-sm text-gray-700">£100</div>
            <div className="text-sm text-gray-700 py-2">£3.63</div>
            <div className="md:text-xl text-lg font-bold">£103.63</div>
          </div>
        </div>

        <div className="mb-4">
          <hr />
        </div>

        <div className="text-xs text-gray-700 pb-4 flex gap-1">
          {" "}
          <div className="font-extrabold"> Suggestion:</div> Please make sure
          international payments are enabled on your card for successful payment
          transaction.
        </div>

        <div className="mb-4">
          <hr />
        </div>

        <div className="text-xs text-gray-700 pb-4 flex  ">
          {" "}
          <div className="font-extrabold w-64"> Terms & Conditions:</div> By
          continuing, you accept all the Terms and Conditions and authorize
          amberstudent.com to confirm your acceptance with the property. Your
          booking is not completed until you receive confirmation from the
          property.
        </div>

        <div className="mb-4">
          <hr />
        </div>

        <div className="Next-button">
          <button
            type="button"
            onClick={makePayment}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-10 py-2  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plateform;
