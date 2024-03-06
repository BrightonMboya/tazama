import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";

export default function Page() {
  return (
    <>
      <HeadSEO title="Why Climb Kilimanjaro" />
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Why You should climb mount Kilimanjaro
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Climbing Mount Kilimanjaro is more than an adventure; it's a
                profound exploration of personal limits and a testament to the
                human spirit's resilience. At Tazama, we've witnessed countless
                adventurers transform through this journey, each with their
                unique motivation, but all united in the quest for that
                exhilarating moment of triumph atop Africa's highest peak. Let's
                delve into why Kilimanjaro beckons and how it has become a
                pivotal chapter in the lives of many.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Mount Kilimanjaro stands as a beacon for those yearning to
                conquer one of the world's Seven Summits. Its allure lies not
                just in its majestic height but in its accessibility.
                Kilimanjaro challenges yet welcomes adventurers with open arms,
                requiring no technical climbing experience. The mountain offers
                various routes, each presenting its own set of vistas and
                challenges, allowing climbers to choose their path based on
                ability and desire for adventure. With Tazama, you embark on a
                journey tailored to your spirit of adventure, ensuring an
                unforgettable ascent.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                A Microcosm of the World's Beauty
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Ascending Kilimanjaro is like traversing the globe's climates
                within a single trek. From lush rainforests buzzing with life to
                the haunting beauty of the alpine desert, each zone is a world
                unto itself, culminating in the icy splendor of the summit. This
                natural marvel promises a kaleidoscope of breathtaking
                landscapes, immortalized in the photographs and memories of
                those who venture through its realms.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Wildlife and Wilderness
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Kilimanjaro is not only a climber's paradise but a sanctuary for
                diverse wildlife and unique flora. The mountain's unique
                ecosystems host species that enchant nature enthusiasts and add
                an extraordinary dimension to the climb. Imagine trekking
                through the habitat of majestic elephants or marveling at the
                Kilimanjaro tree's surreal silhouette against the sky – these
                are moments that connect you deeply with the earth's wonders.
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
              <p className="mt-5 text-2xl font-bold text-primary">
                The Triumph of Personal Achievement
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Climbing Kilimanjaro is a celebration of personal milestones and
                human endurance. It's a quest that people undertake to mark
                significant life events or to challenge their own limits.
                Reaching the summit is a personal victory, a testament to one's
                strength, perseverance, and courage. It's an experience that
                reshapes perspectives, inspires new beginnings, and imprints a
                sense of achievement that lasts a lifetime.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Contributing to the Conservation and Community
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                By choosing Kilimanjaro as your adventure, you contribute to the
                conservation of this magnificent mountain and the well-being of
                the local community. Tazama's commitment to sustainable tourism
                means that your journey supports environmental preservation
                efforts and the livelihoods of the incredible Kilimanjaro
                porters, guides, and local businesses. Your climb becomes a part
                of a larger story of positive impact.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Your Kilimanjaro Journey with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                With Tazama, climbing Kilimanjaro is not just about reaching the
                summit; it's about embracing each step, each breath, and each
                moment of this life-changing journey. Our luxury expeditions
                ensure that your adventure is enveloped in comfort, safety, and
                unparalleled personal care, allowing you to focus fully on the
                beauty and challenge of the climb.
                <br />
                <br />
                Kilimanjaro beckons not just as a mountain to be conquered but
                as a journey to be lived. It's an invitation to step beyond the
                familiar, to test the boundaries of what you believe is
                possible, and to discover the strength that lies within. Are you
                ready to answer the call? Join us at Tazama for an expedition
                that transcends the ordinary, transforming your dream of
                climbing Kilimanjaro into a reality wrapped in luxury and
                personal achievement.
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
