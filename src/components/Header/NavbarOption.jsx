import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { getWeatherCity } from "../../services/getWeatherCity";

const NavbarOption = () => {
  const [cityName, setCityName] = useState('');
  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    if (cityName.length > 0) {
      const fetchData = async () => {
        const data = await getWeatherCity(cityName, signal);
        console.log(data);
      }
      fetchData();
    }

    return () => {
      controller.abort();
    }
  }, [cityName])

  return (
    <div className="flex items-center sm:gap-2">
      <button>
        <MdDarkMode className="text-purple text-xl" />
      </button>
      <div className=" flex items-center text-base py-1 px-1">
        <FaLocationDot className="text-xl text-purple" />

        <input
          className="lg:w-[140px] w-4/12 sm:w-[120px] focus:border-none focus:outline-none focus:ring-0 shadow-"
          type="text"
          placeholder="Location"
          onChange={(e) => {
            const value = e.target.value;
            setCityName(value);
          }}
        />
      </div>
    </div>
  );
};

export default NavbarOption;
