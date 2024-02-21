import React, { useEffect } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import Image from "next/legacy/image";

const Page = () => {
  useEffect(() => {
    setPageTitle("Mount Meru");
  }, []);

  return (
    <>
      <PrimaryHeader image={`mount-meru.webp`} title="Mount Meru" />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className=" py-8">
          <h3 className="text-4xl text-[#A87133]">
            Welcome to Mount Meru: Tanzania's Hidden Gem
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Embark on a journey to Mount Meru, Tanzania's lesser-known but
            equally captivating peak. Nestled in the heart of Arusha National
            Park, Mount Meru offers a thrilling trekking experience amidst
            breathtaking landscapes and diverse wildlife.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            As the second highest mountain in Tanzania, standing proudly at 4565
            m / 14,977 ft, Mount Meru offers a captivating trekking experience
            that's second to none. Serving as an ideal acclimatization trek
            before ascending Mount Kilimanjaro or as a standalone adventure,
            Mount Meru promises a journey filled with unparalleled beauty and
            adventure.
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

        <div className="">
          {/* <h3 className="text-4xl text-[#A87133]">Sundowners in nature</h3> */}
          <p className="mb-3 text-xl text-[#757371]">
            Completed in either 3 or 4 days, the experience offers a diverse
            range of landscapes, flora and fauna. Accompanied by a park ranger,
            it’s a trekking experience that is physically challenging and truly
            unique.
          </p>
        </div>
       
      </div>
    </>
  );
};

export default Page;
