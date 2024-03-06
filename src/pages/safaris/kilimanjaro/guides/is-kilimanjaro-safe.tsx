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
              Is Kilimanjaro Safe? Absolutely!!
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Is Climbing Mt Kilimanjaro even safe?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Embarking on a journey to conquer Mount Kilimanjaro brings with
                it a whirlwind of excitement, anticipation, and, for many, a
                hint of apprehension, particularly when it comes to safety. The
                paramount question, "Is climbing Kilimanjaro safe?" is one we at
                Tazama encounter frequently. The straightforward answer is a
                resounding yes, especially when you're in the capable hands of a
                tour operator that not only prioritizes your safety but also
                elevates your climbing experience with a touch of luxury and a
                deep commitment to personalization.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Why Tazama Guarantees a Safe and Luxurious Kilimanjaro
                Experience
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary ">Expertise and Safety:</span>{" "}
                Climbing the world-renowned Kilimanjaro, standing majestically
                at 5,895 meters, demands not just physical readiness but a
                comprehensive safety net that can only be guaranteed by
                experienced professionals. Tazama's team of guides isn't just
                seasoned in navigating the terrains of Kilimanjaro; they're
                trained wilderness first responders, equipped with pulse
                oximeters and emergency oxygen, ensuring your safety every step
                of the way.
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
                  Luxury and Comfort on the Mountain:{" "}
                </span>
                The notion that conquering a mountain must be a Spartan
                experience is dispelled with Tazama. Our luxury campsites
                redefine what it means to trek Kilimanjaro. Imagine gourmet
                meals prepared by dedicated chefs, top-notch equipment, and
                eco-friendly practices ensuring a comfortable ascent without
                compromising the mountain's pristine beauty.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">
                  Personalization at Its Best:{" "}
                </span>
                Tazama understands that every climber's dream and capability are
                unique. Whether you're embarking on this adventure solo, with
                loved ones, or a group of friends, our bespoke treks are
                designed to cater to your preferences, ensuring that your
                journey to the roof of Africa is as personalized as it is
                memorable.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">
                  Commitment to Responsible Travel:{" "}
                </span>
                As stewards of this magnificent mountain, we're committed to its
                preservation for generations to come. Our eco-conscious approach
                ensures that your trek is not just an adventure but also a step
                towards sustainable travel.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Quick Emergency Services: </span>
                While we pride ourselves on our preventative measures and
                comprehensive health monitoring, we also offer peace of mind
                with readily available evacuation off the mountain should you
                need. Stretchers are on every trip.
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
              <p className="mt-5 text-2xl font-bold text-primary">
                Your Kilimanjaro Journey with Confidence
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Choosing Tazama for your Kilimanjaro trek means opting for an
                experience that combines the thrill of adventure with the
                assurance of safety, the comfort of luxury, and the warmth of
                personalized service. With our expert team, state-of-the-art
                equipment, and unwavering dedication to your safety and comfort,
                we invite you to take on Kilimanjaro with the confidence that
                you're in the best hands.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Ready to conquer Kilimanjaro with the perfect blend of
                adventure, safety, and luxury? Contact Tazama today to discover
                how we can turn your dream of reaching the summit into a
                reality, ensuring a safe, unforgettable, and enriching
                experience on Africa's highest peak.
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
