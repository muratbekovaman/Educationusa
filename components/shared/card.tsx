
// import { IEvent } from '@/lib/database/models/event.model'
import { IEvent } from '@/lib/mongodb/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { deleteEvent } from '@/lib/actions/event.actions'
import { DeleteConfirmation } from './deleteConfirmation'
// import { DeleteConfirmation } from './DeleteConfirmation'

type CardProps = {
  event: IEvent,

}

const Card = ({ event }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  console.log(userId)

  const isEventCreator = userId === event.organizer._id.toString();


  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link 
        href={`/events/${event._id}`}
        style={{backgroundImage: `url(${event.imageUrl})`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && (
        <div className="absolute right-2 top-2 flex flex-row gap-4 rounded-xl bg-white p-2 shadow-sm transition-all">
          <Button variant="outline"> 
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>
          </Button>
        <DeleteConfirmation eventId={event._id}/>
        </div>
        

      )}

      <div
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      > 
 

        <p className="p-medium-16 p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

       

        </div>
      </div>
    </div>
  )
}

export default Card