import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import OffBeatenItenary from "~/components/itenaries/off-beaten-path";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";

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
    setPageTitle("Off the Beaten Path");
  }, []);

  return (
    <>
      <PrimaryHeader image="classic-safaris.webp" title="Off the Beaten Path" />

      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Off the Beaten Path</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Welcome to the Off the Beaten Path Safari with Tazama Africa
            Safaris, where we take you beyond the usual trails to explore
            Tanzania's hidden gems. This safari experience is tailored for those
            who seek adventure in the less-traveled corners of the wilderness,
            where the beauty of nature is raw and unspoiled.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Dive into a safari experience that’s far from ordinary. Our
            carefully crafted itinerary takes you to remote destinations,
            offering an intimate connection with the wild. You’ll traverse
            landscapes that few have witnessed, from secluded valleys and
            untouched forests to hidden waterways teeming with wildlife.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Experience the thrill of uncovering secret spots within well-known
            reserves or venturing into lesser-known parks where wildlife roams
            freely, away from the crowds. These off-the-beaten-path locations
            are sanctuaries for rare species and offer unparalleled
            opportunities for wildlife observation and photography.
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
            If you’re longing for an adventure that takes you to the heart of
            the wild, untouched by mass tourism, our Off the Beaten Path Safari
            is your gateway to a different kind of safari experience. It's an
            adventure that promises not just sightings, but stories; not just
            views, but visions.
            <br />
            <br />
            Get in touch with us at Tazama Africa Safaris to start planning your
            journey into the lesser-known, yet equally mesmerizing, wonders of
            Tanzania. Your adventure through the hidden treasures of the wild
            awaits.
          </p>
        </div>
      </div>

      <OffBeatenItenary />

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
