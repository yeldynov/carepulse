import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='container flex flex-wrap items-center justify-between p-0 px-5 md:flex-row md:px-0'>
      <a className='' href='/' target='_blank' rel='noopener noreferrer'>
        <Image
          src='/assets/icons/logo-full.svg'
          height={1000}
          width={1000}
          alt='patient'
          className='h-10 w-fit'
        />
      </a>

      {/* Desktop Navigation */}
      <nav className='hidden justify-between gap-[42px] text-xl font-semibold leading-7 md:flex'>
        <a className='hover:text-[#2F80ED]' href='#home'>
          Home
        </a>
        <a className='hover:text-[#2F80ED]' href='#about'>
          About us
        </a>
        <a className='hover:text-[#2F80ED]' href='#services'>
          Services
        </a>
        <a className='hover:text-[#2F80ED]' href='#chatbot'>
          Contact Us
        </a>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className='md:hidden' onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='50'
            height='50'
            viewBox='0 0 50 50'
          >
            <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='#ffffff'
          >
            <path d='M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z'></path>
          </svg>
        )}
      </div>

      {/* Mobile Navigation with Backdrop */}
      {isOpen && (
        <div className='fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full bg-black bg-opacity-50 md:hidden'>
          <nav className='flex h-full w-full flex-col items-center gap-[42px] bg-white p-8 font-darker-grotesque text-xl font-semibold leading-7'>
            <button className='self-end mb-8' onClick={toggleMenu}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='50'
                height='50'
                viewBox='0 0 50 50'
              >
                <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
              </svg>
            </button>
            <a
              className='hover:text-[#516AF8]'
              href='#home'
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              className='hover:text-[#516AF8]'
              href='#about'
              onClick={toggleMenu}
            >
              About us
            </a>
            <a
              className='hover:text-[#516AF8]'
              href='#services'
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              className='hover:text-[#516AF8]'
              href='#contact'
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              className='hover:text-[#516AF8]'
              href='#contact'
              onClick={toggleMenu}
            >
              <Link
                href='/onboard'
                className='bg-gradient-to-r flex font-bold gap-2 text-white hover:from-[#2F80ED] hover:to-[#516AF8]  w-[232px] h-[56px] rounded-[100px] from-[#516AF8] to-[#2F80ED] items-center justify-center cursor-pointer'
              >
                <Image
                  src='/assets/icons/steto.svg'
                  height={500}
                  width={500}
                  alt='stetoskop'
                  className='h-6 w-fit'
                />
                Register Patient
              </Link>
            </a>
          </nav>
        </div>
      )}

      <Link
        href='/onboard'
        className='bg-gradient-to-r hidden lg:flex font-bold gap-2 text-white hover:from-[#2F80ED] hover:to-[#516AF8]  w-[232px] h-[56px] rounded-[100px] from-[#516AF8] to-[#2F80ED] items-center justify-center cursor-pointer'
      >
        <Image
          src='/assets/icons/steto.svg'
          height={500}
          width={500}
          alt='stetoskop'
          className='h-6 w-fit'
        />
        Register Patient
      </Link>
    </nav>
  )
}

export default Navbar
