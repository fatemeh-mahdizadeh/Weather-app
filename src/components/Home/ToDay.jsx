import React from 'react'

const ToDay = () => {
    return (
        <>
            <div className="my-2 w-12/12">
                <div className="flex flex-col border-1 bg-purple-700 rounded-xl px-5 py-4 w-12/12 gap-4">
                    <h6 className=" text-base text-white bg-purple-900 text-center rounded-xl  w-5/12 ">Today</h6>

                    <img src="public/assets/icons/Day/few clouds.png" alt="" className="w-32 mx-1" />
                    <h1 className="text-3xl text-white text-center">23 <span className="mb-4">°C</span> </h1>
                    <p className="text-white text-center">23 <span>°C</span> - 31 <span>°C</span></p>


                </div>
            </div>

        </>
    )
}

export default ToDay