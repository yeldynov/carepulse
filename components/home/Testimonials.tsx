import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='flex flex-col items-center justify-center gap-5 mb-20'>
        <h1 className='text-[32px] font-semibold '>Testimonials</h1>

        <p className='text-lg leading-6 text-center lg:w-[565px]'>
          A hospital is an integral part of a social and health organization
          with the function of providing comprehensive services.
        </p>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4'>
        <div className='service-card'>
          <p className='text-xl italic font-light leading-8'>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className='flex gap-4 mt-5'>
            <Image
              src='/assets/images/testimonial.png'
              height={500}
              width={500}
              alt='profile'
              className=' w-fit'
            />
            <div className='flex flex-col justify-center'>
              <h5 className='text-[#2F80ED] text-xl leading-8 font-medium'>
                Rifki Abdurachman
              </h5>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
        <div className='service-card'>
          <p className='text-xl italic font-light leading-8'>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className='flex gap-4 mt-5'>
            <Image
              src='/assets/images/testimonial.png'
              height={500}
              width={500}
              alt='profile'
              className=' w-fit'
            />
            <div className='flex flex-col justify-center'>
              <h5 className='text-[#2F80ED] text-xl leading-8 font-medium'>
                Rifki Abdurachman
              </h5>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
        <div className='row-start-2 sm:row-start-auto service-card'>
          <p className='text-xl italic font-light leading-8'>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className='flex gap-4 mt-5'>
            <Image
              src='/assets/images/testimonial.png'
              height={500}
              width={500}
              alt='profile'
              className=' w-fit'
            />
            <div className='flex flex-col justify-center'>
              <h5 className='text-[#2F80ED] text-xl leading-8 font-medium'>
                Rifki Abdurachman
              </h5>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
        <div className='row-start-2 sm:row-start-auto service-card'>
          <p className='text-xl italic font-light leading-8'>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className='flex gap-4 mt-5'>
            <Image
              src='/assets/images/testimonial.png'
              height={500}
              width={500}
              alt='profile'
              className=' w-fit'
            />
            <div className='flex flex-col justify-center'>
              <h5 className='text-[#2F80ED] text-xl leading-8 font-medium'>
                Rifki Abdurachman
              </h5>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
