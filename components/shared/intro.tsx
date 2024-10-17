'use client'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP)

import Image from "next/image"
import { Button } from "../ui/button"
import { useRef } from "react";

export default function Intro(){
    const animationBox = useRef<HTMLInputElement>(null)
    useGSAP(()=>{
        const leftXvalues = [-300, -350, -150]
        const rightXvalues = [300 , 350, 150]
        const rotationLeftValues = [-30,-20,-35]
        const rotationRightValues = [30,20,20]
        const yValues = [100, 0, -100]

        gsap.utils.toArray("#row").forEach((row:  any, index: number) =>{
            const leftCard = row.querySelector("#left")
            const rightCard = row.querySelector("#right")
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#animationBox",
                    scrub: 1,
                    start: "bottom center",
                    end: "350% bottom",
                }
            })

                tl.add("start")
                .to(leftCard, {
                    x: leftXvalues[index],
                    onStart: () => {console.log("start")},
                    rotation: rotationLeftValues[index],
                    y: yValues[index]
                   },"start") 
                .to(rightCard, {
                    x: rightXvalues[index],
                    rotation: rotationRightValues[index],
                    y: yValues[index]
                   }, "start") 
        })


    },{scope: animationBox})

    const generateRows = () =>{
        const rows = []

        for(let i =1; i <=3; i++){
            rows.push(
                <div id="row" className="grid grid-cols-2 gap-4" key={i}>
                        <Image id="left" className="rounded-2xl mb-4" width={400} height={400} alt="" src={`/assets/images/${i *2 - 1}.jpg` }/>
                        <Image id="right"className="rounded-2xl" width={400} height={400} alt="" src={`/assets/images/${2 * i}.jpg` }/>
                </div>
            )
        }
        return rows;
    }
    return(
        <div id="animationBox" ref={animationBox} className="relative flex flex-col max-h-[100%] w-[100%] justify-center items-center">
                <div className="absolute backdrop-blur-xl  bg-zinc-100 rounded-lg flex flex-col gap-4 text-center px-8 py-8">
                    <h1 className="font-bold text-2xl">dvizh.kz</h1>
                    <div className="flex flex-col gap-2">
                        <p className="">Community of knowledge</p> 
                        <p className="">Let's arrange your plans</p> 
                        <p className="">Make yourself sociable</p>
                    </div>
                    <Button id="button">Find your event</Button>

                <div className="absolute right-[10%] z-[-4] top-[-10%] rounded-full w-[100px] h-[100px]"></div>

            </div>

            {generateRows()}

        </div>
    )
}