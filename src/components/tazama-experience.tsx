import * as React from "react";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const experience = [
  {
    id: 1,
    title: "The big title about sth",
    caption: `Specialising in once-in-a-lifetime trips, we exist to ensure that
              your time away is perfect and has a positive impact. We believe
              it’s timl`,
  },
  {
    id: 2,
    title: "The big title about sth",
    caption: `Specialising in once-in-a-lifetime trips, we exist to ensure that
              your time away is perfect and has a positive impact. We believe
              it’s timl`,
  },
  {
    id: 3,
    title: "The big title about sth",
    caption: `Specialising in once-in-a-lifetime trips, we exist to ensure that
              your time away is perfect and has a positive impact. We believe
              it’s timl`,
  },
  {
    id: 4,
    title: "The big title about sth",
    caption: `Specialising in once-in-a-lifetime trips, we exist to ensure that
              your time away is perfect and has a positive impact. We believe
              it’s time to linger longer and afford places the time they richly
              deserve. We specialise in curating tailor-made luxury holidays
              that are ten days or more, so you can slow down, really unravel`,
  },
];

export function TazamaExperience() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {experience.map((item) => (
          <CarouselItem>
            <div className="p-1">
              <Card key={item.id}>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  <>
                    <h3 className="font-now text-3xl font-bold text-black ">
                      {item.title}
                    </h3>
                    <p className="pt-5 text-base">{item.caption}</p>
                  </>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
