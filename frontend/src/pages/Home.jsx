import React from 'react'
import Navbar from '../components/Navbar'
import OurProjects from '../components/OurProjects'
import ScrollBtn from '../components/ScrollBtn'
import Hero from '../components/Hero'
import Creativity from '../components/Creativity'

import Client from '../components/Client'
import Basic from '../components/Basic'
import Teams from '../components/Teams'


const Home = () => {
  return (
     <div className="font-sans">
      {/* <Navbar /> */}
      <Hero/>
      <Creativity/>
      <OurProjects/>
      <Basic/>
      <Client/>
      <Teams/>
      <ScrollBtn/>
    </div>
  )
}

export default Home
