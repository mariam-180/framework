import React from 'react'

const About = () => {
  return (
    <>
      <div className='min-h-screen bg-[#1ABC9C] flex justify-center items-center'>
        <div className="container mx-auto mt-24">
          <div className='flex items-center'>
            <div className='mx-auto'>
              <h1 className='text-white text-[2.5rem] font-bold my-2 text-center'>ABOUT COMPONENT</h1>
              <div className='flex items-center justify-center mb-5'>
                <hr className='bg-white p-0.5 w-1/12 border-0' />
                <i class="fa-solid fa-star text-[15px] text-white mx-3"></i>
                <hr className='bg-white p-0.5 w-1/12 border-0' />
              </div>
              <div className='flex flex-col justify-between text-white  w-[70%]   md:w-[90%] md:flex-row mx-auto'>
                <div >
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as
                  <br />
                  optional SASS stylesheets for easy customization.
                </div>
                <br />
                <div className='mx-9' >
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as
                  <br />
                  optional SASS stylesheets for easy customization.
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
