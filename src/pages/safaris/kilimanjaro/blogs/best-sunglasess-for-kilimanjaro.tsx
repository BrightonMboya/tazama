import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";

export default function Page() {
  return (
    <>
    <HeadSEO title="Best Sunglasses for Kilimanjaro"/>
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              The best Sunglasses for Climbing Mount Kilimanjaro
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                The Essential Guide to The best Sunglasses for Climbing Mount
                Kilimanjaro
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                As you set your sights on conquering Mount Kilimanjaro, the
                tallest peak in Africa, it's not just physical fitness and
                mental fortitude that will carry you to the summit. Equally
                important is ensuring you're well-equipped for the journey,
                especially when it comes to protecting your eyes. Today, let's
                dive into the crucial topic of selecting the best sunglasses for
                your Kilimanjaro adventure.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Why Protecting Your Eyes is Non-Negotiable on Kilimanjaro
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The higher you climb, the closer you get to the sun's piercing
                rays, magnified by the thinning atmosphere. With every step
                upwards, solar radiation intensifies, making eye protection not
                just a necessity but a lifeline. The pristine snow caps, while
                breathtaking, act as mirrors, bouncing back sunlight and
                increasing UV exposure dramatically.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                The Hidden Dangers of High Altitude Sun Exposure
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                At the lofty altitudes of Kilimanjaro, direct sunlight isn't
                just bright; it's potentially harmful. The risk of UV exposure
                escalates with altitude, making sunglasses an indispensable part
                of your gear. Even on overcast days, harmful rays penetrate the
                clouds, reaching your eyes and risking damage.
              </p>{" "}
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
                The Non-Negotiable Need for Sunglasses
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Yes, sunglasses are an absolute must. Here's why:
              </p>{" "}
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  They shield you from UV rays, sand, snow, and wind—all
                  elements that can impede your ascent.
                </li>
                <li>
                  They prevent snow blindness, a condition where UVB rays burn
                  the cornea, causing temporary vision loss.
                </li>
                <li>
                  They help avoid retinal exhaustion from prolonged exposure to
                  intense light, enhancing your endurance.
                </li>
                <li>
                  They protect against freezing conditions that can lead to
                  eyelid and corneal damage
                </li>
              </ul>
              <p className="mt-5 text-2xl font-bold text-primary">
                Choosing the Right Frames and Lenses for the Climb
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Frames: </span>
                  Opt for curved frames with side shields for all-around
                  protection. Adjustable or slim temples ensure a snug fit,
                  while frames with straps prevent loss during rigorous
                  activity.
                </li>
                <li>
                  <span className="text-primary">Lenses: </span>
                  Category 4 lenses are your best bet for high-altitude
                  climbing. They block up to 90-98% of sunlight, providing
                  superior protection. Grey, green, or brown tints reduce glare
                  and keep your eyes comfortable. Polyurethane lenses, known for
                  their durability and excellent optics, are highly recommended.
                </li>
              </ul>
              <p className="mt-5 text-2xl font-bold text-primary">
                Features to Look for in Your Kilimanjaro Sunglasses
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  Anti-glare and polarized lenses to minimize sun glare,
                  enhancing visibility and comfort.
                </li>
                <li>Wider frames for wind protection.</li>
                <li>Secure grip to prevent slipping.</li>
                <li>
                  Dark tinted, mirror-finish lenses for maximum UV protection.
                </li>
                <li>
                  Comprehensive coverage to protect the eyes and surrounding
                  areas.
                </li>
                <li>Comfort for extended wear.</li>
                <li>Durability to withstand the rigors of the climb.</li>
              </ul>
              <p className="mt-5 text-2xl font-bold text-primary">
                Invest in Your Vision: A Wise Choice for Kilimanjaro Climbers
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The equatorial sun above Kilimanjaro is unforgiving. Investing
                in a quality pair of sunglasses is not just a matter of comfort
                but safety. With the right pair, you'll not only safeguard your
                eyes but also enhance your climbing experience, keeping your
                focus squarely on the breathtaking vistas and the path ahead.
                <br />
                <br />
                As you embark on this journey of a lifetime with Tazama, rest
                assured that every detail of your adventure, including the
                protection of your eyes, is taken into account. Our commitment
                is to ensure you enjoy every moment of your climb, from the
                first step to the summit, with clarity, safety, and awe.
                <br />
                <br />
                Remember, the right sunglasses are not just gear; they're your
                passport to a successful and memorable ascent. Let's make your
                Kilimanjaro dream a reality, with the summit in clear view.
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