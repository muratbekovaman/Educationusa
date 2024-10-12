'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { heroTestimon } from '@/constats';
const Swipert = () => {
  return (
    <Swiper
    modules={[ Pagination ]}
      className=' flex justify-center w-[100%] h-full '
      effect={'cards'}
      pagination={{ clickable: true }}
    >
      {heroTestimon.map((review, index)=>
      <SwiperSlide  className='h-full flex justify-center items-center relative bg-transperent shadow-none w-[50%]' key={index}>      

      <div className='w-[100%] h-[90%] flex justify-center '>
       
        <div className='h-full w-[80%] border-[3px] border-blue-950 rounded-[50px] bg-white flex p-6 flex-col gap-4 justify-around'>
        <div className="flex justify-end w-[100%]">
    
        </div>
        <h1 className='text-2xl pl-4 mb-[20px]'>{review.text1} <br/>{review.text2}</h1>
        <div className='flex items-center gap-2 justify-self-end'>
          <div className='flex flex-col'>
              <p className='text-blue-950 font-bold'>{review.name}</p>
              <p>{review.edu}</p>
          </div>
        </div>
        </div>
      </div>
        </SwiperSlide>
      )}
      
       

      
      ...
    </Swiper>
  );
};
export default Swipert