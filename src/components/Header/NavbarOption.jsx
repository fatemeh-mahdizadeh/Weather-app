import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { getWeatherCity } from "../../services/getWeatherCity";
import LodingLoction from "../../services/skeleton";
import { useSearchParams } from "react-router-dom";
import { convertKelvinToCelsius } from "../../utils/tools";




const NavbarOption = () => {
  
  const [cityName, setCityName] = useState('');
  const [loction, setLotion] = useState({
    city: {},
    lodingLoc: true
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleCityItem = () => {
    searchParams.set('cityId', loction.city.id);
    setSearchParams(searchParams)
  }
  const handelValue = (e) => {
    const value = e.target.value;
    setCityName(value);
  }

  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    if (cityName.length > 0) {
      const fetchData = async () => {
        const data = await getWeatherCity(cityName, signal);
        setLotion({ lodingLoc: false, city: data.data })
      }
      fetchData();

    } else {
      setLotion({ lodingLoc: true })
    }

    return () => {

      controller.abort();
    }
  }, [cityName])

  return (
    <>
      <div className="absolute sm:w-4/12 w-5/12 md:w-3/12 lg:w-3/12 xl:w-2/12  bg-white mt-32 right-0 mr-5 rounded-md">

        {cityName.length > 0 &&
          <div>
            {loction.lodingLoc ? <LodingLoction /> : (
              <div onClick={handleCityItem} className="h-10 items-center flex mx-2 gap-4 md:gap-0 md:justify-between px-4 text-lg cursor-pointer">

                < div>{loction.city.sys.country}</ div>
                < div>{loction.city.name}</ div>
                <div> {convertKelvinToCelsius((loction.city.main.temp))}°C</div>
              </div>
            )}
          </div>
        }


      </div>
      <div className="flex items-center sm:gap-2">

        <button>
          <div>
            <MdDarkMode className="text-purple text-xl" />

          </div>
        </button>
        <div className=" flex items-center text-base py-1 px-1">
          <FaLocationDot className="text-xl text-purple" />

          <div>
            <input
              className="lg:w-[140px] w-4/12 sm:w-[120px] focus:border-none focus:outline-none focus:ring-0 shadow-"
              type="text"
              placeholder="Location"
              onChange={handelValue}
            />

          </div>



        </div>
      </div>

    </>
  );
};

export default NavbarOption;
