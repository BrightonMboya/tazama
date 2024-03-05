import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";

export default function Page() {
  return (
    <>
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              A Journey to Africa's Highest Peak.
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-xl font-bold text-primary">
                The Ultimate Test: Conquering Kilimanjaro via the Umbwe Route
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The Umbwe Route, known for its steep, direct climb to the summit
                of Mount Kilimanjaro, stands as the most challenging path among
                the various routes up the mountain. This route is tailored for
                adventurers seeking a rigorous trek and rapid ascent without the
                gradual acclimatization stages offered by other paths.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Originating from the south, the Umbwe Route quickly gains
                altitude, presenting a steep journey through breathtaking
                rainforests before emerging into the alpine desert. Its direct
                approach leads adventurers to Barranco Camp, where it joins the
                Southern Circuit, offering awe-inspiring views beneath
                Kilimanjaro’s Southern Ice Field, before making the final ascent
                from Barafu Camp. The descent is navigated via the Mweka Route,
                completing a full circle of memorable experiences.
              </p>{" "}
              <p className="mt-5 text-xl font-bold text-primary">
                Why Embark on the Umbwe Route with Tazama?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Tazama offers this route as a unique 6 or 7-day private climb,
                with the 7-day option including a crucial acclimatization day at
                Barranco Camp. This additional day significantly enhances the
                success rate and overall trekking experience, allowing climbers
                to adjust to the altitude and enjoy the stunning vistas and
                unique flora.
              </p>
              <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                  placeholder="blur"
                  blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
                />
              </div>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">
                  Key Details: <br />{" "}
                </span>
                Distance: Approximately 53 km (32 miles). <br />
                Duration: 6 or 7 days, with the latter recommended for better
                acclimatization. <br />
                Difficulty: The Umbwe Route is the most strenuous on
                Kilimanjaro. It's designed for strong, experienced hikers who
                can adapt quickly to high altitudes. Success Rates: While
                challenging, the success rates for the Umbwe Route can be as
                high as 70% with proper preparation and the extended itinerary.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                What Will You Experience?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                This route not only tests your endurance but also rewards you
                with less trafficked paths, intimate encounters with
                Kilimanjaro's ecosystems, and unparalleled serenity. You'll trek
                through lush forests, witness exotic wildlife, and gaze upon the
                icy expanse of Kilimanjaro’s summit, all contributing to an
                unforgettable adventure.
              </p>
              <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                  blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
                  placeholder="blur"
                />
              </div>
              <p className="mt-5 text-xl font-bold text-primary">
                Begin Your Kilimanjaro Journey with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Are you ready to take on Kilimanjaro's toughest challenge?
                Choose Tazama for your Umbwe Route climb and discover why this
                path captivates the hearts of true adventurers. With Tazama's
                expert guidance, top-notch safety protocols, and dedication to
                responsible trekking, your journey to the Roof of Africa will be
                as rewarding as it is exhilarating. Contact us to start planning
                your climb and embrace the adventure of a lifetime.
              </p>
            </div>
          </div>

          <section className="mb-10 hidden space-y-5 py-8 lg:block">
            <div className="relative h-[600px] w-full lg:w-[400px]">
              <Image
                src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                placeholder="blur"
                blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
              />
            </div>

            <div className="relative h-[300px] w-full lg:w-[400px]">
              <Image
                src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
                placeholder="blur"
              />
            </div>
          </section>
        </section>

        <section className="mx-auto flex flex-col items-center space-x-5 md:mx-8 md:flex-row lg:ml-[110px]">
          <div className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md">
            <div className="relative h-[200px] w-full rounded-sm">
              <Image
                src="/assets/images/gallery/chimps.webp"
                layout="fill"
                alt="blog_img"
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Kilimanjaro Routes</p>
              <p className="font-now text-sm">
                Ready to witness the world from the peak of Africa and fulfill a
                lifetime goal.
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </div>

          <BlogCard
            blogLink="/kilimanjaro/routes/machame"
            title="Machame Routes"
            caption="The Machame Route stands out for its scenic diversity and the robust challenge it offers, making it a magnet for adventurers"
            imgLink="kilimanjaro/glossugv7zlnlgp3oie4"
          />
          <div className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md">
            <div className="relative h-[200px] w-full rounded-sm">
              <Image
                src="/assets/images/gallery/chimps.webp"
                layout="fill"
                alt="blog_img"
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Kilimanjaro Routes</p>
              <p className="font-now text-sm">
                Ready to witness the world from the peak of Africa and fulfill a
                lifetime goal.
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
