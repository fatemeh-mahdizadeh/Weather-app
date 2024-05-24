import { convertKelvinToCelsius, icons } from "../../utils/tools"
const ToDay = ({ temp, tempMin, tempMax,description,icon }) => {
    
    return (
        <>
            <div className="my-2 lg:w-2/12 sm:w-3/12 w-5/12 bg-color rounded-xl">
                <h6 className=" text-sm sm:text-base text-white bg-purple-900 text-center rounded-xl mt-3 ml-2 w-4/12">Today</h6>
                <div className="flex flex-col  items-center  px-5 py-4 w-12/12 gap-5">
                    <img src={icons(icon, description)}alt="" className="sm:w-32 w-28 mx-1 " />
                    <h1 className="text-xl sm:text-3xl text-white text-center"> {convertKelvinToCelsius(temp)}<span className="mb-4">°C</span> </h1>
                    <p className="text-white text-center">{convertKelvinToCelsius(tempMin)}<span>°C</span>&nbsp;&nbsp;&nbsp;&nbsp; {convertKelvinToCelsius(tempMax)} <span>°C</span></p>
                </div>
            </div>
        </>
    )


}

export default ToDay