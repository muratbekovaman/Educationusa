'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { deleteEvent } from "@/lib/actions/event.actions"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTransition } from "react"
  export function DeleteConfirmation({eventId}: {eventId: string}) {
    const path = usePathname()
    const [isPending, startTransition] = useTransition()
    return (
      <AlertDialog >
        <AlertDialogTrigger asChild>

          <Button variant="outline" >
              <Image  src="/assets/icons/delete.svg" alt='delete' width={20} height={20}/> 
            </Button>

        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white" >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this Event
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-white hover:bg-blue-950" onClick={() =>{startTransition( async () =>{
                await deleteEvent({eventId, path})
            })}}>
              <Image  src="/assets/icons/delete.svg" alt='delete' width={20} height={20}/> 

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }