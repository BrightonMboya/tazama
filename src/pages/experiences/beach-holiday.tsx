import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import FamilyItinerary from "~/components/itenaries/family";
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
    setPageTitle("Beach Holidays");
  }, []);

  return (
    <>
      <PrimaryHeader image="classic-safaris.webp" title="Beach Holidays" />

      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Beach Holiday</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Discover the allure of Africa's stunning coastlines with Tazama
            Africa Safaris, where the rhythm of the waves and the tranquility of
            pristine beaches create the perfect setting for relaxation and
            rejuvenation. Our beach holidays are designed for those who seek a
            blissful escape to some of the most beautiful shores in the world.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Envision yourself lounging on the sun-kissed beaches of Zanzibar,
            where the gentle lapping of azure waters complements the peaceful
            ambiance. Or perhaps, find your paradise along the secluded bays of
            Mozambique, where the ocean's hues merge seamlessly with the sky.
            Each destination is a treasure trove of serenity, offering a unique
            beach experience.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Our beach holidays go beyond the typical seaside retreat. They are
            an invitation to explore and engage with the vibrant cultures and
            rich histories of Africa's coastal regions. From the historic Stone
            Town in Zanzibar to the vibrant local markets and charming fishing
            villages, each location offers a glimpse into the soul of coastal
            Africa.
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
            We understand that a beach holiday is as much about the experiences
            as it is about the setting. That's why we offer a range of
            activities to enhance your stay. Indulge in a rejuvenating spa
            treatment, embark on a scuba diving adventure to explore vibrant
            coral reefs, or simply enjoy a romantic sunset dhow cruise.
            <br />
            <br />
            For those seeking a more active beach holiday, we offer water
            sports, deep-sea fishing, and snorkeling adventures. Each activity
            is an opportunity to make the most of the stunning coastal
            environment, whether you're seeking thrill or tranquility.
            <br />
            <br />
            Let us craft your perfect beach holiday, a balance of relaxation and
            adventure amidst Africa's breathtaking coastal landscapes. Get in
            touch with Tazama Africa Safaris, and let's start planning your
            escape to the shores of Africa, where endless blue skies and golden
            sands await.
          </p>
        </div>
      </div>

      {/* <FamilyItinerary /> */}

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
