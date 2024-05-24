
import { useEffect, useState, useRef } from 'react';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useSearchParams } from 'react-router-dom'
import { getWeather5days } from '../../services/getWeather5days';
import { convertKelvinToCelsius, horse, icons } from '../../utils/tools';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Main = () => {
    const [searchParams] = useSearchParams();
    const [daysApi, setDaysApi] = useState();
    const id = searchParams.get('cityId');
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (id) {
            const Data = async () => {
                const data = await getWeather5days(id)
                setDaysApi(data.data.list)
            }
            Data()
        }

    }, [id])

    if (!daysApi) {
        return <h2>no</h2>
    }

    return (
        <>
            <div className='w-10/12   flex mt-8 ml-4 mx-auto items-center justify-between'>
                <div className=' text-base md:text-xl gap-5 flex '>
                    <button >Today</button>
                    <button>Weekly</button>
                </div>
                <div className=' flex'>
                    <button ref={prevRef} ><GoArrowLeft className='border rounded-xl mx-1 text-2xl text-white bg-color  ' /></button>

                    <button ref={nextRef} ><GoArrowRight className='border rounded-xl mx-1 text-2xl text-white bg-color' /></button>
                </div>
            </div>

            <div className=' lg:flex px-2  mx-5  '>
                <Swiper className='mx-auto lg:w-10/12  md:w-11/12'
                    modules={[Navigation, Pagination]}

                    breakpoints={{
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1,

                        },
                        468: {
                            spaceBetween: 10,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 15,
                            slidesPerView: 3,
                        },
                        1024: {
                            spaceBetween: 15,
                            slidesPerView: 4,
                        },
                        1280: {
                            spaceBetween: 30,
                            slidesPerView: 5,
                        },
                    }}

                    spaceBetween={10}
                    pagination={{
                        type: 'fraction',
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}

                >
                    {daysApi?.map((items, index) => (
                        <SwiperSlide key={items.index} className=" md:mx-0 flex items-center h-64 mb-10 mt-10 flex-col border-1 bg-gray-100 rounded-xl px-4 py-3 gap-4 md:w-2/12 w-9/12">
                            <img src={icons(items.weather[0].icon, items.weather[0].description)} alt="" className="sm:w-32 w-28 h-28 mx-auto" />
                            <div className='flex sm:gap-2 gap-0.5 w-12/12 justify-center '>
                                <h6 className=" sm:text-base text-sm text-white bg-purple-900 text-center rounded-lg mt-1 sm:rounded-xl sm:px-2 px-1">{items.weather[0].main}
                                </h6>
                                <h6 className=" sm:text-base text-sm text-white bg-purple-900 text-center rounded-lg mt-1 sm:rounded-xl px-1  ">{horse(items.dt_txt)}
                                </h6>

                            </div>
                            <p className=" text-center "> <span className='text-purple-900 sm:text-3xl text-xl'>{convertKelvinToCelsius(items.main.temp_min)}°C</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className='text-gray-600 text-sm sm:text-base'>{convertKelvinToCelsius(items.main.temp_min)}°C</span></p>


                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    )
}

export default Main





