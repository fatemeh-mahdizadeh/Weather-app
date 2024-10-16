
import CityInfo from '../components/Home/CityInfo'
import ToDay from '../components/Home/ToDay'
import Rain from '../components/Home/Rain'
import Main from '../components/Home/Weather'
import { useEffect } from 'react'
import { getWeatherCityId } from '../services/getWeatherCityId'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
// import useLocalStorage from '../hooks/localStorage'
const Home = () => {

  // const [value, setValue, removeItem] = useLocalStorage('test', {
  //   name: 'fatemeh',
  //   age: 50
  // });

  const [searchParams] = useSearchParams();

  const [cityInfo, setCityInfo] = useState()
  const id = searchParams.get('cityId')

  useEffect(() => {
    if (id) {
      const Data = async () => {
        const data = await getWeatherCityId(id);

        setCityInfo(data.data)

      }
      Data()
    }
  }, [id])

  // const handleRemoveItem = () => {
  //   removeItem()
  // }

  if (!id) {
    return <h2 className='text-center text-6xl text-red-500 mt-10'>Enter Your City Name</h2>
  }
  return (
    <div>
      
      <div className="bg w-12/12 rounded-2xl ">
        <section className="flex flex-col sm:flex-row items-center sm:justify-between md:w-10/12 w-12/12 px-4 sm:mx-auto">
          <div className="sm:mt-20 mt-10">
            <CityInfo name={cityInfo?.name} />
            <Rain wind={cityInfo?.wind.speed} />
          </div>
          {cityInfo && (
            <ToDay temp={cityInfo?.main.temp} tempMax={cityInfo?.main.temp_max} tempMin={cityInfo?.main.temp_max} description={cityInfo?.weather[0].description} icon={cityInfo?.weather[0].icon} />


          )}
        </section >

      </div >
      <Main />
    </div>
  )
}

export default Home