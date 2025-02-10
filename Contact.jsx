
const Contact = () => {
  return (
    <>
      <div className="min-h-screen flex items-center">
        
        <div className="container py-10 mx-auto">
        <h1 className="text-[#2C3E50] pt-10 text-3xl text-center font-bold">start component</h1>
                <div className='flex items-center justify-center py-3'>
                        <hr className='bg-[#2C3E50] p-0.5 w-2/12 border-0'/>
                        <i class="fa-solid fa-star text-[15px] text-[#2C3E50] mx-3"></i>
                        <hr className='bg-[#2C3E50] p-0.5 w-2/12 border-0'/>
                    </div>
        <form  className="w-[80%] mx-auto md:w[100%]">
            {/* name input */}
            {/* any input if you put in it "value " it will be only for read only */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="text"    id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 green-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            {/* email input */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="text"   id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 green-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            {/* Password input */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="password"   id="password1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 green-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            {/*re-Password input */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="password"  id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 green-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Re-Password</label>
            </div>
            {/* phone input */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="tel"   id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
              <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 green-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
               </div>

               <button type="submit" className="focus:outline-none text-white bg-[#1ABC9C] hover:bg-[#497d73] focus:ring-4 focus:ring-[#315e55] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">send message</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
