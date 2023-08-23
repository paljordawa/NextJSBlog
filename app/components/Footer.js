import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";
import { BsFillCcCircleFill } from "react-icons/bs";


export default function Footer() {
  return (
    <footer className="w-full bg-sky-800">
  <div className="sm:flex max-w-5xl mt-80 m-auto py-10 text-sky-950  justify-between sm:items-center p-5">
    <Link href="paljordawa.github.io" className="hover:opacity-60">
    
    <div className="flex gap-2 py-2 items-center">
    <AiFillGithub className='text-3xl' />
      <p className="hover:opacity-80 italic font-semibold">    paljordawa@github.io</p>

    </div>
  </Link>
  <div>

  </div>
  <div className="flex">
   <BsFillCcCircleFill className='text-3xl' />
    <p className="italic font-semibold p-2">License</p>
  </div>
 
</div>  
<div className="bg-sky-900"><p className="italic font-semibold p-2 text-center text-xs text-sky-700">Theme by: Dawa Paljor</p></div> 
</footer>
  )
}
