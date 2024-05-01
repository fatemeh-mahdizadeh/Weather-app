
import CityInfo from '../components/Home/CityInfo'
import ToDay from '../components/Home/ToDay'
import Rain from '../components/Home/Rain'
import Main from '../components/Home/Weather'



const Home = () => {
  return (
    <>
      <div className="bg w-12/12 rounded-2xl ">
        <section className="flex flex-col sm:flex-row items-center sm:justify-between md:w-10/12 w-12/12 px-4 sm:mx-auto">
          <div className="sm:mt-20 mt-10">
            <CityInfo />


            <Rain />


          </div>
          <ToDay />
        </section >

      </div >
      <Main />
    </>
  )
}

export default Home