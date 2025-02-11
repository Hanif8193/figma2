
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div >
      <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
     
      <span className="ml-3 text-2xl">ma.</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
     
   <Link href={"#Hero "}>Home</Link>
   <Link href={"About"}>About</Link>
   <Link href={"/#Playground"}>Playground</Link>
   
   <Link href={"#Contact"}>Contact</Link>

  

     
    </nav>
    
    
  </div>
</header>

    </div>
  )
}

export default Navbar

