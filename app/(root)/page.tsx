import Сollection from "@/components/shared/collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SplineWebhook } from "@/components/shared/splineWebhook";
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
  <section className="w-[100vw] lg:md:h-[100vh] h-[120vh] lg:md:grid lg:md:grid-cols-2  flex flex-col lg:md:gap-0 mb-20">
    <HeroSection />
    <SplineWebhook />
    </section>
   <Intro/>             
  <section className="flex flex-col w-screen pb-20 px-4 gap-10 md:lg:p-16 ">
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
