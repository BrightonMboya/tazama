import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import { aboutPageContentData } from "~/data/about-data";
import ContentSection, {
  contentSectionData,
} from "~/components/ContentSection";
import { array } from "fast-web-kit";
import Carousel from "~/components/Carousel";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";

const AboutPage = () => {
  React.useEffect(() => {
    setPageTitle("About");
  }, []);

  return (
    <>
      <PrimaryHeader image="about.webp" title="About Tazama" />

      {/* about tazama section */}
      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">About Tazama</h3>
          <p className="font-franklin  mb-3 mt-5 text-xl text-[#757371]">
            TAZAMA specializes in curating unforgettable memories that will have
            you reminiscing with your loved ones for years to come. Boasting
            over 15 years of expertise in the safari industry, we've mastered
            the art of crafting seamless journeys.
          </p>

          <p className="font-franklin mb-3 mt-5 text-xl text-[#757371] ">
            Our exceptional guides and dedicated staff are seasoned experts,
            ensuring every aspect of your trip is flawlessly executed. Because
            every trip is as unique as you, a journey with us brings you up
            close to these extraordinary ecosystems at your desired pace. We
            forge partnerships with suppliers who echo our commitment to
            environmentally sustainable practices and prioritize local, organic,
            and women-owned businesses whenever possible.
          </p>
          <p className="font-franklin mb-3 mt-5 text-xl text-[#757371] ">
            Whether you're conquering the slopes of Kilimanjaro or exploring the
            vast Serengeti plains, we pledge an experience that is genuine,
            thrilling, and awe-inspiring! Join us as we eagerly unveil the
            beauty of our home to you.
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
        <div className="font-franklin">
          <p className="font-franklin mb-3 mt-5 text-xl text-[#757371]">
            At Tazama, we don't just offer safaris; we deliver bespoke
            adventures tailored to the dreams of each traveler. With over 15
            years of experience under our belt, we have perfected the recipe for
            luxury and personalized experiences that resonate with the soul of
            Africa. Our journeys are more than travel; they're a passage into
            the heart of wilderness luxury.
            <br />
            <br />
            From the moment you step into Tanzania's vibrant landscapes, our
            exceptional guides—true connoisseurs of the wild—will lead you
            through an intimate dance with nature. Our staff, meticulous in
            their craft, attend to every detail, ensuring your adventure unfolds
            with the precision of a leopard's pounce. Personalization is not
            just a word to us; it's a promise. Your aspirations shape our
            itineraries, and your pace becomes the rhythm of your exploration.
            The whispers of the Serengeti, the challenges of Kilimanjaro, and
            the serenity of the Ngorongoro Crater await your presence.
            <br />
            <br />
            In harmony with our luxurious ethos, we choose partners who share
            our vision of sustainability and community. By embracing local,
            organic, and women-owned businesses, we ensure that your journey
            with Tazama enriches not just your memories but also the lands and
            lives you touch.
            <br />
            <br />
            Join us for an authentic, thrilling, and awe-inspiring voyage into
            the beauty of our homeland. Tazama is more than a safari company—we
            are your gateway to a Tanzania you've never imagined, where luxury
            meets the untamed, and every moment is a story waiting to be told.
          </p>
        </div>
      </div>
      {/* <div className="mt-5 md:mb-[8rem]  lg:mb-[10rem] lg:mt-0">
        {array
          .sort(aboutPageContentData, "asc", "rank")
          .map((content: contentSectionData, index: number) => (
            <section className="sm:-mb-72" key={index}>
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
      </div> */}
      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
    </>
  );
};

export default AboutPage;
