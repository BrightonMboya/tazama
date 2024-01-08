import React, { useEffect } from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import { setPageTitle } from "../../helpers";
import { safaris } from "~/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";

const Page = () => {
  useEffect(() => {
    setPageTitle("Itenaries");
  }, []);

  return (
    <>
      <PrimaryHeader
        image={`maasai.webp`}
        title="Unique Tailored Safaris
"
      />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div id="offers" className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            Explore the Heartbeat of the Wild.
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Dive deep into the wonders of the African landscape, where every
            safari is a unique narrative. Below, you'll find an array of curated
            safari experiences tailored to fulfill the dreams of every traveler.
            From the intimate moments of a honeymoon safari and the bonding
            adventures of family excursions to the immersive experiences for
            wildlife and nature enthusiasts, there's a story waiting to be
            lived. Choose your journey.
          </p>
          <hr className="mt-4 border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safaris.map((safari, index) => (
            <motion.div
              initial={{
                opacity: 0,
                translateY: 20,
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
              }}
              key={index}
            >
              <Link href={safari.href} className="relative cursor-pointer">
                <>
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={`/assets/images/gallery/${safari.img}`}
                      alt=""
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs text-[#A87133] sm:text-sm md:text-base">
                    {safari.name}
                  </p>
                </>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
