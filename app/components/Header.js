import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-sky-900 backdrop-blur-sm bg-opacity-80 text-white sticky top-0 z-10">
    <section className="max-w-4xl mx-auto p-4 flex justify-between align-center">
      <h1 className="text-3xl font-bold"><a href="/"> &#9924;Snowman Blog</a></h1>
      <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
          &#9776;
      </button>
      <nav className="hidden sm:block space-x-8 text-xl font-medium" aria-label="main">
          <Link href="/" className="hover:opacity-80">Home</Link>

          <Link href="/contact" className="hover:opacity-80">Contact</Link>
      </nav>
    </section>
    
  </header>
  )
}
