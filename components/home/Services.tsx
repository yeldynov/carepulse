import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section id='services'>
      {/*Title */}
      <div className='flex items-start justify-between my-20'>
        <h1 className='text-[32px] font-semibold leading-[48px]'>
          Our Services
        </h1>
        <p className='text-lg leading-10 lg:w-[565px]'>
          A hospital is an integral part of a social and health organization
          with the function of providing comprehensive services.
        </p>
      </div>
      {/* Service cards */}
      <div className='flex flex-col lg:flex-row gap-10 text-[#dadada]'>
        <div className='service-card'>
          <Image
            src='/assets/icons/pharmacy.svg'
            height={500}
            width={500}
            alt='pharmacy'
            className='h-16 mb-6 w-fit'
          />
          <h2 className='text-2xl font-medium leading-[21px] mb-3'>
            Pharmacy 24/7
          </h2>
          <p className='mb-6'>
            A shop that mixes and sells medicines based on a doctors
            prescription and sells medical goods
          </p>
          <Link
            href='/onboard'
            className='bg-gradient-to-r hidden md:flex font-bold gap-2 text-white hover:from-[#2F80ED] hover:to-[#516AF8]  w-full h-[56px] rounded-[100px] from-[#516AF8] to-[#2F80ED] items-center justify-center cursor-pointer'
          >
            <Image
              src='/assets/icons/whatsapp.svg'
              height={500}
              width={500}
              alt='stetoskop'
              className='h-6 w-fit'
            />
            Register Patient
          </Link>
        </div>
        <div className='service-card'>
          <Image
            src='/assets/icons/checkup.svg'
            height={500}
            width={500}
            alt='pharmacy'
            className='h-16 mb-6 w-fit'
          />
          <h2 className='text-2xl font-medium leading-[21px] mb-3'>
            Medical Check Up
          </h2>
          <p className='mb-6'>
            A shop that mixes and sells medicines based on a doctors
            prescription and sells medical goods
          </p>
          <Link
            href='/onboard'
            className='bg-gradient-to-r hidden md:flex font-bold gap-2 text-white hover:from-[#2F80ED] hover:to-[#516AF8]  w-full h-[56px] rounded-[100px] from-[#516AF8] to-[#2F80ED] items-center justify-center cursor-pointer'
          >
            <Image
              src='/assets/icons/whatsapp.svg'
              height={500}
              width={500}
              alt='stetoskop'
              className='h-6 w-fit'
            />
            Register Patient
          </Link>
        </div>
        <div className='service-card'>
          <Image
            src='/assets/icons/injector.svg'
            height={500}
            width={500}
            alt='pharmacy'
            className='h-16 mb-6 w-fit'
          />
          <h2 className='text-2xl font-medium leading-[21px] mb-3'>
            Professional Doctor
          </h2>
          <p className='mb-6'>
            A shop that mixes and sells medicines based on a doctors
            prescription and sells medical goods
          </p>
          <Link
            href='/onboard'
            className='bg-gradient-to-r hidden md:flex font-bold gap-2 text-white hover:from-[#2F80ED] hover:to-[#516AF8]  w-full h-[56px] rounded-[100px] from-[#516AF8] to-[#2F80ED] items-center justify-center cursor-pointer'
          >
            <Image
              src='/assets/icons/whatsapp.svg'
              height={500}
              width={500}
              alt='stetoskop'
              className='h-6 w-fit'
            />
            Register Patient
          </Link>
        </div>
      </div>
      {/* Facility */}
      <div className='flex flex-col justify-between text-white lg:flex-row'>
        <div className='flex items-center justify-center pt-20 mx-auto'>
          <Image
            src='/assets/images/building.png'
            height={1000}
            width={1000}
            alt='patient'
            className='object-cover lg:ml-[-40px]'
          />
        </div>
        <div className='flex flex-col gap-[40px] pt-[50px] md:pt-[115px]'>
          <h1 className='text-[32px] font-bold leading-[48px]'>
            The best service from the most expert medical experts
          </h1>
          <p className='text-lg leading-8'>
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
      </div>
      {/* Atom */}
      <div className='flex flex-col-reverse justify-between text-white lg:flex-row'>
        <div className='flex flex-col lg:max-w-[50%] justify-center gap-[40px] pt-[50px] md:pt-[115px]'>
          <h1 className='text-[32px]  font-bold leading-[48px]'>
            Luxurious Facilities that Humanize Humans
          </h1>
          <p className='text-lg leading-8'>
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
        <div className='flex items-center justify-center pt-20 mx-auto lg:max-w-[50%]'>
          <Image
            src='/assets/images/atom.png'
            height={1000}
            width={1000}
            alt='patient'
            className='object-cover lg:ml-[-40px]'
          />
        </div>
      </div>

      {/* Book now */}
      <div className='bg-[#2F80ED] rounded-[30px] flex flex-col items-center justify-center shadow-lg py-16 gap-8 mt-32'>
        <h1 className='text-4xl leading-[48px] font-semibold'>
          Book our services now
        </h1>
        <p className='text-lg leading-6 text-center lg:w-[565px]'>
          A hospital is an integral part of a social and health organization
          with the function of providing comprehensive services.
        </p>
        <Link
          href='/onboard'
          className='bg-[#2F80ED] hover:bg-[#516AF8]  flex font-bold gap-2  w-[232px] h-[56px] rounded-[100px] text-white border-white border-2 items-center justify-center cursor-pointer'
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
    </section>
  )
}

export default Services
