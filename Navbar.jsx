import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
   

   <nav className="bg-[#2C3E50] z-107 fixed top-0 right-0 left-0 py-2 ps-3">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="text-white text-2xl font-bold">START FRAMEWORK</span>
    </NavLink>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="font-medium flex flex-col md:flex-row ">
       {/*   <li>
         <NavLink to="#" className="block py-2 px-3 text-white  md:dark:text-blue-500" aria-current="page">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="about" className="block py-2 px-3 text-white mx-3 md:dark:hover:bg-transparent">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block py-2 px-3  text-white mx-3">portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className="block py-2 px-3   text-white mx-3 ">contact</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

{/* 
<nav className="bg-[#2C3E50] z-107 fixed top-0 right-0 left-0 py-6 ps-3">
  <div className="container mx-auto flex flex-wrap items-center justify-between ">
    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="text-white text-2xl font-bold">START FRAMEWORK</span>
    </NavLink>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col md:flex-row ">
        <li>
          {/* <NavLink to="#" className="block py-2 px-3 text-white  md:dark:text-blue-500" aria-current="page">Home</NavLink> */}
       {/* {* </li>
        <li>
          <NavLink to="about" className="block py-2 px-3 text-white mx-3 md:dark:hover:bg-transparent">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block py-2 px-3  text-white mx-3">portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className="block py-2 px-3   text-white mx-3 ">contact</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav> */} 

        </>
    )
}

export default Navbar
