import React from 'react'

const Footer = () => {
  return (
    <>
<div className='bg-[#2C3E50] py-10 flex flex-col items-center justify-center '>
                <div className="container   ">
               
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='text-center md:w-3/4 text-white my-10' >
                        <h2 className='text-white text-3xl font-bold '>location</h2>
                        <h5 className='my-2 '>2215 John Daniel Drive</h5>
                        <h5 className='my-1'>Clark, MO 65243</h5>
                    </div>
                    <div className='text-center text-white  md:w-3/4 my-10'>
                        <h2 className='text-white text-2xl font-bold mb-5 '>AROUND THE WEB</h2>
                        <ul className='flex justify-center '>
                            <li>
                                <i className="fa-brands fa-facebook-f text-[13px] border-2 p-3 px-4 rounded-full mx-2"></i>

                            </li>
                            <li>
                                <i className="fa-brands fa-facebook-f text-[13px]  border-2 p-3 px-4 rounded-full mx-2"></i>

                            </li>
                            <li>
                                <i className="fa-brands fa-facebook-f text-[13px]  border-2 p-3 px-4 rounded-full mx-2"></i>

                            </li>
                            <li>
                                <i className="fa-brands fa-facebook-f text-[13px]  border-2 p-3 px-4 rounded-full mx-2"></i>

                            </li>
                        </ul>
                    </div>
                    <div className='text-center  text-white  md:w-3/4 my-10' >
                        <h2 className='text-white text-2xl font-bold mt-10 md:w-1/2 mx-auto'>ABOUT FREELANCER</h2>
                        <h5 className='my-3 w-1/2 mx-auto '>Freelance is a free to use, licensed Bootstrap theme created by Route</h5>                 
                           </div>
                    </div>

                </div>

            </div>
            <div className=' bg-[#1A252F]'>
        <div className="container mx-auto">
<h6 className='text-white py-6 text-center'>Copyright © Your Website 2021</h6>
</div>
</div>
        
    </>
  )
}

export default Footer
