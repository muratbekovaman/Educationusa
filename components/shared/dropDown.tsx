import React, { startTransition, useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ICategory } from '@/lib/mongodb/database/models/category.model'
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
import { Input } from '../ui/input'
import { createCategory, getAllCategories } from '@/lib/actions/category.actions'

type DropDownProps = {
    onChangeHandler?: () => void,
    value?: string
}

function DropDown({onChangeHandler, value}: DropDownProps) {

  const [categories,setCategories] = useState<ICategory[]>([])
const [newCategory, setNewCategory] = useState('')


const handleAddCategory = () =>{
    createCategory({
      categoryName: newCategory.trim()
    }).then((category)=>{
      setCategories((prevState) => [...prevState, category])
    })
}

useEffect(()=>{
  const getCategories= async() =>{
    const categoriesList = await getAllCategories()
    categoriesList && setCategories(categoriesList as ICategory[])
  }

  getCategories()
}, [])
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
    <SelectTrigger className="w-[180px] select-field">
      <SelectValue placeholder="Category" className='text-black'/>

    </SelectTrigger>
    <SelectContent>
      {categories.length > 0 && categories.map((category)=>(
        <SelectItem key={category._id} value={category._id} className='select-item p-regular-14'>
          {category.name}
        </SelectItem>
      ))}
            <AlertDialog>
        <AlertDialogTrigger className="p-medium-14 w-full flex rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">Add new Category</AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>New category </AlertDialogTitle>
            <AlertDialogDescription>
              <Input type='text' placeholder='category name' onChange={(value)=>{setNewCategory(value.target.value)}}/>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>startTransition(handleAddCategory) }>Add</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SelectContent>
  </Select>
  )
}

export default DropDown