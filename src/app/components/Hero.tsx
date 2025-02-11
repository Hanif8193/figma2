
import React from 'react'
import Image from 'next/image'
import Im from "../../../public/pic.png"
function Hero() {
  return (
    <div id='Hero'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hi I am Mehmet </p>
        <br className="hidden lg:inline-block" />
     <p> Akif Karasu, 3D 
      <br className="hidden lg:inline-block" />
      artist & sculptor.
      </p>
      <p className="mb-8 leading-relaxed">
       My work is mainly focused on third-dimension
       modeling texturing and rendaring the creatures
       with a touch of dark surrealism for characters and production.     
      </p>
      
      
      <p>Now i am  an interactive media design
        student in instanbul - currently
        freelancing and seeking internship
        opportunities.

      </p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
      <Image 
        className="object-cover object-center rounded"
        alt="hero"
        src={Im} width={250}height={250}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
