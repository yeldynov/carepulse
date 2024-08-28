import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='bg-[#1A2A4B] p-16 px-6'>
      {/* top */}
      <div className='flex flex-col md:flex-row'>
        {/* left */}
        <div className='md:w-[40%] flex flex-col gap-5'>
          <a className='' href='/' target='_blank' rel='noopener noreferrer'>
            <Image
              src='/assets/icons/logo-full.svg'
              height={1000}
              width={1000}
              alt='patient'
              className='h-10 w-fit'
            />
          </a>
          <p className='italic pr-28'>
            Jl. Lebak Bulus I Kav. 29 Cilandak Jakarta Selatan, DKI Jakarta,
            Indonesia 12340
          </p>
          <div className=''>socials</div>
        </div>

        <div className='flex justify-between md:justify-around md:w-[60%]'>
          <div className=''>
            <h3 className='pb-3 text-xl font-semibold'>Company Info</h3>
            <div className='flex flex-col gap-2'>
              <Link href='/'>Home</Link>
              <Link href='/'>About Us</Link>
              <Link href='/'>Services</Link>
              <Link href='/'>Contacts</Link>
            </div>
          </div>
          <div className=''>
            <h3 className='pb-3 text-xl font-semibold'>Company Info</h3>
            <div className='flex flex-col gap-2'>
              <Link href='/'>Home</Link>
              <Link href='/'>About Us</Link>
              <Link href='/'>Services</Link>
              <Link href='/'>Contacts</Link>
            </div>
          </div>
          {/* contacts */}
          <div className=''>
            <h3 className='pb-3 text-xl font-semibold'>Contacts</h3>
            <div className='flex flex-col gap-2'>
              <p>+380979693424</p>
              <p>info@carepulse.com</p>
              <p>+380979693424</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className='flex items-center justify-center pt-10 mt-10 border-t'>
        <p>Copyright &copy; Carepulse 2024</p>
      </div>
    </section>
  )
}

export default Footer
