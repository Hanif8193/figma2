
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Contact from './components/Contact'
import Playground from './components/Playground'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Playground/>
       <Contact/>
    </div>
  )
}

export default Home
