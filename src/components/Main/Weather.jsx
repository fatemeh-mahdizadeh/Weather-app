import { weather } from '../../constants'

const Main = () => {
    return (
        <>
            <main>
                <div className='md:w-3/12 w-5/12 flex items-center justify-center text-xl gap-5 mt-8'>
                    <button>Today</button>
                    <button>Weekly</button>
                </div>
                <div className='md:flex md:flex-row grid grid-cols-2 items-center  w-12/12 pl-28 ml-2 justify-end gap-4'>
                    <div className="flex flex-col mt-2  border-1 bg-purple-700 rounded-xl px-4  py-3 gap-4 md:w-2/12 w-10/12">

                        <img src=" /assets/icons/Day/few clouds.png" alt="" className="w-32 mx-auto" />
                        <div className='flex gap-2 w-12/12 justify-center'>
                            <h6 className=" text-base text-white bg-purple-900 text-center rounded-xl px-2">SUN
                            </h6>
                            <h6 className=" text-base text-white bg-purple-900 text-center rounded-xl px-1">4:00
                            </h6>

                        </div>

                        <p className=" text-center text-white"> <span className='text-3xl'>23°</span> <span>30°</span></p>
                    </div>

                    {weather.map(item => (
                        <div key={item.tem} className="flex mt-2 flex-col border-1 bg-gray-100 rounded-xl px-4  py-3 gap-4 md:w-2/12 w-10/12">

                            <img src={item.img} alt="" className="w-32 mx-auto" />
                            <div className='flex gap-2 w-12/12 justify-center '>
                                <h6 className=" text-base text-white bg-purple-900 text-center rounded-xl px-2">{item.weather}
                                </h6>
                                <h6 className=" text-base text-white bg-purple-900 text-center rounded-xl px-1  ">{item.time}
                                </h6>

                            </div>
                            <p className=" text-center "> <span className='text-purple-900 text-3xl'>{item.tem}</span> <span className='text-gray-600'>{item.tem2}</span></p>



                        </div>
                    ))}

                </div>



            </main>

        </>
    )
}

export default Main