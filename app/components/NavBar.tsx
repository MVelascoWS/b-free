import React from 'react'
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-center lg:static lg:size-auto lg:bg-none text-center items-center">
            <Image
              src="/bfreeLogo.png"
              alt="B.free Logo"
              width={120}
              height={120}
              priority
            />  
            <div className="m-10">
            <Link href="/coreTeam" className="text-lg text-tag-color m-10">Core Team</Link>
            <Link href="/freeTeam" className="text-lg text-tag-color m-10">Free Team</Link>
            <Link href="/projects" className="text-lg text-tag-color m-10">Projects</Link>
        </div>    
        </div>

        
      </div>
  )
}

export default NavBar