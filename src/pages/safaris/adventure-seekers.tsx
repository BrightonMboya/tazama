import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import {
  TwoDayTripItienary,
  ThreeDayTrip,
  FourDayTrip,
  FiveDayTrip,
  SixDayTrip,
  SevenDayTrip,
} from "~/components/itenaries/adventureSeekers/DayTripsItienaries";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";

const AboutPage = () => {
  React.useEffect(() => {
    setPageTitle("Adventure Seekers");
  }, []);

  return (
    <>
      <PrimaryHeader image="classic-safaris.webp" title="Adventure Seekers" />

      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Adventure Seekers</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Step into a world where every day is an exhilarating new chapter
            with Tazama Africa Safaris, your gateway to Africa's untamed beauty
            and thrilling adventures. Our safaris are designed for those who
            crave the pulse of adventure and the joy of discovery.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Your journey with us is a tapestry of diverse experiences. Imagine
            tracking the Big Five during a wildlife safari in the heart of the
            Serengeti, feeling your heart race as you witness nature's raw
            power. Venture to the Ngorongoro Crater, where each turn reveals
            another aspect of the wilderness waiting to be explored. Our
            itineraries are carefully crafted to satisfy your thirst for
            adventure, blending wildlife encounters with rich cultural
            immersions.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The adventure extends beyond the typical safari. Feel the rush of
            adrenaline as you partake in activities like hot air ballooning over
            vast savannas, trekking through lush landscapes, or navigating the
            rapids of mighty rivers. Each activity is an opportunity to
            challenge yourself and create memories that last a lifetime.
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
            For those intrigued by culture, we offer immersive experiences that
            bring you face-to-face with local traditions and lifestyles.
            Participate in authentic cultural exchanges, learning from the
            communities that have lived in harmony with the African wilderness
            for centuries.
            <br />
            <br />
            At Tazama Africa Safaris, we understand that adventure is personal.
            That's why we tailor each itinerary to your preferences, ensuring
            your safari adventure is as unique as you are. Whether you're a solo
            traveler seeking solitude and thrill or an adventure-seeking couple
            looking to explore new horizons together, we're here to make your
            dream safari a reality.
            <br />
            <br />
            Dive into the adventure of a lifetime with Tazama Africa Safaris.
            Contact us today, and let's craft your personalized journey into
            Africa's heart of adventure.
          </p>
        </div>
      </div>

      <TwoDayTripItienary />
      <ThreeDayTrip />
      <FourDayTrip />

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />

      <FiveDayTrip />
      <SixDayTrip />
      <SevenDayTrip />
    </>
  );
};

export default AboutPage;
