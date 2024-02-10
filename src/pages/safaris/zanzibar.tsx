import React, { useEffect } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import Image from "next/legacy/image";

const Page = () => {
  useEffect(() => {
    setPageTitle("Zanzibar Safaris");
  }, []);

  return (
    <>
      <PrimaryHeader image={`beach-holiday.webp`} title="Zanzibar" />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">An Archipelago in the Indian ocean</h3>
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
              <Image
                src="/assets/images/gallery/honey-moon-trip.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <Image
                src="/assets/images/gallery/classic-safaris.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
