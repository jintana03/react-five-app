import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import BmiCalculator from './screens/BmiCalculator'
import SumNumber from './screens/SumNumber'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi-calculator" element={<BmiCalculator />} />
        <Route path="/sum-number" element={<SumNumber />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App