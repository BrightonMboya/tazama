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
    setPageTitle("Wildlife Adventures");
  }, []);

  return (
    <>
      <PrimaryHeader image="classic-safaris.webp" title="Wildlife Adventures" />

      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Wildlife Adventures</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Step into the wild heart of Africa with Tazama Africa Safaris, where
            your passion for wildlife and nature transforms into an
            extraordinary journey. For enthusiasts like you, each safari is more
            than just a trip; it's an immersive plunge into the depths of the
            natural world, a quest to connect with the untamed and the free.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Your experience with us is a deep dive into the diverse ecosystems
            of Africa. Envision yourself in the midst of the Serengeti's endless
            plains or the lush wetlands of the Okavango Delta, each area teeming
            with wildlife. These are the moments that define a true wildlife
            enthusiast's dream - up close with nature, observing the intricate
            details of animal behaviors and interactions in their natural
            habitats.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Our safaris do more than just showcase wildlife; they educate and
            inspire. Led by our expert guides, who are as passionate about
            wildlife conservation as they are knowledgeable, you'll gain
            insights into the delicate balance of Africa's ecosystems. This
            educational aspect enriches your experience, offering a deeper
            understanding of the wildlife you encounter and their role in the
            environment.
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
            With a strong commitment to sustainable and responsible tourism, we
            ensure that your journey contributes positively to wildlife
            conservation. We carefully choose eco-friendly lodges and
            experiences that align with our ethos, helping to preserve the
            natural wonders for future generations.
            <br />
            <br />
            Whether you're a bird watching aficionado, a wildlife photography
            enthusiast, or simply someone who loves the raw beauty of nature,
            our safaris are crafted to cater to your specific interests. From
            the great wildebeest migration to the quiet observation of rare
            species, each day is a new chapter in your African wildlife story.
            <br />
            <br />
            Let's create your ultimate wildlife safari, a journey where each
            sighting and sound adds to a lifelong portfolio of memories. Reach
            out to us, and together, we'll tailor an adventure that brings you
            face-to-face with the wonders of Africa's wilderness.
          </p>
        </div>
      </div>

      <FamilyItinerary />

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
