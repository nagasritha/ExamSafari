

const ServicesAdd = () => {
  return (
    <div className="px-10">

     <div className="text-xl font-semibold pb-4 text-blue-700 ">Add Services</div>

      <form action="">
      <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Service</label>
       <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>

    
<div className =" mx-auto">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription for Services</label>
  <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</div>


<div className=" mx-auto py-4">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Picture use for Service</label>
  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>  
</div>


      </form>
    </div>
  )
}

export default ServicesAdd
