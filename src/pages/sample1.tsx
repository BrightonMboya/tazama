import React, { useEffect, useRef } from "react";
import { setPageTitle } from "~/helpers";
import Image from "next/legacy/image";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import { CloudinaryImage } from "~/components/ui/GalleryImage";
import useFetchImages from "~/hooks/useFetchImages";
import EnquireNow from "~/components/EnquireNow";
import { motion, useScroll } from "framer-motion";
import useParallax from "~/hooks/useParallax";

function ParallaxImg({
  publicId,
  format,
  blurDataUrl,
}: {
  publicId: string;
  format: string;
  blurDataUrl: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    <motion.div
      style={{ y }}
      className="relative mt-[60px] h-[400px] w-full md:h-[600px]"
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      initial={{ opacity: 0, x: -10 }}
    >
      <Image
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${publicId}.${format}`}
        alt="Tazama Img"
        layout="fill"
        className="-ml-4 h-full w-full object-cover"
      />
    </motion.div>
  );
}

export default function Page({ images }: { images: ImageProps[] }) {
  return (
    <main>
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <Image
            alt="tazama gallery photos"
            className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
            style={{
              transform: "translate3d(0, 0, 0)",
              imageRendering: "crisp-edges",
            }}
            placeholder="blur"
            blurDataURL={images[1]!.blurDataUrl!}
            src={`https://res.cloudinary.com/${
              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }/image/upload/${images[1]!.public_id}.${images[1]!.format}`}
            layout="fill"
          />

          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Zanzibar
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            An Archipelago in the Indian ocean
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Welcome to the epitome of serenity and adventure, where the
            crystalline waters of the Indian Ocean caress the shores of
            Tanzania's untouched beaches. Our beach holiday page serves as your
            exclusive gateway to the enchanting islands of Zanzibar, including
            the secluded havens of Mafia, Pemba, and Unguja. Each destination
            promises an unparalleled fusion of opulence and excitement, steeped
            in a tapestry of rich culture and captivating history.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Zanzibar, renowned as the spice island, has beckoned explorers,
            mariners, and merchants for centuries, its shores laden with the
            intoxicating aromas of cloves, nutmeg, and cinnamon. Today, the
            Zanzibar Archipelago remains a sanctuary of indulgence, where
            traditional dhows gracefully glide across the horizon amidst a
            backdrop of timeless beauty.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <CloudinaryImage
                public_id={images[7]!.public_id}
                format={images[7]!.format}
                blurDataUrl={images[7]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>
      </div>

      <EnquireNow />

      <h3 className="font-base pt-10 text-center text-2xl uppercase text-primary md:text-3xl">
        A taste of what to expect
      </h3>

      <section className="mx-auto  max-w-7xl px-4 pb-10 md:px-8">
        <>
          <div className="mx-auto px-4 pt-10 md:pt-[80px]">
            <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 ">
              <div className="flex items-center justify-center pt-5">
                <ParallaxImg
                  format={images[7]?.format!}
                  publicId={images[7]?.public_id!}
                  blurDataUrl={images[7]?.blurDataUrl!}
                />
                {/* <div className="relative h-[400px] w-full md:h-[600px]">
                  <Image
                    alt="tazama gallery photos"
                    className="transform  object-cover  transition will-change-auto "
                    // style={{ transform: "translate3d(0, 0, 0)" }}
                    placeholder="blur"
                    blurDataURL={images[7]?.blurDataUrl}
                    layout="fill"
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[7]?.public_id}.${images[7]?.format}`}
                  />
                </div> */}
              </div>
              <div>
                <p className="pt-5 text-lg font-bold text-primary lg:text-xl">
                  Day 2 - Tarangire National Park
                </p>
                <ul className="list-disc pl-10 md:pl-5">
                  <li className="pt-5">
                    {" "}
                    In the early morning you will meet your guide and after a
                    short briefing, you’ll pile into your very own 4×4 safari
                    vehicle for the start of your adventure to Tarangire
                    National Park. This is one of Africa’s most underrated
                    parks. Elephants dot the landscape like cattle; it has the
                    second highest concentration of wildlife after the Serengeti
                    and reportedly the highest concentration of elephants in the
                    world. With over 450 species of bird, it is also arguably
                    the best bird watching destination in Tanzania. In the
                    evening, make your way to camp.
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="mx-auto mt-5 flex w-full flex-col  space-y-1 px-4 lg:flex-row lg:space-x-1 lg:space-y-0">
            <div className="relative h-[200px] lg:w-[33%] ">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[200px]  lg:w-[33%]  ">
              <CloudinaryImage
                public_id={images[2]!.public_id}
                format={images[2]!.format}
                blurDataUrl={images[2]!.blurDataUrl!}
              />
            </div>
            <div className="relative h-[200px]  lg:w-[34%]  ">
              <CloudinaryImage
                public_id={images[10]!.public_id}
                format={images[10]!.format}
                blurDataUrl={images[10]!.blurDataUrl!}
              />
            </div>
          </div>

          <div className="mx-auto px-4 pt-10 md:pt-[80px]">
            <section className="flex flex-col md:grid md:grid-cols-2 md:gap-8  ">
              <div>
                <p className="pt-5 text-lg font-bold text-primary lg:text-xl">
                  Day 3 - Ngorongoro Crater
                </p>
                <ul className="list-disc space-y-3 pl-10 md:pl-2">
                  <li className="pt-5">
                    {" "}
                    This morning we’ll adventure outside the vehicle into the
                    highlands of the Ngorongoro Conservation Area. Trekking the
                    Empakai Crater and its enchanting waterfall in Tanzania
                    offers not just a day of natural wonder but a panoramic
                    vista of the region's majesty. As you traverse the rugged
                    trails into the heart of the crater, verdant landscapes
                    surround you, revealing diverse wildlife along the way. The
                    crater's rim frames a stunning view, presenting the distant,
                    snow-capped peak of Kilimanjaro and the graceful silhouette
                    of Mount Lengai in the horizon.
                  </li>
                  <li>
                    The hidden gem within this natural amphitheater is the
                    magnificent Empakai Waterfall, where the cascading waters
                    add a touch of tranquility to the picturesque surroundings.
                    Standing at the base of the falls provides a serene moment
                    to absorb the sheer beauty of nature's spectacle, leaving an
                    enduring impression on all who venture into this pristine
                    setting. Once you’ve finished your hike we will make our way
                    to Serengeti National Park. Once you enter the park we will
                    make our way to camp for the night.
                  </li>
                  <li>Meals: Breakfast, Lunch, Dinner</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-5">
                <div className="relative h-[400px] w-full md:h-[600px] ">
                  <Image
                    alt="tazama gallery photos"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={images[4]?.blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[4]?.public_id}.${images[4]?.format}`}
                    layout="fill"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="mx-auto mt-5 flex w-full flex-col  space-y-1 px-4 lg:flex-row lg:space-x-1 lg:space-y-0">
            <div className="relative h-[200px] lg:w-[33%] ">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[200px]  lg:w-[33%]  ">
              <CloudinaryImage
                public_id={images[2]!.public_id}
                format={images[2]!.format}
                blurDataUrl={images[2]!.blurDataUrl!}
              />
            </div>
            <div className="relative h-[200px]  lg:w-[34%]  ">
              <CloudinaryImage
                public_id={images[10]!.public_id}
                format={images[10]!.format}
                blurDataUrl={images[10]!.blurDataUrl!}
              />
            </div>
          </div>

          <div className="mx-auto px-4 pt-10 md:pt-[80px]">
            <section className="flex flex-col md:grid md:grid-cols-2 md:gap-8  ">
              <div className="flex flex-col gap-3 pt-5">
                <div className="relative h-[400px] w-full md:h-[600px]">
                  <Image
                    alt="tazama gallery photos"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={images[7]?.blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[7]?.public_id}.${images[7]?.format}`}
                    layout="fill"
                  />
                </div>
              </div>

              <div>
                <p className="pt-5 text-lg font-bold text-primary lg:text-xl">
                  Day 5 - 6 Full days in Serengeti National Park
                </p>
                <ul className="list-disc space-y-5 pl-10 md:pl-5">
                  <li className="pt-5">
                    {" "}
                    Throughout each day of the safari, your guide will
                    personalize the schedule to suit your preferences,
                    optimizing the best timings for your activities. You might
                    opt for a morning game drive, heading back to camp for a
                    leisurely lunch and relaxation, followed by an afternoon
                    game drive. Alternatively, you could embark on an all-day
                    game drive, enjoying a delightful picnic lunch amidst the
                    stunning wilderness. Your guide will collaborate with you to
                    tailor the safari experience to your desires, ensuring an
                    itinerary that perfectly matches your preferences.
                  </li>
                  <li>Meals: Breakfast, Lunch, Dinner</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mx-auto mt-5 flex w-full flex-col  space-y-1 px-4 lg:flex-row lg:space-x-1 lg:space-y-0">
            <div className="relative h-[200px] lg:w-[33%] ">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[200px]  lg:w-[33%]  ">
              <CloudinaryImage
                public_id={images[2]!.public_id}
                format={images[2]!.format}
                blurDataUrl={images[2]!.blurDataUrl!}
              />
            </div>
            <div className="relative h-[200px]  lg:w-[34%]  ">
              <CloudinaryImage
                public_id={images[10]!.public_id}
                format={images[10]!.format}
                blurDataUrl={images[10]!.blurDataUrl!}
              />
            </div>
          </div>

          <div className="mx-auto px-4 pt-10 md:pt-[80px]">
            <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 ">
              <div className="flex flex-col gap-3 pt-5">
                <div className="relative h-[400px] w-full md:h-[600px] ">
                  <Image
                    alt="tazama gallery photos"
                    className="object-cover "
                    placeholder="blur"
                    blurDataURL={images[8]?.blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[8]?.public_id}.${images[8]?.format}`}
                    layout="fill"
                  />
                </div>
              </div>
              <div>
                <p className="pt-5 text-lg font-bold text-primary lg:text-xl">
                  Day 8 - 10 Zanzibar
                </p>
                <ul className="list-disc pl-10">
                  <li className="space-y-5 pt-5">
                    {" "}
                    With idyllic beaches at your doorstep, indulge in leisurely
                    days under the sun, perhaps embarking on a mesmerizing
                    sunset dhow cruise or savoring a private dinner by the
                    water's edge. The rich cultural tapestry of Zanzibar adds a
                    layer of depth to this romantic escape, promising an
                    unforgettable honeymoon experience immersed in beauty,
                    tranquility, and the warmth of Swahili hospitality.
                  </li>
                  <li>Meals: Breakfast, Lunch, Dinner</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mx-auto mt-5 flex w-full flex-col  space-y-1 px-4 lg:flex-row lg:space-x-1 lg:space-y-0">
            <div className="relative h-[200px] lg:w-[33%] ">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[200px]  lg:w-[33%]  ">
              <CloudinaryImage
                public_id={images[2]!.public_id}
                format={images[2]!.format}
                blurDataUrl={images[2]!.blurDataUrl!}
              />
            </div>
            <div className="relative h-[200px]  lg:w-[34%]  ">
              <CloudinaryImage
                public_id={images[10]!.public_id}
                format={images[10]!.format}
                blurDataUrl={images[10]!.blurDataUrl!}
              />
            </div>
          </div>
        </>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "beach_holidays" });
  return {
    props: {
      images,
    },
  };
}
