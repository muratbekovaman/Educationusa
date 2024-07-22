"use server";

import { z } from "zod";
import { eventFormSchema } from "../validator";
import { CreateEventParams, GetAllEventsParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../mongodb/database";
import Event from "../mongodb/database/models/event.model";
import User from "../mongodb/database/models/user.model";
import Category from "../mongodb/database/models/category.model";

export const populateEvent = async (query: any) =>{
    return query.populate({path: 'organizer', model: User, select: '_id firstName LastName'})
    .populate({path: "category", model: Category, select: '_id, name'})
}
export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();
    const organizer = await User.findById(userId)
    if(!organizer){
        throw new Error("organizer is not found ")
    }


    const newEvent = await Event.create({
      ...event, category: event.categoryId, organizer: userId
    });

    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    handleError(error);
  }
};
export const getEventById = async (eventId: string) =>{
  try{
    await connectToDatabase()
    const currentEvent = await populateEvent(Event.findById(eventId))

    if(!currentEvent){
      throw new Error("Event wasn't found")
    }
    return JSON.parse(JSON.stringify(currentEvent))
  }catch(error){
    handleError(error)
  }
}

export const getAllEvents = async ({query, limit =6, page, category}: GetAllEventsParams) =>{
  try{
    await connectToDatabase()
    const conditions ={}
    const eventsQuery = Event.find(conditions)
      .sort({createdAt: 'desc'})
      .skip(0)
      .limit(6)

      const events = await populateEvent(eventsQuery)
      const eventsCount: any = Event.countDocuments(conditions)
    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount/limit)
    }
  }catch(error){
    handleError(error)
  }
}