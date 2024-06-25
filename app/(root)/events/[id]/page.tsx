import { getEventById } from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

async function EventDetails({ params: { id } }: SearchParamProps) {
  const event = await getEventById(id);

  return (
    <section className="flex flex-col w-[100vw] justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="flex justify-center">
        <Image
          alt="eventImage"
          src={event.imageUrl}
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover rounded-b-[100px] object-center"
        ></Image>
      </div>

      <div className="lg:md:grid lg:md:grid-cols-2 gap-8 p-10 flex flex-col">
        <div className="w-full flex flex-col  gap-6 sm:md:flex-col">
          <h2 className="h2-bold">{event.title}</h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <h5 className=" p-bold-20 rounded-full px-5 py-1.5 text-green-700 bg-green-500/10" >{event.isFree ? `free` : `$${event.price}`}</h5>
              <h5 className="align-center px-5 py-2.5 rounded-full text-grey-500 bg-grey-500/10" >{event.category.name}</h5>
            </div>
            <p>by{" "}
            <span className="text-primary-500">
                {event.organizer.firstName}
                {event.organizer.lastName}
                </span>
                </p>
          </div>
          <Link className="text-primary-500" href={event.url}>Event home Page</Link>

          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-5">
                <Image src="/assets/icons/calendar.svg" width={30} height={30} alt="." className=""></Image>
                <div className="flex flex-row gap-5 lg:md:gap-10"> 
                    <div className="flex flex-col">
                        <p className="text-xs"> Start Date Time:</p>
                        <p>{formatDateTime(event.startDateTime).dateTime} {event.startDateTime.year}</p>

                    </div>

                    <Separator orientation="vertical" className="bg-black"/>


                    <div className="flex flex-col">
                        <p className="text-xs"> End Date Time:</p>
                        <p>{formatDateTime(event.endDateTime).dateTime} {event.startDateTime.year}</p>

                    </div>
                </div>
               
            </div>

            <div className="items-center flex flex-row gap-5">
                <Image src="/assets/icons/location.svg" width={30} height={30} alt="." className=""></Image>
                <p>{event.location}</p>
            </div>

            <div className="flex flex-col ">
                <h4 className="font-bold text-xl">Description</h4>
                <p>{event.description}</p>
            </div>
          </div>
        
      </div>
    </section>
  );
}

export default EventDetails;
