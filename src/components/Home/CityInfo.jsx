import { day, dayOfWeek, horse, minutes, month } from "../../constants"

const CityInfo = ({ name }) => {
    return (
        <>
            <h1 className="md:text-6xl text-3xl sm:text-white text-black text-center sm:text-left">{name}</h1>
            <div className=" sm:text-white-200 flex flex-row justify-between w-12/12 text-sm sm:text-base  my-8 gap-2">
                <p >{dayOfWeek},{month} {day}</p>
                <p>Update As Of {horse}:{minutes} PM</p>
            </div>
        </>
    )
}

export default CityInfo