import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
const LodingLoction = () => {
    return (
        <>
        <div className="text-center p-5 lg:w-full w-12/12  ">
            <div className="flex flex-row gap-2 justify-center">
            <Skeleton className="my-1" height={30} width={30} count={1} />
            <Skeleton className="my-1" height={30} width={110} count={1} />
            <Skeleton className="my-1" height={30} width={30} count={1} />

            </div>
            

        </div>
    </>
    )

}


export default LodingLoction;