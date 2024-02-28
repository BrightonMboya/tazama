import React, { useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import { CloudinaryImage } from "~/components/ui/GalleryImage";
import useFetchImages from "~/hooks/useFetchImages";
import EnquireNow from "~/components/EnquireNow";


export type contentSectionData = {
  image: string;
  title: string;
  reverse: boolean;
  description: string;
  blurDataUrl: any;
};

const ContentSection = (props: contentSectionData) => {
  return (
    <>
      <div
        className={`
       
        flex
      mt-10
        w-full
        flex-col-reverse
        items-center overflow-hidden
        sm:mt-52
       
        ${props.reverse ? "justify-between md:flex-row-reverse" : "md:flex-row"}
      `}
      >
        <div className={`h-[75vh] w-full md:max-w-[50%] relative`}>
          <div>
            <Image
              alt="tazama gallery photos"
              className="object-cover"
              style={{
                transform: "translate3d(0, 0, 0)",
                imageRendering: "crisp-edges",
              }}
              placeholder="blur"
              blurDataURL={props.blurDataUrl}
              src={props.image}
              layout="fill"
            />
          </div>
        </div>

        {/* Container for the text content */}
        <div
          className={` z-10 mt-10  w-full bg-[#f4f1ec] px-6 md:max-w-[55rem] md:px-10 lg:px-20 `}
        >
          <h3 className={`mb-4 pt-10 text-3xl text-black lg:text-5xl`}>
            {props.title}
          </h3>

          {/* Paragraph with delayed fade and slide-in animation */}
          <p
            className={`
              font-now
              mb-8
              text-sm leading-loose
              text-[#757371]
              sm:text-base
            `}
          >
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

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

      <ContentSection
        image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[7]?.public_id}.${images[7]?.format}`}
        description="
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
    "
        blurDataUrl={images[7]?.blurDataUrl}
        title=" Day 2 - Tarangire National Park"
        reverse={false}
      />
      <div className="mx-auto flex w-full flex-col mt-5  space-y-1 px-4 lg:flex-row lg:space-x-1 lg:space-y-0">
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
      <ContentSection
        image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[7]?.public_id}.${images[7]?.format}`}
        description="
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
    "
        blurDataUrl={images[7]?.blurDataUrl}
        title=" Day 2 - Tarangire National Park"
        reverse={true}
      />
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

      <ContentSection
        image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[7]?.public_id}.${images[7]?.format}`}
        description="
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
    "
        blurDataUrl={images[7]?.blurDataUrl}
        title=" Day 2 - Tarangire National Park"
        reverse={false}
      />

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
