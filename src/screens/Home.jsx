import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="flex flex-col items-center 
                      justify-center h-screen 
                      bg-orange-100">
          <span className="text-4xl font-bold text-pink-500 mb-4">
            Welcome to Jintana Calculator
          </span>
          <div className="flex">
            <Link to="/sum-number" className="bg-orange-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg mr-2">
            Sum Calculator
            </Link>
          
            <Link to="/Bmi-calculator" className="bg-rose-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg ml-2">
            Bmi Calculator
            </Link>
          </div>


      </div>
    </>
  )
}

export default Home