import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import HoneyMooners from "~/components/itenaries/honeymooners"

import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";

export const honeyMooners = [
  {
    id: 1,
    src: "/assets/images/gallery/family-trip.webp",
  },
  {
    id: 2,
    src: "/assets/images/gallery/maasai.webp",
  },
  {
    id: 3,
    src: "/assets/images/gallery/blog.webp",
  },
  {
    id: 4,
    src: "/assets/images/gallery/offer.webp",
  },
  {
    id: 5,
    src: "/assets/images/gallery/classic-safaris.webp",
  },
  {
    id: 6,
    src: "/assets/images/gallery/discovery.webp",
  },
];

export const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[300px] md:w-[80%] md:h-[300px] lg:w-[400px]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" />
    </div>
  );
};
const AboutPage = () => {
  React.useEffect(() => {
    setPageTitle("HoneyMoon Safaris");
  }, []);

  return (
    <>
      <PrimaryHeader image="honey-moon-trip.webp" title="Honeymooners" />

   
      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">HoneyMoon Safaris</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Welcome to your first adventure as a newlywed couple with Tazama
            Africa Safaris. Imagine a honeymoon that not only celebrates your
            love but also immerses you in the heartbeat of Africa, where wild
            nature meets serene island bliss. We're dedicated to weaving these
            elements into a tapestry of unforgettable memories for you.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Your journey begins with the raw beauty of Tanzania's wildlife. The
            untamed expanse of the Serengeti and the wildlife-rich Ngorongoro
            Crater offer a front-row seat to nature's grandeur. Picture
            yourselves sharing the thrill of watching a pride of lions lounging
            in the morning sun or elephants gracefully traversing the savannah.
            These moments in the wild create a bond with nature that mirrors the
            deep connection you share as a couple.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Transitioning from the thrilling safaris, your adventure mellows
            into the tranquil embrace of Zanzibar's enchanting beaches. Here,
            the pace slows, and the romantic ambience of secluded resorts sets
            the tone for your island retreat. Explore the historic alleys of
            Stone Town, indulge in the island's unique blend of cultures and
            cuisines, and bask in the warmth of sun-kissed shores. Your days can
            end with a private beach dinner under the stars or a serene sunset
            cruise, adding a touch of romance to each moment.
          </p>
        </div>
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
      
      <div className="mx-auto mt-10 max-w-7xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            We understand that every couple is unique, and so should be their
            honeymoon experience. That's why we tailor each journey to fit your
            dreams. Whether you desire more time amidst the wild, crave endless
            days by the ocean, or a balanced mix of both, our team is here to
            craft your perfect honeymoon. Your preferences and dreams guide our
            planning, ensuring your honeymoon is as individual as your love
            story.
            <br />
            <br />
            Ready to turn your dream honeymoon into reality? Get in touch with
            us, and let's start planning your unforgettable African safari and
            serene Zanzibar retreat. Your adventure of a lifetime awaits, and
            we're excited to be a part of it.
            <br />
            <br />
          </p>
        </div>
      </div>

      <HoneyMooners/>

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="mt-10 lg:mt-[10px] ">
          <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
