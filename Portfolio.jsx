import house from "./../../assets/images/poert1.png"
 import cake from "./../../assets/images/port2.png"
 import serk from "./../../assets/images/port3.png"

const Portfolio = () => {
    return (
        <>
            <div className="py-10 min-h-screen flex items-center">
                <div className="container mx-auto pt-10">
                    <h1 className="text-[#2C3E50] pt-10 text-3xl text-center font-bold">start component</h1>
                <div className='flex items-center justify-center py-3'>
                        <hr className='bg-[#2C3E50] p-0.5 w-2/12 border-0'/>
                        <i class="fa-solid fa-star text-[15px] text-[#2C3E50] mx-3"></i>
                        <hr className='bg-[#2C3E50] p-0.5 w-2/12 border-0'/>
                    </div>
                <div className="flex flex-col lg:flex-row pt-10">
                        <div className=" mx-6">
<img src={house} alt="" className="w-full rounded-[10px]" />
                        </div>
                        <div className=" mx-6 md:my-0 my-7">
                        <img src={cake} alt="" className="w-full rounded-[10px]" />
                        </div>
                        <div className=" mx-6">
                        <img src={serk} alt="" className="w-full rounded-[10px]" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row pt-10">
                        <div className=" mx-6">
<img src={house} alt="" className="w-full rounded-[10px]" />
                        </div>
                        <div className=" mx-6 md:my-0 my-7">
                        <img src={cake} alt="" className="w-full rounded-[10px] " />
                        </div>
                        <div className=" mx-6">
                        <img src={serk} alt="" className="w-full rounded-[10px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
