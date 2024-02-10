import React, { useEffect } from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import { setPageTitle } from "../../helpers";
import Image from "next/legacy/image";

const Page = () => {
  useEffect(() => {
    setPageTitle("Blogs");
  }, []);

  return (
    <>
      <PrimaryHeader image={`family-trip.webp`} title="Tailor made safaris" />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            Discover the Heart of Africa with Tazama.
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            As soon as your plane touches down on the terrains of Tanzania, the
            Tazama family is ready to warmly greet you. Being an owned and
            operated business, we take pride in providing a truly personal
            experience ensuring that your safari adventure is not merely a
            vacation but rather a homecoming. Our team consists of locals who
            are dedicated, to guiding you through our awe inspiring landscapes
            creating memories at every step of your journey.
          </p>

          <h3 className="mt-10 text-4xl text-[#A87133]">
            Tailor made Safari Trip with Expertise
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            At Tazama we believe that the key, to a safari, lies in planning
            that caters to your specific preferences. Our knowledgeable guides
            and staff who have an understanding of the land and its natural
            rhythms are dedicated to curating your experience from beginning to
            end. We start by having a conversation with you to grasp your pace,
            interests and what you hope to encounter in the heart of Africa.
            Whether you are captivated by the peaks of Kilimanjaro or the plains
            teeming with wildlife in the Serengeti we meticulously design your
            journey, with expertise and enthusiasm.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <Image
                src="/assets/images/gallery/adventure.webp"
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
          <h3 className=" text-4xl text-[#A87133]">
            Experiencing Safari the Best Way: Authentically and Sustainably
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The ultimate safari experience is one that deeply connects with you
            self providing a glimpse into the breathtaking beauty and incredible
            diversity of African ecosystems. Tazama is committed to delivering
            an adventure that immerses you in nature while respecting its
            balance. We collaborate with outfitters and prioritize eco friendly
            practices to ensure that your journey not only amazes but also
            contributes to conservation efforts. Our safaris allow you to
            explore at your pace guaranteeing that every wildlife encounter is
            respectful, enriching, and truly awe inspiring.
          </p>

          <h3 className=" mt-10 text-4xl text-[#A87133]">
            Where Your Safari Adventure Begins
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Every Tazama safari starts in the country of Tanzania, which is
            known for its variety of wildlife and stunning natural beauty.
            Depending on your customized travel plan your journey may begin at
            the base of Mount Kilimanjaro, the city streets of Arusha, or the
            peaceful shores of Zanzibar. Each location provides an entry point
            to experience Tanzania landscapes creating an ideal setting to
            kickstart your thrilling adventure.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5">
            <div className="relative h-[400px] w-full ">
              <Image
                src="/assets/images/gallery/about.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>
          </div>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The Experiencing the wonders of Tanzania shouldn't be rushed. To
            truly appreciate the essence of this country we suggest planning a
            safari lasting anywhere, from 4 to 14 days. This will give you time
            to explore the landscapes and witness the incredible variety of
            wildlife at a relaxed pace. Whether your preference is being awe
            inspired by the Great Migration exploring baobab forests or simply
            immersing yourself in the tranquility of the bush Tazama ensures
            that every moment is cherished.
          </p>
        </div>

        <div className="mb py-8">
          <h3 className="text-4xl text-[#A87133]">Welcoming You to Our Home</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Here, at Tazama we find joy in sharing the breathtaking beauty of
            Tanzania with you. As a company rooted in our community and operated
            by locals we aren't just tour guides; we consider ourselves as
            ambassadors of our homeland excited to warmly welcome you to the
            heart of Africa. Allow us to accompany you on a voyage where every
            sunset paints a tale every encounter with wildlife is a precious gem
            and every single moment becomes an everlasting memory.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Come join us and explore the essence of Tanzania through the eyes of
            Tazama. It's not a safari—it's a return, to your home.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
