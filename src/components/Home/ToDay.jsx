const ToDay = () => {
    return (
        <>
            <div className="my-2 w-2/12">
                <div className="flex flex-col  bg-color rounded-xl px-5 py-4 w-12/12 gap-4">
                    <h6 className=" text-sm sm:text-base text-white bg-purple-900 text-center rounded-xl w-5/12">Today</h6>

                    <img src="public/assets/icons/Day/few clouds.png" alt="" className="sm:w-32 w-28 mx-1" />
                    <h1 className="text-xl sm:text-3xl text-white text-center">23 <span className="mb-4">°C</span> </h1>
                    <p className="text-white text-center">23 <span>°C</span> - 31 <span>°C</span></p>


                </div>
            </div>

        </>
    )
}

export default ToDay