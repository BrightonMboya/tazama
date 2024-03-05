import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";

const ItenaryPage = () => {
  return (
    <>
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/beach-holiday.webp`}
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
              <h3 className="text-4xl text-[#A87133]">
                Reach the Summit of Kilimanjaro with Tazama: A Journey to
                Africa's Highest Peak
              </h3>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Nestled in Northern Tanzania, Mount Kilimanjaro stands as
                Africa's tallest peak and the world's highest free-standing
                mountain, soaring to an impressive 5,895 meters. Every year,
                Kilimanjaro attracts around 30,000 trekkers, from seasoned
                mountaineers to ambitious beginners, all drawn to the challenge
                of reaching its summit.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Climbing Kilimanjaro with Tazama is an unforgettable adventure
                that combines personal achievement with the raw beauty of
                nature. The mountain offers a unique experience with its diverse
                ecosystems, from lush rainforests to alpine deserts, each
                providing its own set of challenges and rewards.
              </p>
              <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src="/assets/images/gallery/honey-moon-trip.webp"
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                />
              </div>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The journey to the top of Kilimanjaro is accessible to a wide
                range of climbers, including young adventurers over the age of
                10 and those in their 60s and 70s with a zest for life and
                adventure. The main challenge lies in adapting to the altitude
                and the pace of ascent. However, with Tazama's support, reaching
                the summit is an attainable goal. Our expert guides are trained
                to prioritize your safety and success, making them your most
                valuable companions on this journey.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">
                  So, who can climb Kilimanjaro? {"  "}
                </span>
                Anyone with a spirit of adventure and determination. Join the
                exclusive group of climbers who have successfully summited Mount
                Kilimanjaro, guided by the expertise of Tazama's dedicated team.
              </p>
              <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src="/assets/images/gallery/classic-safaris.webp"
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                />
              </div>
              <p className="mb-3 mt-5 text-xl text-[#757371] lg:mt-0">
                <span className="text-primary">Best Time to Climb: </span>
                Mount Kilimanjaro welcomes climbers year-round, offering the
                chance to summit in any season. For those who prefer drier
                conditions, the recommended months are January to February and
                June to October. Selecting the best time to climb Kilimanjaro
                requires careful consideration of weather patterns and other
                factors, all of which Tazama is equipped to guide you through,
                ensuring a remarkable experience.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Ready to witness the world from the peak of Africa and fulfill a
                lifetime goal? Tazama is here to guide your journey to the
                summit of Kilimanjaro. Our commitment to safety, personalized
                service, and environmental stewardship ensures an unparalleled
                climbing experience. Answer the call of the mountain and reach
                the summit of Kilimanjaro with Tazama.
              </p>
            </div>
          </div>

          <section className="mb-10 hidden space-y-5 py-8 lg:block">
            <div className="relative h-[600px] w-full lg:w-[400px]">
              <Image
                src="/assets/images/gallery/honey-moon-trip.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>

            <div className="relative h-[300px] w-full lg:w-[400px]">
              <Image
                src="/assets/images/gallery/honey-moon-trip.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
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
};

export default ItenaryPage;
