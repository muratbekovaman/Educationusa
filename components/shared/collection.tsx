import { IEvent } from '@/lib/mongodb/database/models/event.model'
import React from 'react'
import Card from './card'
type CollectionProps = {
  data: IEvent[], 
  emptyTitle : string,
   emptyStateSubtext: string, 
   collectionType: "Events_Organized" | "My_Tickets" | "All_Events", 
   limit: number, 
   page: number | string, 
   totalPages: number
}
const Collection = ({data, 
  emptyTitle, 
  emptyStateSubtext, 
  collectionType, 
  limit, 
  page, 
  totalPages}: CollectionProps) => {
  return (
    <>
    {data.length > 0 ?(
      <div className="flex flex-col items-center gap-10">
      <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {data.map((event) => {


          return (
            <li key={event._id} className="flex justify-center">
              <Card event={event}  />
            </li>
          )
        })}
      </ul>

    </div>
    ):     <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
    <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
    <p className="p-regular-14">{emptyStateSubtext}</p>
  </div>
    }
    
    </>
  )
}

export default Collection
