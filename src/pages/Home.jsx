
import CityInfo from '../components/Home/CityInfo'
import ToDay from '../components/Home/ToDay'
import Rain from '../components/Home/Rain'
import Main from '../components/Home/Weather'
import { useEffect } from 'react'
import { getWeatherCityId } from '../services/getWeatherCityId'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const Home = () => {
const [searchParams] = useSearchParams();

  const [cityInfo, setCityInfo] = useState()
  const id =  searchParams.get('cityId')

  useEffect(() => {
    if (id) {
      const Data = async () => {
        const data = await getWeatherCityId(id);
        
        setCityInfo(data.data)
        console.log(data.data);
      }
      Data()
    }


  }, [id])

  if (!id) {
    return <h2 className='text-center text-6xl text-red-500 mt-10'>No Result</h2>
  }



  return (
    <div>
      <div className="bg w-12/12 rounded-2xl ">
        <section className="flex flex-col sm:flex-row items-center sm:justify-between md:w-10/12 w-12/12 px-4 sm:mx-auto">
          <div className="sm:mt-20 mt-10">
            <CityInfo name={cityInfo?.name}/>
            <Rain  wind={cityInfo?.wind.speed}  />
          </div>
          <ToDay temp={cityInfo?.main.temp} tempMax={cityInfo?.main.temp_max} tempMin={cityInfo?.main.temp_max} />
        </section >

      </div >
      <Main />
    </div>
  )
}

export default Home