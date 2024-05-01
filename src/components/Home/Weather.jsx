
import { weather } from '../../constants'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Main = () => {
    return (
        <>
            <main >
                <div className='md:w-10/12  w-5/12 flex ml-4 md:mx-auto items-center mt-8 md:justify-between'>
                    <div className=' text-base md:text-xl gap-5 flex '>
                        <button>Today</button>
                        <button>Weekly</button>
                    </div>
                    <div className='hidden md:flex'>
                        <GoArrowLeft className='border rounded-xl mx-1 text-2xl text-white bg-color ' />

                        <GoArrowRight className='border rounded-xl mx-1 text-2xl text-white bg-color' />
                    </div>
                </div>

                <div className='md:flex md:flex-row grid grid-cols-2 justify-items-center content-center sm:items-center w-12/12 sm:pl-28 sm:ml-2  sm:justify-end gap-4'>
                    <div className="flex flex-col mt-2  border-1 bg-purple-700 rounded-xl px-4  py-3 gap-4 md:w-2/12 w-9/12">

                        <img src="public/assets/icons/Day/few clouds.png" alt="" className="sm:w-32 w-28 mx-auto" />
                        <div className='flex sm:gap-2 gap-0.5 w-12/12 justify-center'>
                            <h6 className=" sm:text-base text-sm text-white bg-purple-900 text-center rounded-lg mt-1 sm:rounded-xl sm:px-2 px-1">SUN
                            </h6>
                            <h6 className=" sm:text-base text-sm text-white bg-purple-900 text-center rounded-lg mt-1 sm:rounded-xl px-1">4:00
                            </h6>

                        </div>

                        <p className=" text-center text-white"> <span className='sm:text-3xl text-xl'>23°</span> <span className='text-sm sm:text-base'>30°</span></p>
                    </div>

                    {weather.map(item => (
                        <div key={item.id} className="flex mt-2 flex-col border-1 bg-gray-100 rounded-xl px-4  py-3 gap-4 md:w-2/12 w-9/12">

                            <img src={item.img} alt="" className="sm:w-32 w-28 mx-auto" />
                            <div className='flex sm:gap-2 gap-0.5 w-12/12 justify-center '>
                                <h6 className=" sm:text-base text-sm text-white bg-purple-900 text-center rounded-lg mt-1 sm:rounded-xl sm:px-2 px-1">{item.weather}
                                </h6>
                                <h6 className=" sm:text-base text-sm text-white bg-purple-900 text-center rounded-lg mt-1 sm:rounded-xl px-1  ">{item.time}
                                </h6>

                            </div>
                            <p className=" text-center "> <span className='text-purple-900 sm:text-3xl text-xl'>{item.tem}</span> <span className='text-gray-600 text-sm sm:text-base'>{item.tem2}</span></p>



                        </div>
                    ))}

                </div>



            </main>

        </>
    )
}

export default Main