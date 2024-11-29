import React from 'react'
import Image from 'next/image'
import IM from "../../../public/AR.png"

function Contact() {
  return (
    <div id='Contact'>
    <div className='flex justify-between items-center border-t-[1px] border-black ml-10 mr-10'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
  
<p className='text-2xl'>I am thrilled to answer to your next project
    <Image src={IM}alt='IM'width={20}height={20} className='text-3xl ml-52'/>
    </p>     

      
      
      
          
    </a>
    <p className="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
     
     <div className='ml-52'>
        makifkarasu@outlook.com
     </div>
      <div className='ml-52'>view resume</div>
      
    </p>
    
    
     
      
      
      
      
    
        
      

  </div>
</footer>
</div>
    </div>
  )
}

export default Contact
