"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog = ({ blogsList }) => {
  return (
    <div id='blog' className='w-full lg:h-screen md:mt-50'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-1xl tracking-widest text-center uppercase text-black'>
          BLOGS
        </p>
        <h2 className='py-4 text-center'>Explore Knowledge, Expert Guidance, and Much More</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>

          {blogsList && blogsList.data.map((list, index) => (
            <div key={list.id} className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className=''>
                <div className='m-auto'>
                  <Image width={"0"} height={"0"} src={list.image} className='w-full' alt='/' />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center my-4'>
                <h3>{list.title}</h3>
                <p className='my-2 text-sm'>{list.short_description}</p>
              </div>
              <Link href={`pages/blogs/${list.slug}`} className=' text-sm'>Read More...</Link>
            </div>
          ))
          }

        </div>

        <div className='flex flex-col items-center justify-center my-4 md:mt-10'>
          <h3>{"Dive Deeper to explore?"}</h3>
          <Link href={"#"} >
          <p className='my-2 text-sm'>{"View all blogs"}</p>
          </Link>
          <span className="underline decoration-[#75EAE2] text-[#75EAE2] decoration-[3px]">_____</span>
        </div>

      </div>
    </div>
  );
};

export default Blog;
