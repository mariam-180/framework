import React from 'react'
import person from './../../assets/images/person.svg'
const Home = () => {
    return (
        <>
            <div className='bg-[#1ABC9C] min-h-screen py-10'> 
                <div className="container mx-auto pt-10 ">
                    <div>
                        <img src={person} alt="" className='w-[65%] md:w-[30%] py-10 mx-auto' />

                    </div>
                    <div>
                        <h1 className='text-white text-3xl font-bold  mt-3 text-center'>START FRAMEWORK</h1>
                    </div>
                    <div className='flex items-center justify-center py-6'>
                        <hr className='bg-white p-0.5 w-1/12 border-0'/>
                        <i class="fa-solid fa-star text-[15px] text-white mx-3"></i>
                        <hr className='bg-white p-0.5 w-1/12 border-0'/>
                    </div>
                    <div className='text-white text-center'>
                        <h6>Graphic Artist - Web Designer - Illustrator</h6>
                    </div>
                </div>
            </div>
           

        </>
    )
}

export default Home
