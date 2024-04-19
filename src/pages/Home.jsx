import CityInfo from '../components/Home/CityInfo'
import ToDay from '../components/Home/ToDay'
import Rain from '../components/Home/Rain'
import Main from '../components/Main/Weather'


const Home = () => {
  return (
    <>
      <div className="bg w-12/12 rounded-2xl ">
        <section className="flex  items-center justify-between md:w-10/12 w-11/12 mx-auto  ">
          <div className=" mt-20  ">
            <CityInfo />


            <Rain />


          </div>
          <ToDay />
        </section >

      </div >
      <Main/>
    </>
  )
}

export default Home