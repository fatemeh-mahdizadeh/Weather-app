import { BsCloudRain } from 'react-icons/bs'
import { TbWind } from 'react-icons/tb'

const Rain = () => {
    return (
        <>
            <div className=" w-11/12  text-gray-600 my-1 mb-24 bg-white rounded-2xl text-md">
                <div className='grid grid-cols-2 grid-row-2 py-5 gap-x-1 gap-y-4  items-center'>
                    <div className="flex flex-row ml-4 ">
                        <p className="md:mr-4 mr-2"><TbWind className="bg-color text-white text-3xl rounded-md" /></p>
                        <p className='text-sm md:text-base'>Wind 3km/h</p>
                    </div>
                    <div className="flex flex-row  ">
                        <p className="md:mr-4 mr-2"><TbWind className="bg-color text-white text-3xl rounded-md" /></p>
                        <p className='text-sm md:text-base'>Wind 3km/h</p>
                    </div>
                    <div className="flex flex-row ml-4 ">
                        <p className="md:mr-4 mr-2"><BsCloudRain className="bg-color text-white text-3xl rounded-md" /></p>
                        <p className='text-sm md:text-base'>Rain 78%</p>
                    </div>
                    <div className="flex flex-row  ">
                        <p className="md:mr-4 mr-2"><BsCloudRain className="bg-color text-white text-3xl rounded-md" /></p>
                        <p className='text-sm md:text-base'>Rain 78%</p>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Rain