'use client'
import { splineSendWebhook } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import Spline from "@splinetool/react-spline"
import { useMutation } from "@tanstack/react-query"
import gsap from "gsap"
import { useEffect, useRef } from "react"


gsap.registerPlugin(useGSAP)

export const SplineWebhook = () =>{
    const container = useRef<HTMLInputElement>(null)

    const {contextSafe} = useGSAP(()=>{
        gsap.set("#scene",{
            opacity:0,
            
        })
    },{
        scope: container
    })
    const showScene =contextSafe(() =>{
        gsap.to("#scene",{
            opacity: 1,
            duration: 2,
            delay: 1
        })
    })
    const {mutate: mutateSpline, isPending} = useMutation({
        mutationFn: async() =>{
            return await splineSendWebhook({userId: "dasd", color: "#fffff"})
        },
        onSuccess: (data) =>{
            console.log("Success", data)
        },
        onError: (error) =>{
            console.log(error)
        }
    })
    return (
        <>
        <main ref={container}>
            <Spline id="scene" scene="https://prod.spline.design/5Ni0mVqHFOkLaklv/scene.splinecode" 
            onLoad={() => {mutateSpline(), showScene()}}/>
        </main>
            </>

    )
}