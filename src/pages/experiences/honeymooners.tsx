import { HomeContactUs } from "~/components/HomeContactUs";
import { carouselData } from "~/data/data";
import { motion } from "framer-motion";
import PrimaryHeader from "~/components/PrimaryHeader";
import React from "react";
import Image from "next/legacy/image";
import ContentSection, {
  contentSectionData,
} from "~/components/ContentSection";
import { array } from "fast-web-kit";

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
export const homePageContentData: contentSectionData[] = [
  {
    rank: 1,
    reverse: true,
    image: "classic-safaris.webp",
    actionTitle: "Our Story",
    title: " We are Tazama – a new luxury travel company",
    description: `Our outstanding guides and staff are experts who ensure your trip is seamless from start to finish. We offer authentic safaris, giving you up an up-close glimpse of these incredible ecosystems at the pace you'd prefer.\n
        We partner with outfitters that share our passion of environmentally sustainable business practices and commit to buying local, organic and women-owned where possible.\n
        Whether it's on the slopes of Kilimanjaro or the plains of the Serengeti, we promise to deliver an experience that is authentic, adventurous, and awe-inspiring! We can't wait to share our home with you.`,
  },
  {
    rank: 2,
    reverse: false,
    image: "honey-moon-trip.webp",
    title: "LOCALLY OWNED & OPERATED",
    description:
      "When you travel with us, we'll be with you every step of the way. From the minute you touch down on the runway our talented, dedicated, and passionate staff are there to make sure you have the trip of a lifetime. We can't wait to share our home with you.",
  },
];

const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[80%] md:h-[300px] lg:w-[400px]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" />
    </div>
  );
};
export default function Page() {
  return (
    <>
      <PrimaryHeader
        image="home.webp"
        title="Your Next Adventure Awaits"
        subTitle="connect, celebrate & create memories"
      />

      <div className="sm:mb-52">
        {array
          .sort(homePageContentData, "asc", "rank")
          .map((content: contentSectionData, index: number) => (
            <section className=" sm:-mb-72 " key={index}>
              <ContentSection
                rank={content.rank}
                title={content.title}
                image={content.image}
                action={content.action}
                reverse={content.reverse}
                actionTitle={content.actionTitle}
                description={content.description}
              />
            </section>
          ))}
      </div>

      <div className="mx-auto max-w-[82rem] px-4 xl:px-8">
        <div className="mx-auto mb-8 w-full px-4 py-4 text-[#757371] sm:w-2/3">
          <motion.h3
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
              },
            }}
            className="mb-4 text-center text-4xl lg:text-5xl"
          >
            Authentic & timeless adventures
          </motion.h3>
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: 0.2,
              },
            }}
            className="text-center"
          >
            Start exploring some of sample itineraries and see where an
            adventure with Tazama Africa can take you.
          </motion.p>
        </div>
        <br />
        <div className="mt-10 lg:mt-[10px] ">
          <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <HomeContactUs />
    </>
  );
}
