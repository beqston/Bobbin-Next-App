import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonialsArray } from "@/db/testimonials"
import Image from "next/image"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90vw] m-auto"
    >
      <CarouselContent className="items-stretch">
        {testimonialsArray.map((item, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="bg-white h-full">
                <CardContent className="flex flex-col justify-between h-full p-4">
                  <div>
                    <span className="bg-spark-grey-20 p-2 rounded-2xl text-sm">May, 2026</span>
                  </div>
                  <div className="flex-1 py-4">
                    <p className="text-base sm:text-lg lg:text-xl line-clamp-5">"{item.description}"</p>
                  </div>

                  {/* bottom section */}
                  <div className="flex gap-4 items-center">
                    <div className="w-12 relative h-12 shrink-0">
                      <Image fill src={item.image} alt="Profile-image" className="object-cover rounded-full" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base sm:text-[18px] truncate">{item.author}</h4>
                      <p className="text-spark-grey-30 text-sm truncate">{item.posittion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-1 cursor-pointer sm:left-4 bg-amber-300 hover:bg-spark-grey-20 border border-spark-grey-20 text-black hover:text-black shadow-md size-10 transition-all duration-200" />
      <CarouselNext className="right-1 cursor-pointer sm:right-4 bg-amber-300 hover:bg-spark-grey-20 border border-spark-grey-20 text-black hover:text-black shadow-md size-10 transition-all duration-200" />
    </Carousel>
  )
}
