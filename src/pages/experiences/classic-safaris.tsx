import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";
import ClassicSafaris from "~/components/itenaries/classic-safaris"
const honeyMooners = [
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

const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[80%] md:h-[300px] lg:w-[400px]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" />
    </div>
  );
};
const AboutPage = () => {
  React.useEffect(() => {
    setPageTitle("Classic Safaris");
  }, []);

  return (
    <>
      <PrimaryHeader image="discovery.webp" title="Classic Safaris" />

      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Classic Safaris</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Welcome to the Classic Safari with Tazama Africa Safaris, a journey
            that encapsulates the essence of the African wilderness in a
            compact, yet comprehensive adventure. Perfect for those who wish to
            soak in the splendor of Tanzania's most iconic landscapes and
            wildlife within a limited timeframe, our Classic Safari is an
            excursion into the heart of the natural world.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Envision a safari where every day is a journey through some of
            Africa's most renowned and wildlife-rich habitats. Our 5-day
            itinerary is thoughtfully crafted to showcase the diverse beauty of
            the Serengeti, the marvels of the Ngorongoro Crater, and the hidden
            gems of Tarangire National Park. Whether you're basking in the
            golden sunsets of the Serengeti, witnessing the grandeur of
            Ngorongoro's natural amphitheater, or exploring the elephant-dotted
            landscapes of Tarangire, this safari promises a parade of
            unforgettable moments.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The Classic Safari is a celebration of nature's wonders. In the
            Serengeti, watch as the savannah comes alive with the Great
            Migration, a spectacle of life in its most unfiltered form. In the
            Ngorongoro Crater, a UNESCO World Heritage Site, encounter a diverse
            array of species, from the elusive black rhino to the pink-hued
            flamingos adorning the soda lakes. Tarangire, with its
            baobab-studded landscapes and dense elephant population, offers a
            quieter, yet equally captivating wildlife viewing experience.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <Image
              src="/assets/images/gallery/discovery.webp"
              className="object-cover"
              layout="fill"
              alt="cover-img"
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <Image
              src="/assets/images/gallery/group-departure.webp"
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
            Our accommodations, ranging from comfortable mid-range lodges to
            luxurious camps, are carefully selected to enhance your experience.
            Nestled in prime locations, they provide not just a place to rest,
            but a serene retreat to reflect on the day's adventures.
            <br />
            <br />
            Are you ready to delve into the wild heart of Tanzania and discover
            the timeless allure of its most celebrated parks? Join us at Tazama
            Africa Safaris for a Classic Safari that’s as enriching as it is
            exhilarating. Your journey through the wild, filled with awe and
            wonder, awaits.
            <br />
            <br />
          </p>
        </div>
      </div>

      <ClassicSafaris />

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <div className="mt-10 flex flex-col items-center justify-center">
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
