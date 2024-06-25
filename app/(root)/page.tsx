import Swipert from "@/components/shared/swiper";
import Сollection from "@/components/shared/collection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home() {

      const events = await getAllEvents({
        query: "", 
        category: "",
        limit: 6,
        page: 1,
    })
    console.log(events)
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
      <div className="h-[50%] max-w-[100vw] flex flex-row relative lg:md:gap-10 lg:md:items-end ">
        <div className="lg:md:w-[60%] w-100 overflow-visible flex flex-col gap-6">
          <Image src='/assets/images/hero2.jpg'className="lg:md:rounded-tr-[50px] w-[100vw]" width={750} height={200} alt="hero"></Image>
          <div className="lg:md:hidden w-100 px-4 flex flex-row items-center">
            
          <h4>Book and learn helpful tips from 1000+ mentors with our global community </h4>
          <Button className="bg-blue-950 w-24 rounded-full">Explore</Button>

        </div>
        </div>
       
      <div className=" lg:md:w-[50%] h-[60vh]">
        <Swipert></Swipert>
    </div>
    <div className="hidden lg:md:block z-[-10]  absolute -top-[300px] right-[144px] w-[600px] h-[600px] bg-orange-300 rounded-full opacity-45 mix-blend-multiply filter blur-[45px] animate-blob"></div>

      </div>
    
  </section>
  <section className="flex flex-col w-screen pb-20 p-1 gap-10 md:lg:p-16">
    <h2 className="text-2xl font-medium">Our platform is trusted by <span className="text-primary font-semibold text-3xl">million</span> people and <span className="text-primary font-semibold text-3xl">thousand</span> companies</h2>
    <div>
      Search
      Filter
    </div>
    <Сollection
    data={events?.data}
    emptyTitle="No events found"
    emptyStateSubtext="Come back later"
    collectionType= "All_Events"
    limit= {6}
    page= {1}
    totalPages ={2}
    />
  </section>
   </>
  );
}
