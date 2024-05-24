import { BsCloudRain } from 'react-icons/bs'
import { TbWind } from 'react-icons/tb'
import { percent } from '../../utils/tools'

const Rain = ({ rain, wind }) => {
    return (
        <>
            <div className=" w-12/12  text-gray-600 my-1 mb-24 sm:bg-white bg-gray-100 px-4 sm:px-0 rounded-2xl text-md">
                <div className='grid grid-cols-2 grid-row-2 py-5 gap-x-1 gap-y-4  items-center'>
                    <div className="flex flex-row sm:ml-4 ">
                        <p className="md:mr-4 mr-2"><TbWind className="bg-color text-white text-2xl rounded-md" /></p>
                        <p className='text-xs md:text-base'>Wind {percent(wind)}km/h</p>
                    </div>
                    <div className="flex flex-row  ">
                        <p className="md:mr-4 mr-2"><TbWind className="bg-color text-white text-2xl rounded-md" /></p>
                        <p className='text-xs md:text-base'>Wind {(percent(wind))}km/h</p>
                    </div>
                    <div className="flex flex-row sm:ml-4 ">
                        <p className="md:mr-4 mr-2"><BsCloudRain className="bg-color text-white text-2xl rounded-md" /></p>
                        <p className='text-xs md:text-base'>Rain {percent(rain)}%</p>
                    </div>
                    <div className="flex flex-row  ">
                        <p className="md:mr-4 mr-2"><BsCloudRain className="bg-color text-white text-2xl rounded-md" /></p>
                        <p className='text-xs md:text-base'>Rain {percent(rain)}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rain