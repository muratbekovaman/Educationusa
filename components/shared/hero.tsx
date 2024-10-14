'use client'

import { avatarsUrls } from "@/constats"
import { Separator } from "@radix-ui/react-separator"
import { AvatarUI } from "./avatar"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
gsap.registerPlugin(useGSAP)

export const HeroSection =() =>{
    const container = useRef<HTMLInputElement>(null)

    useGSAP( ()=>{
        const tl = gsap.timeline()

        tl.add('start')
        .to(".text",{
            y: 0,
            ease: "power2.in"
        },'start')
        .to("#line",{
            width: "100%",
             ease: "power2.in"
        })
        .to(".icons",{
            y:0,
            stagger: 0.1,
            ease: "power2.in"
        })
    },{scope: container})

    return(
        <section id="#container" ref={container} className="h-[10%] lg:md:h-[100%] flex flex-col gap-16  pt-20 pl-20">
      <div className=" flex flex-col text-[70px] text-nowrap tracking-[1px] gap-[2px]">
        <div className="relative overflow-hidden">
            <h1 className="leading-none m-0 p-0 text">EVENTS</h1>
        </div>
        <div className="relative overflow-hidden">
             <h1 className="leading-none m-0 p-0 text "> UNLIMITED</h1>
        </div>
        <div className="flex flex-row items-center">
               <div className="flex flex-row items-center">
                {avatarsUrls.map((url,index) =>{
                  return (
                    <AvatarUI classForDiv="text-clip" key={url} imageUrl={url} size={65} />
                  )
                })}
               </div>
               <div className="relative overflow-hidden">
             <h1 className="leading-none m-0 p-0 text "> IDEAS</h1>
        </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-[105%]">
        <Separator id="line" className="bg-black h-[1.5px] w-[0]"/>
        <div className="flex flex-row justify-between text-l leading-[25px]">
                <h1 className="font-light text text-clip">OUR SOLUTION</h1>
                <h1 className="font-light text-right text text-clip">WE PROVIDE THE FULL <br/>
                FUNNEL APPROACH</h1>
        </div>
      </div>

    </section >
    )
}