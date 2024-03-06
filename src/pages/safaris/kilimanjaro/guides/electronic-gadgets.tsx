import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";

export default function Page() {
  return (
    <>
    <HeadSEO title="Electronic Gadgets in Kilimanjaro"/>
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Electronic Gadgets for Kilimanjaro
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Essential Electronic Gadgets for Your Kilimanjaro Adventure
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                In the majestic realm of Mount Kilimanjaro, where every step
                brings you closer to the roof of Africa, ensuring you're
                well-equipped is paramount. Tazama understands the essence of
                being prepared, especially when it comes to electronic gadgets
                that can transform your climb into a more comfortable and
                memorable experience.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Your journey to the summit is a blend of endurance, marvel, and
                a touch of modern convenience, provided by the right gadgets.
                Here are the essentials:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Smartphone:</span> Your gateway
                  to the world below as you ascend. A smartphone not only keeps
                  you connected but also serves as a versatile device for
                  photos, navigation, and even as a digital journal.
                </li>
                <li>
                  <span className="text-primary">Digital Camera:</span> While
                  smartphones do a great job, a digital camera can elevate your
                  photography with superior zoom, image quality, and durability
                  under extreme conditions. A dust-proof and waterproof case is
                  a must to protect it from the elements. A small heat pack may
                  also help to preserve battery life at high altitudes.
                </li>
                <li>
                  <span className="text-primary">
                    Power Bank/Solar Charger:{" "}
                  </span>{" "}
                  The absence of charging stations along the trek makes a
                  high-capacity power bank or a solar charger indispensable. Opt
                  for models designed for outdoor use, capable of handling cold
                  temperatures and providing multiple charges.
                </li>
              </ul>
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
                8 Gadgets to Enhance Your Climb
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                This one is for our gadget lovers who don’t want to leave tech
                behind. Beyond the essentials, these gadgets can enhance your
                climbing experience:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Headlamp: </span>
                  Essential for those pre-dawn summit attempts, ensuring you
                  have a hands-free source of light.
                </li>
                <li>
                  <span className="text-primary">
                    Comfortable Sport Headphones:{" "}
                  </span>
                  For those moments when you need the motivational boost of your
                  favorite tunes or the calm of a podcast.
                </li>
                <li>
                  <span className="text-primary">Rugged Phone Case: </span>
                  Protect your smartphone from drops, dust, and moisture.
                </li>
                <li>
                  <span className="text-primary">Outdoor Video Camera: </span>
                  Capture the dynamic landscapes and your personal journey in
                  high definition.
                </li>
                <li>
                  <span className="text-primary">
                    Portable Hydration System:{" "}
                  </span>
                  Staying hydrated is easier when your water supply is
                  accessible on the go.
                </li>
                <li>
                  <span className="text-primary">GPS Watch: </span>
                  Track your progress, altitude, and route with precision.
                </li>
                <li>
                  <span className="text-primary">E-Reader: </span>
                  Wind down after a day’s climb with your favorite books at your
                  fingertips
                </li>
              </ul>
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
