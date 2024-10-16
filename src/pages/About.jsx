

const About = () => {
  return (
    <main className="md:w-11/12 w-12/12 md:px-16 mt-4 sm:h-[650px] h-[900px] flex flex-row  mx-auto bg-purple-200 rounded-lg">
      <div className="lg:w-10/12 12/12 flex flex-col sm:flex-row mx-auto my-10 h-[555px]">

        <div className="rounded-2xl flex flex-col sm:w-6/12 w-12/12 bg-white mx-3 py-4 sm:py-0">
          <p className="text-xl sm:ml-8 ml-4 sm:mt-8 text-purple">how it started</p>
          <p className="xl:text-5xl md:text-2xl lg:text-4xl mt-8 w-12/12 sm:w-10/12 mx-4 sm:ml-8">Showing the weather of all the cities of the world</p>
          <p className="w-12/12 mt-6 sm:mt-16 text-sm  xl:text-bace xl:mt-28 mx-4 sm:mx-8">This project is my first work with the React library. Months have been spent on this project, and during this work, I became familiar with various aspects of React. The goal of this project was to work with React and an API, using the API from the website... The functionality of this project works like this: you enter the city you want in the search section, and it displays the weather for that day as well as the past week.</p>
        </div>

        <div className="rounded-2xl flex flex-col  mx-3 sm:w-6/12 w-12/12">
          <div><img src="/assets/images/perpule.jpg" alt="" className="w-12/12 my-4 sm:my-0 rounded-2xl bg-white" /></div>
          <div className="bg-white sm:my-5 grid grid-row-2 grid-cols-2 rounded-2xl p-6 ">
            <div className="bg-gray-100 m-2 rounded-xl pl-4 py-2">
              <p className="lg:text-2xl text-bace">2</p>
              <p className="lg:text-bace text-sm">Years Experience</p>
            </div>
            <div className="bg-gray-100 m-2 rounded-xl pl-4 py-2">
              <p className="lg:text-2xl text-bace">3.5</p>
              <p className="lg:text-bace text-sm">Project Challenge</p>
            </div>
            <div className="bg-gray-100 m-2 rounded-xl pl-4 py-2">
              <p className="lg:text-2xl text-bace">6</p>
              <p className="lg:text-bace text-sm">Positive Reviews </p>
            </div>
            <div className="bg-gray-100 m-2 rounded-xl pl-4 py-2">
              <p className="lg:text-2xl text-bace">19</p>
              <p className="lg:text-bace text-sm">Age</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
