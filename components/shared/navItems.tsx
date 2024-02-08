'use client'
import Link from 'next/link'
import React from 'react'
import { headerLinks } from '@/constats'
import { usePathname } from 'next/navigation'
const NavItems = () => {
  const pathname = usePathname()
  return (
<ul className="flex flex-col lg:md:flex-row gap-8 p-3">
   {  headerLinks.map((link)=>{
    const isActive = pathname === link.route;
    return(
      <li className={`${isActive && 'text-primary-500'}`}>
        <Link href={link.route}>{link.label}</Link>
      </li>
    )
   })

   }

</ul>

  )
}

export default NavItems