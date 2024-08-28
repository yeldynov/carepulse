import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='bg-[#323b4c] py-8'>
      <div className='mx-[20px] flex flex-col gap-6'>
        <h2 className='text-[28px] md:text-[32px] font-semibold leading-[48x] text-center'>
          Partners and Friends
        </h2>
        <div className='flex gap-[68px] overflow-x-auto md:justify-center md:items-center'>
          <Image
            src='/assets/images/partners/partner1.png'
            height={1000}
            width={1000}
            alt='patient'
            className='min-h-20 w-fit'
          />
          <Image
            src='/assets/images/partners/partner2.png'
            height={1000}
            width={1000}
            alt='patient'
            className='min-h-20 w-fit'
          />
          <Image
            src='/assets/images/partners/partner3.png'
            height={1000}
            width={1000}
            alt='patient'
            className='min-h-20 w-fit'
          />
          <Image
            src='/assets/images/partners/partner4.png'
            height={1000}
            width={1000}
            alt='patient'
            className='min-h-20 w-fit'
          />
          <Image
            src='/assets/images/partners/partner5.png'
            height={1000}
            width={1000}
            alt='patient'
            className='min-h-20 w-fit'
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
