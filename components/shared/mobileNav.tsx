import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"

import Image from "next/image"
import NavItems from "./navItems"

const MobileNav = () => {
  return (
    <nav className="flex lg:md:hidden">
    <Sheet>
    <SheetTrigger className="align-middle">
    <Image src='assets/icons/menu.svg' alt="menu" width={24} height={24}/>
    </SheetTrigger>
    <SheetContent className="flex flex-col bg-white md:hidden p-0 gap-0" >
      <div  className='h-[13vh] flex items-center'>
      <Image src='/assets/icons/EducationUSA_Logo.png' alt="logo" width={100} height={38}/>

      </div>
      <Separator/>
      <NavItems/>
    </SheetContent>
  </Sheet>
  </nav>
  )
}

export default MobileNav