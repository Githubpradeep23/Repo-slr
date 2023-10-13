"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '../../public/assets/images/logo.jpg'

const Storyteller = () => {
  return (
    <>
      <div id='about' className='mx-auto  w-full md:py-10 md:-mt-10 bg-no-repeat bg-cover text-center bg-storyteller_img' >
        <div className='m-auto md:grid grid-cols-3 gap-8'>
          <div className='md:-mt-52 md:ml-72 px-2 flex items-center justify-center'>
            {/* <Link href='/'>

              <Image
                className=''
                src={NavLogo}
                alt='test'
                width={'150'} height={'100'}
              />
            </Link> */}

          </div>
          <div className=' col-span-1 md:mt-20 px-2 mb-8'>
            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">Why Clients Trust Our Expertise and
              Choose to Partner with Us</h2>
            <h6 className='mb-2 text-[#152C4E] text-justify'>
              {`SLRIS - Where Trust and Partnership Meet Excellence`}
            </h6>
            <p className='text-[#152C4E] text-justify text-xs mb-2'>
              {`Embrace the confidence in our proven
              expertise as we turn your vision into reality.
              Our comprehensive range of services paves
              the way for your business's unparalleled
              success. Join our esteemed clients who
              have unlocked their potential and
              partnered with excellence.`}
            </p>
            <button type="button" className="float-left hover:scale-105 ease-in duration-100 text-white bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">Get started</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Storyteller;
