import React, { useEffect } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import Image from "next/legacy/image";
import cloudinary from "~/lib/cloudinary";
import getBase64ImageUrl, { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";

const Page = ({ images }: { images: ImageProps[] }) => {
  //^?
  useEffect(() => {
    setPageTitle("Kilimanjaro");
  }, []);

  return (
    <>
      <PrimaryHeader
        image={`mount-kilimanjaro.webp`}
        title="Mount Kilimanjaro"
      />
      <div className="mx-auto  max-w-7xl px-4 md:px-8 ">
        <div className=" py-8">
          <h3 className="text-4xl text-[#A87133]">
            The tallest Summit in Africa{" "}
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Welcome to Tazama's Kilimanjaro Treks - where the spirit of
            adventure meets the majesty of Africa's highest peak. Prepare to
            embark on an extraordinary journey through the heart of Tanzania's
            wilderness, where every step brings you closer to the summit of
            Kilimanjaro
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            As you set foot on Kilimanjaro's slopes, you'll be stepping into a
            world of unparalleled natural beauty and untamed wilderness. From
            dense rainforests teeming with life to rugged alpine deserts, the
            landscapes you'll encounter on your trek are as diverse as they are
            breathtaking.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            At Tazama, we offer treks on five of Kilimanjaro's most renowned
            routes: Machame, Lemosho, Rongai, Umbwe and the Northern Circuit.
            Each route presents its own unique challenges and rewards, ensuring
            that every adventurer finds the perfect path to the summit.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371] ">
            The <span className="font-bold text-primary">Machame route</span>,
            known affectionately as the "Whiskey Route," beckons with its
            stunning scenery and rugged terrain. Trekkers on this route navigate
            through ancient forests, rocky ridges, and sweeping moorlands,
            culminating in the thrilling ascent to the summit.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <CloudinaryImage
                public_id={images[11]!.public_id}
                format={images[11]!.format}
                blurDataUrl={images[11]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <CloudinaryImage
                public_id={images[10]!.public_id}
                format={images[10]!.format}
                blurDataUrl={images[10]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            For those seeking a more gradual ascent, the{" "}
            <span className="font-bold text-primary">Lemosho route</span> offers
            a scenic journey through pristine wilderness areas. With ample time
            for acclimatization, trekkers can immerse themselves fully in the
            awe-inspiring beauty of Kilimanjaro.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            For the ultimate Kilimanjaro experience, the{" "}
            <span className="font-bold text-primary">
              Northern Circuit route
            </span>{" "}
            awaits, offering unparalleled panoramic views and a sense of remote
            wilderness. This lesser-traveled route promises solitude and
            serenity as you traverse the northern slopes of the mountain.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The <span className="font-bold text-primary">Rongai route</span>,
            originating from the north, offers a quieter and less congested path
            to the summit. Trekkers on this route enjoy stunning vistas of the
            Kenyan plains and the chance to witness Kilimanjaro's awe-inspiring
            sunrise.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Meanwhile, the{" "}
            <span className="font-bold text-primary">Umbwe route</span>, known
            for its steep and challenging terrain, attracts seasoned adventurers
            seeking a more direct ascent to the summit. With its rugged beauty
            and thrilling ascent, the Umbwe route offers a true test of
            endurance and determination.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center space-y-5">
            <div className="relative h-[400px] w-full ">
              <CloudinaryImage
                public_id={images[13]!.public_id}
                format={images[13]!.format}
                blurDataUrl={images[13]!.blurDataUrl!}
              />
            </div>
          </div>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            No matter which route you choose, Tazama ensures an unforgettable
            experience with our seasoned guides, top-quality equipment, and
            personalized service. From the moment you arrive in Tanzania until
            you stand triumphantly atop the summit, our team is committed to
            ensuring your safety, comfort, and enjoyment every step of the way.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Embark on the adventure of a lifetime with Tazama's Kilimanjaro
            Treks and experience the thrill of conquering Africa's highest peak.
            Are you ready to write your own chapter in the story of Kilimanjaro?
            Join us and let the journey begin.
          </p>
        </div>

        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">Why Trek with Tazama</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            When it comes to embarking on the adventure of a lifetime, we
            understand that choosing the right trekking company is crucial.
            Here's why Tazama stands out from the rest:
          </p>
          <ul className=" list-outside text-xl text-[#757371]">
            <li className="font-bold text-primary">Safety First</li>
          </ul>
          <ul className="list-inside list-disc pl-5 text-xl text-[#757371]">
            <li>Guides certified as Wilderness First Responders</li>
            <li>Twice daily health monitoring</li>
            <li>Pulse oximeters and emergency oxygen on every climb</li>
            <li>
              Experienced guides and comprehensive emergency plans ensure
              safety.
            </li>
          </ul>

          <ul className=" list-outside pt-5 text-xl text-[#757371]">
            <li className="font-bold text-primary">Responsible Travel:</li>
          </ul>
          <ul className="list-inside list-disc pl-5 text-xl text-[#757371]">
            <li>Adherence to Leave No Trace principles.</li>
            <li>Fair and ethical treatment of all mountain crew</li>
          </ul>

          <ul className=" list-outside pt-5 text-xl text-[#757371]">
            <li className="font-bold text-primary">High-Quality Equipment:</li>
          </ul>
          <ul className="list-inside list-disc pl-5 text-xl text-[#757371]">
            <li>4 season expedition sleeping tents</li>
            <li>Dining tents with durable tables and chairs</li>
            <li>Hygienic private toilets</li>
            <li>4-season sleeping bags</li>
          </ul>

          <ul className=" list-outside pt-5 text-xl text-[#757371]">
            <li className="font-bold text-primary">Professional Team:</li>
          </ul>
          <ul className="list-inside list-disc pl-5 text-xl text-[#757371]">
            <li>
              Experienced guides with extensive knowledge of Kilimanjaro's
              terrain and ecosystems.
            </li>
            <li>
              Certified in Wilderness First Aid and trained in emergency
              response procedures.
            </li>
            <li>
              Passionate about sharing the mountain's history, culture, and
              biodiversity.
            </li>
            <li>
              Dedicated porters and support staff committed to ensuring a
              seamless trekking experience.
            </li>
            <li>
              Multilingual team members capable of providing assistance and
              guidance in various languages.
            </li>
          </ul>

          <ul className=" list-outside pt-5 text-xl text-[#757371]">
            <li className="font-bold text-primary">Personalized Service:</li>
          </ul>
          <ul className="list-inside list-disc pl-5 text-xl text-[#757371]">
            <li>
              Tailored service catering to individual needs and preferences .
            </li>
            <li>
              Customized itineraries to ensure a dream trekking experience.
            </li>
          </ul>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5">
            <div className="relative h-[400px] w-full ">
              <CloudinaryImage
                public_id={images[9]!.public_id}
                format={images[9]!.format}
                blurDataUrl={images[9]!.blurDataUrl!}
              />
            </div>
          </div>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Choose Tazama Africa for your Kilimanjaro trek and embark on a
            journey of a lifetime with confidence and peace of mind. With our
            unwavering commitment to safety, responsible travel, high-quality
            equipment, and professional team, we guarantee an experience you'll
            never forget.
          </p>
        </div>
        {/* @ts-ignore */}
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Page;
export async function getStaticProps() {
  const results = await cloudinary.v2.search
    // .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .expression(`folder:kilimanjaro`)
    .sort_by("public_id", "desc")
    // .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i]!.blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
