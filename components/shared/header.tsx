import {SignedOut, currentUser, SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './navItems'
import MobileNav from './mobileNav'



const Header  = async () => {

  return (
    <header className='w-full border-b h-[13vh] lg:md:h-[20vh] flex justify-center'>
        <div className='wrapper flex items-center justify-between '>
            <Link href='/#' className='w-36 flex'>
                <Image src='/assets/icons/EducationUSA_Logo.png' width={100} height={38 } alt='downloading'/>
            </Link>
            

              <SignedIn>
                    <nav className="hidden lg:md:flex">
                      <NavItems/>
                    </nav>
              </SignedIn>
            <div className='flex w-32 justify-end gap-3'> 
            <SignedIn>
                    
                    <UserButton  afterSignOutUrl="/"/>
                    <MobileNav/>
             </SignedIn>
            <SignedOut>
              <Button asChild  className='rounded-full bg-blue-950' size='lg'>
                      <Link href='/sign-in'>
                        Login
                      </Link>
                       </Button> 
              </SignedOut>
                    
            
            </div>
        </div>
    </header>
  )
}

export default Header