import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Service from './components/Service/Service'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Navbar />
      <Hero/>
      <Category/>
      <Category2/>
      <Service/>
    </div>
  )
}

export default App
