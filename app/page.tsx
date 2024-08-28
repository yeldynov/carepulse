import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import Partners from '@/components/home/Partners'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <main className='max-w-[1440px]  flex flex-col gap-20 mx-auto container'>
      <Header />
      <Partners />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default HomePage
