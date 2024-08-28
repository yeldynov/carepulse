'use client'

import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header
      id='home'
      className='relative pt-[12px] text-dark-200 md:text-white md:pt-[40px]'
    >
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header
