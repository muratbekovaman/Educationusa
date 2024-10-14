import Swipert from "@/components/shared/swiper";
import Сollection from "@/components/shared/collection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { getAllEvents } from "@/lib/actions/event.actions";
import Spline from '@splinetool/react-spline/next';
import { useMutation } from "@tanstack/react-query";
import { SplineWebhook } from "@/components/shared/splineWebhook";
import { AvatarUI } from "@/components/shared/avatar";
import { avatarsUrls } from "@/constats";
import { Separator } from "@/components/ui/separator";
import Intro from "@/components/shared/intro";
import { HeroSection } from "@/components/shared/hero";

export default async function Home() {

      const events = await getAllEvents({
        query: "", 
        category: "",
        limit: 6,
        page: 1,
    })
    console.log(events)

  return (<>
  <section className="w-[100vw] h-[100vh] lg:md:grid flex flex-col lg:md:grid-cols-2">
    <HeroSection />
    <SplineWebhook />
    </section>
   <Intro/>             
  <section className="flex flex-col w-screen pb-20 p-1 gap-10 md:lg:p-16">
    <h2 className="text-2xl font-medium">Our platform is trusted by <span className="text-blue-950 font-semibold text-3xl">million</span> people and <span className="text-blue-950 font-semibold text-3xl">thousand</span> companies</h2>
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
