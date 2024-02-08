'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../mongodb/database"

import User from "../mongodb/database/models/user.model"
import Order from "../mongodb/database/models/order.model"
import Event from "../mongodb/database/models/event.model"


import { revalidatePath } from "next/cache"


export const createUser = async (user: CreateUserParams)=>{
try{
        await connectToDatabase()

        const newUser = await User.create(user)

        return JSON.parse(JSON.stringify(newUser))
}catch(error){
    handleError(error)
}
}
export const updateUser = async (clerkId: String, user: UpdateUserParams)=>{
    try{
        await connectToDatabase()
        const updatedUser = await User.findOneAndUpdate({clerkId}, user, {new: true})
        if(!updatedUser) throw new Error("user didn't updated")
        return JSON.parse(JSON.stringify(updateUser))
    }catch(error){
        handleError(error)
    }
}

export async function deleteUser(clerkId: string) {
    try {
      await connectToDatabase()
  
      const userToDelete = await User.findOne({ clerkId })
  
      if (!userToDelete) {
        throw new Error('User not found')
      }
  
      await Promise.all([
        Event.updateMany(
          { _id: { $in: userToDelete.events } },
          { $pull: { organizer: userToDelete._id } }
        ),
  
        Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
      ])
  
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      revalidatePath('/')
  
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error)
    }
  }

export async function getUserById(userId: String){

    try{
        await connectToDatabase()
        const user = User.findById(userId)

        if(!user) throw new Error("User not found")
        return JSON.parse(JSON.stringify(user))
    }
    catch(error){
        handleError(error)
    }

}