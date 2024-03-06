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
              Tazama's Diverse Kilimanjaro Climbers
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Conquering Mount Kilimanjaro, the rooftop of Africa, is a dream
                many adventurers from around the globe share. Tazama has been at
                the forefront of turning these dreams into reality, offering
                unparalleled experiences to climbers from diverse nations
                including Australia, Canada, Germany, the USA, China,
                Switzerland, the UK, and beyond. Our commitment to providing
                exceptional service, personalized adventures, and safety has
                earned us praise from a global community of climbers who've
                chosen Tazama as their gateway to the summit of Kilimanjaro.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                A Melting Pot of Cultures on the Slopes of Kilimanjaro
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Mount Kilimanjaro, with its breathtaking landscapes and
                challenging treks, attracts thousands of climbers each year.
                Tazama has had the privilege of guiding adventurers from various
                corners of the world, each bringing their unique perspectives,
                cultures, and dreams to the mountain. Our climbers from
                Australia, known for their adventurous spirit, have found
                Kilimanjaro's rugged terrain a thrilling challenge. Canadians,
                accustomed to their vast wilderness, have marveled at the
                distinct ecosystems of Kilimanjaro, from rainforests to alpine
                deserts.
                <br />
                <br />
                Our friends from Germany have appreciated the meticulous
                planning and precision Tazama offers, ensuring a safe and
                enjoyable climb. Climbers from the USA have praised our ability
                to create a sense of community and camaraderie among
                participants from different backgrounds. Our Chinese adventurers
                have been captivated by the majestic views and the opportunity
                to connect with nature on an epic scale. Similarly, our Swiss
                and UK climbers have lauded the personalized experiences and the
                skilled guidance provided by our expert team, making their
                Kilimanjaro journey unforgettable.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Personalization at the Heart of Every Climb
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                What sets Tazama apart is our dedication to personalization.
                Understanding that each climber has unique needs and
                expectations, we tailor every journey to suit individual
                preferences. Whether it's accommodating dietary requirements,
                adjusting pace, or providing cultural insights, our team goes
                above and beyond to ensure a seamless and enriching experience.
                This attention to detail and commitment to excellence has been a
                significant factor in the glowing testimonials we've received
                from our international clientele.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Safety, Expertise, and Warm Hospitality
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Safety is paramount on the slopes of Kilimanjaro, and Tazama's
                expert guides, with their deep knowledge of the mountain's
                terrain and weather patterns, ensure that climbers from all
                countries feel secure and supported. Our multilingual guides and
                staff also bridge language barriers, creating a warm and
                welcoming atmosphere where every climber, regardless of
                nationality, feels valued and understood.
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
                Join the Global Tazama Family
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                As Tazama continues to welcome climbers from across the world,
                we're not just offering a climb; we're inviting you to become
                part of a global family that shares the love for adventure, the
                respect for nature, and the pursuit of personal achievement.
                Whether you're from Australia, Canada, Germany, the USA, China,
                Switzerland, the UK, or any other part of the world, Tazama is
                your trusted partner in conquering Kilimanjaro.
                <br />
                <br />
                Embark on your Kilimanjaro journey with Tazama and experience
                the difference that personalized care, expert guidance, and
                genuine hospitality can make. Together, let's reach the summit
                and create memories that resonate across continents and
                cultures, cementing bonds that last a lifetime.
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
