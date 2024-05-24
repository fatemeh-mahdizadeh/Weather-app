import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
function SkeletWeather() {
    return (
        <>
            <div className="xl:flex hidden flex-row w-10/12 md:justify-center mx-auto mt-24 gap-6 ">
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />

            </div>
            <div className="lg:flex hidden xl:hidden flex-row w-10/12 md:justify-center mx-auto mt-24 gap-6 ">
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={220} count={1} />


            </div>
            <div className="md:flex hidden lg:hidden flex-row w-10/12 md:justify-center mx-auto mt-24 gap-6 ">
                <Skeleton className=" rounded-xl" height={240} width={230} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={230} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={230} count={1} />
            </div>
            <div className="sm:flex hidden md:hidden flex-row w-12/12 sm:justify-center mx-auto mt-24 gap-6 ">
                <Skeleton className=" rounded-xl" height={240} width={230} count={1} />
                <Skeleton className=" rounded-xl" height={240} width={230} count={1} />
                
            </div>
            <div className="flex sm:hidden flex-row w-12/12 justify-center mx-auto mt-24 gap-6 ">
                <Skeleton className=" rounded-xl" height={240} width={230} count={1} />
                
                
            </div>
        </>


    );
}

export default SkeletWeather;