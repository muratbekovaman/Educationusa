import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { imageOptimizer } from "next/dist/server/image-optimizer"
import Image from "next/image"

type AvatarUIType = {
    imageUrl?: string
    size: number
    classForDiv?: string
}

export const AvatarUI = ({imageUrl, size, classForDiv}: AvatarUIType) =>{
    return(
        <div className={classForDiv ?? ""}>
            <Image  className="icons rounded-full" width={size} height={size} alt="avatar" src={imageUrl ?? "https://github.com/shadcn.png"}/>
        </div>
    )
}