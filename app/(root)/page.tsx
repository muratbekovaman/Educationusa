import Swipert from "@/components/shared/swiper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (<>
   <section className="flex flex-col h-[120vh] lg:md:h[80vh] w-screen pb-20 ">
      <div className="lg:md:h-[50%] h-[30%] w-full p-[20px] flex justify-center">
          <div className="flex lg:md:gap-16 gap-2 lg:md:h-[70%] h-[90%] w-[90%] items-end lg:md:pt-8 pt-1 lg:md:pl-20">
            <h1 className="lg:md:text-6xl text-2xl"><span className="font-semibold">WE CREATE <br/> <span className="text-blue-950">EVENTS</span></span> THAT ARE</h1>
            <span className="flex lg:md:pl-10 pl-5 lg:md:w-[25%] w-[60%] h-full bg-blue-950 rounded-r-[60px] rounded-tl-[50px] items-center "> 
              <h3 className="lg:md:text-3xl text-lg text-white ">profitble<br/>  interesting <br/> and inspiring</h3>
            </span>
          </div>
      </div >
      <div className="h-[50%] max-w-[100%] flex flex-row relative gap-10 items-end ">
        <div className="ld:md:w-[60%] overflow-visible">
          <Image src='/assets/images/hero2.jpg'className="lg:md:rounded-tr-[50px] " width={750} height={200} alt="hero"></Image>

        </div>
       
      <div className=" lg:md:w-[50%] h-full">
        <div className="w-full h-full mt-[50px] relative overflow-visible ">
        <Swipert></Swipert>
        </div>
    </div>
    <div className="hidden lg:md:block z-[-10]  absolute -top-[300px] right-[144px] w-[600px] h-[600px] bg-orange-300 rounded-full opacity-45 mix-blend-multiply filter blur-[45px] animate-blob"></div>

      </div>
    
  </section>
   </>
  );
}
