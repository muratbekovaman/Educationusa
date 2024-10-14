import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { headerLinks } from '@/constats'
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href='/'>
            <h1 className='font-bold'>dvizh.kz</h1>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
               
                <SignedOut>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Login</Link>
                </li>
                </SignedOut>
                <SignedIn>
                {headerLinks.map((link)=>{
                  return(
                    <li key={link.label}>
                    <Link href={link.route} className="hover:underline me-4 md:me-6">{link.label}</Link>
                </li>
                  )
                })}

                </SignedIn>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="https://www.instagram.com/aman_ioy/" className="hover:underline">AMAN™</Link>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer