/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import PrimaryHeader from "~/components/PrimaryHeader";
import useFetchImages from "~/hooks/useFetchImages";
import { type ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import { Kilimanjaro_keywords } from "~/lib/constants";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO title="Kilimanjaro" keywords={Kilimanjaro_keywords} />
      <PrimaryHeader
        image={`mount-kilimanjaro.webp`}
        title="Mount Kilimanjaro"
      />
      <div className="mx-auto  max-w-5xl px-4 md:px-8 mt-16">
        <div className=" py-8">
          <h3 className="text-4xl text-primary">
            The Tallest Summit in Africa
          </h3>
          <p className="mb-3 mt-5  text-darker/85">
            Welcome to Tazama's Kilimanjaro Treks - where the spirit of
            adventure meets the majesty of Africa's highest peak. Prepare to
            embark on an extraordinary journey through the heart of Tanzania's
            wilderness, where every step brings you closer to the summit of
            Kilimanjaro
          </p>
          <p className="mb-3 mt-5  text-darker/85">
            As you set foot on Kilimanjaro's slopes, you'll be stepping into a
            world of unparalleled natural beauty and untamed wilderness. From
            dense rainforests teeming with life to rugged alpine deserts, the
            landscapes you'll encounter on your trek are as diverse as they are
            breathtaking.
          </p>

          <p className="mb-3 mt-5  text-darker/85">
            At Tazama, we offer treks on five of Kilimanjaro's most renowned
            routes: Machame, Lemosho, Rongai, Umbwe and the Northern Circuit.
            Each route presents its own unique challenges and rewards, ensuring
            that every adventurer finds the perfect path to the summit.
          </p>

          <p className="mb-3 mt-5  text-darker/85 ">
            The{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/machame">
                Machame route
              </Link>
            </span>
            , known affectionately as the "Whiskey Route," beckons with its
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
          <p className="mb-3 mt-5  text-darker/85">
            For those seeking a more gradual ascent, the{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/lemosho">
                Lemosho route
              </Link>
            </span>{" "}
            offers a scenic journey through pristine wilderness areas. With
            ample time for acclimatization, trekkers can immerse themselves
            fully in the awe-inspiring beauty of Kilimanjaro.
          </p>
          <p className="mb-3 mt-5  text-darker/85">
            For the ultimate Kilimanjaro experience, the{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/northern-circuit">
                Northern Circuit route
              </Link>
            </span>{" "}
            awaits, offering unparalleled panoramic views and a sense of remote
            wilderness. This lesser-traveled route promises solitude and
            serenity as you traverse the northern slopes of the mountain.
          </p>
          <p className="mb-3 mt-5  text-darker/85">
            The{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/rongai">
                Rongai route
              </Link>
            </span>
            , originating from the north, offers a quieter and less congested
            path to the summit. Trekkers on this route enjoy stunning vistas of
            the Kenyan plains and the chance to witness Kilimanjaro's
            awe-inspiring sunrise.
          </p>
          <p className="mb-3 mt-5  text-darker/85">
            Meanwhile, the{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/umbwe">Umbwe route</Link>
            </span>
            , known for its steep and challenging terrain, attracts seasoned
            adventurers seeking a more direct ascent to the summit. With its
            rugged beauty and thrilling ascent, the Umbwe route offers a true
            test of endurance and determination.
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
          <p className="mb-3 mt-5  text-darker/85">
            No matter which route you choose, Tazama ensures an unforgettable
            experience with our seasoned guides, top-quality equipment, and
            personalized service. From the moment you arrive in Tanzania until
            you stand triumphantly atop the summit, our team is committed to
            ensuring your safety, comfort, and enjoyment every step of the way.
          </p>

          <p className="mb-3 mt-5  text-darker/85">
            Embark on the adventure of a lifetime with Tazama's Kilimanjaro
            Treks and experience the thrill of conquering Africa's highest peak.
            Are you ready to write your own chapter in the story of Kilimanjaro?
            Join us and let the journey begin.
          </p>
        </div>

        <div className="mb-10 py-8">
          <h3 className="text-4xl text-primary">Why Trek with Tazama</h3>
          <p className="mb-3 mt-5  text-darker/85">
            When it comes to embarking on the adventure of a lifetime, we
            understand that choosing the right trekking company is crucial.
            Here's why Tazama stands out from the rest:
          </p>
          <ul className=" list-outside  text-darker/85">
            <li className="font-bold text-primary">Safety First</li>
          </ul>
          <ul className="list-inside list-disc pl-5  text-darker/85">
            <li>Guides certified as Wilderness First Responders</li>
            <li>Twice daily health monitoring</li>
            <li>Pulse oximeters and emergency oxygen on every climb</li>
            <li>
              Experienced guides and comprehensive emergency plans ensure
              safety.
            </li>
          </ul>

          <ul className=" list-outside pt-5  text-darker/85">
            <li className="font-bold text-primary">Responsible Travel:</li>
          </ul>
          <ul className="list-inside list-disc pl-5  text-darker/85">
            <li>Adherence to Leave No Trace principles.</li>
            <li>Fair and ethical treatment of all mountain crew</li>
          </ul>

          <ul className=" list-outside pt-5  text-darker/85">
            <li className="font-bold text-primary">High-Quality Equipment:</li>
          </ul>
          <ul className="list-inside list-disc pl-5  text-darker/85">
            <li>4 season expedition sleeping tents</li>
            <li>Dining tents with durable tables and chairs</li>
            <li>Hygienic private toilets</li>
            <li>4-season sleeping bags</li>
          </ul>

          <ul className=" list-outside pt-5  text-darker/85">
            <li className="font-bold text-primary">Professional Team:</li>
          </ul>
          <ul className="list-inside list-disc pl-5  text-darker/85">
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

          <ul className=" list-outside pt-5  text-darker/85">
            <li className="font-bold text-primary">Personalized Service:</li>
          </ul>
          <ul className="list-inside list-disc pl-5  text-darker/85">
            <li>
              Tailored service catering to individual needs and preferences .
            </li>
            <li>
              Customized itineraries to ensure a dream trekking experience.
            </li>
          </ul>

          <div className="mt-5 flex flex-col items-center justify-center bg-light py-10 text-center text-white">
            <div className="mt-5 ">
              <Button className="rounded-md bg-[#A87133] px-2 text-white md:px-6 md:py-6 md:">
                <Link href="/safaris/kilimanjaro/routes">
                  View all Kilimanjaro routes
                </Link>
              </Button>
            </div>
          </div>
          <p className="mb-3 mt-5  text-darker/85">
            Choose Tazama Africa for your Kilimanjaro trek and embark on a
            journey of a lifetime with confidence and peace of mind. With our
            unwavering commitment to safety, responsible travel, high-quality
            equipment, and professional team, we guarantee an experience you'll
            never forget.
          </p>
        </div>
        {/* @ts-ignore */}

        <p className="mt-10 text-2xl text-primary">Our Guides and Blogs</p>
        <section className="mx-auto mt-5 flex w-full flex-col items-center  space-y-1  lg:flex-row  lg:items-start lg:space-x-[1%] lg:space-y-0  ">
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/blogs/best-sunglasses-for-kilimanjaro"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <CloudinaryImage
                blurDataUrl={images[4]?.blurDataUrl!}
                format={images[4]?.format!}
                public_id={images[4]?.public_id!}
              />
            </div>

            <div className="p-3">
              <p className=" text-primary">Best Sunglasses for Kilimanjaro</p>
              <p className=" text-sm">
                Why Protecting Your Eyes is Non-Negotiable on Kilimanjaro...
              </p>
              <Button className="mt-5  text-white">View More</Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/blogs/climbing-kili-shapes-your-life"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-raleway text-primary">
                {" "}
                Climbing Kilimanjaro Shapes your life
              </p>
              <p className="font-raleway text-sm">
                A Journey of Humility and Equality
                <br />
                <br />
              </p>
              <Button className="font-raleway mt-5  text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/blogs/diverse-kilimanjaro-climbers"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-raleway text-primary">
                Diverse Kilimanjaro Climbers
              </p>
              <p className="font-raleway text-sm">
                Conquering Mount Kilimanjaro, the rooftop of Africa, is a dream
                many adventurers from around the globe share.
              </p>
              <Button className="font-raleway mt-5  text-white">
                View More
              </Button>
            </div>
          </Link>
        </section>

        <section className="mx-auto mt-5 flex w-full flex-col items-center  space-y-1  lg:flex-row  lg:items-start lg:space-x-[1%] lg:space-y-0  ">
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/kilimanjaro-visa"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1677519910517-5bfee903a814?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lsaW1hbmphcm8lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" />
            </div>

            <div className="p-3">
              <p className=" text-primary">Kilimanjaro Visa</p>
              <p className=" text-sm">
                For those embarking from afar, the Kilimanjaro Visa On Arrival
                (VOA) presents a convenient option ...
              </p>
              <Button className="mt-5  text-white">View More</Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/kilimanjaro-food"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1677519917377-118338dd2ed1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lsaW1hbmphcm8lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" />
            </div>

            <div className="p-3">
              <p className="font-raleway text-primary">Kilimanjaro Foods</p>
              <p className="font-raleway text-sm">
                Staying hydrated is crucial to mitigate the risks associated
                with high altitude.
              </p>
              <Button className="font-raleway mt-5  text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/attitude-sickness"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1568259547325-f08f48165cfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpbGltYW5qYXJvJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D" />
            </div>

            <div className="p-3">
              <p className="font-raleway text-primary">Attitude Sickness</p>
              <p className="font-raleway text-sm">
                Kilimanjaro Altitude Sickness, or Acute Mountain Sickness (AMS),
                is a concern for climbers ...
              </p>
              <Button className="font-raleway mt-5  text-white">
                View More
              </Button>
            </div>
          </Link>
        </section>

        <section className="my-20">
          <h4 className="text-4xl">Our Kilimanjaro Gallery</h4>
          {/* @ts-ignore */}
          <Gallery images={images} />
        </section>
      </div>
    </>
  );
};

export default Page;
export async function getStaticProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const images = await useFetchImages({ folderName: "kilimanjaro" });
  return {
    props: {
      images,
    },
  };
}
