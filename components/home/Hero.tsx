import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col justify-between text-white lg:flex-row'>
      <div className='flex flex-col gap-[40px] max-w-[666px] pt-[100px] md:pt-[230px]'>
        <h1 className='text-[40px] font-bold leading-[60px]'>
          CarePulse is ready to serve public complaints 24/7
        </h1>
        <p className='text-xl leading-8'>
          A hospital is an integral part of a social and health organization
          with the function of providing comprehensive services.
        </p>
        <Link
          href='/onboard'
          className='bg-gradient-to-r hidden md:flex font-bold gap-2 text-white hover:from-[#2F80ED] hover:to-[#516AF8]  w-[232px] h-[56px] rounded-[100px] from-[#516AF8] to-[#2F80ED] items-center justify-center cursor-pointer'
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
      </div>
      <div className='flex items-center justify-center pt-20 mx-auto'>
        <Image
          src='/assets/images/hero-image.png'
          height={1000}
          width={1000}
          alt='patient'
          className='md:w-[500px] md:h-[600px] object-cover'
        />
      </div>
    </section>
  )
}

export default Hero
