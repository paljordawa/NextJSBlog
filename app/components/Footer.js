import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-teal-700">
  <div className="sm:flex max-w-5xl mt-80 m-auto py-10 text-teal-950  justify-between sm:items-center p-5">
    <Link href="paljordawa.github.io" className="hover:opacity-60">
    
    <div className="flex gap-2 py-2">

      <p className="hover:opacity-80 italic font-semibold">paljordawa@github.io</p>

    </div>
  </Link>
  <div>

  </div>
  <div className="flex">
   
    <p className="italic font-semibold p-2">License</p>
  </div>
 
</div>  
<div className="bg-teal-800"><p className="italic font-semibold p-2 text-center text-xs text-teal-700">Theme by: Dawa Paljor</p></div> 
</footer>
  )
}
