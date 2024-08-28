import PatientForm from '@/components/forms/PatientForm'
import PasskeyModal from '@/components/PasskeyModal'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ searchParams }: SearchParamProps) {
  // const isAdmin = searchParams.admin === 'true'

  return (
    <div className='flex h-screen max-h-screen'>
      {/* {isAdmin && <PasskeyModal />} */}

      <section className='container my-auto remove-scrollbar'>
        <div className='sub-container max-w-[496px]'>
          <Link href='/'>
            <Image
              src='/assets/icons/logo-full.svg'
              height={1000}
              width={1000}
              alt='patient'
              className='h-10 mb-12 w-fit'
            />
          </Link>

          <PatientForm />

          <div className='flex justify-between mt-20 text-14-regular'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © 2024 CarePulse
            </p>
            <Link href='/admin' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/onboarding-img.png'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      />
    </div>
  )
}
