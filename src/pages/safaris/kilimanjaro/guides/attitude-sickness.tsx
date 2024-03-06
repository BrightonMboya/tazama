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
              Attitude Sickness
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Understanding Kilimanjaro Altitude Sickness
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Climbing Kilimanjaro is a dream for many adventurers, and while
                the journey to its peak is exhilarating, it's essential to
                understand the risks associated with high-altitude trekking,
                especially Kilimanjaro Altitude Sickness. At Tazama, we
                prioritize your safety and ensure that you're well-prepared to
                enjoy your climb without undue distress.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Kilimanjaro Altitude Sickness, or Acute Mountain Sickness (AMS),
                is a concern for climbers due to the lower oxygen levels at high
                altitudes. Symptoms like headache, nausea, fatigue, and
                shortness of breath can occur above 2,500 meters, and while mild
                in many cases, AMS can become severe without proper
                acclimatization.
                <br />
                <br />
                The key to a successful summit isn't just physical fitness but
                how well you adapt to the altitude. That's why choosing a longer
                itinerary with Tazama allows for gradual acclimatization,
                enhancing your comfort and summit chances.
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
                Preventing Kilimanjaro Altitude Sickness
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Prevention starts with preparation. Here are essential tips to
                mitigate the risk of AMS:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Prepare Before Ascend:</span>{" "}
                  Engage in altitude training, aerobic exercises, and strength
                  training. Consider pre-acclimatizing on a smaller peak like
                  Mount Meru to adapt your body to higher elevations.
                </li>
                <li>
                  <span className="text-primary">Choose the Right Route:</span>{" "}
                  Opt for routes that allow for gradual ascent and "climb high,
                  sleep low" opportunities. Tazama offers various itineraries
                  tailored to facilitate acclimatization.
                </li>
                <li>
                  <span className="text-primary">Pace Yourself: </span> The
                  mantra "Pole Pole" (slowly, slowly in Swahili) is crucial.
                  Climbing at a pace where you can comfortably converse ensures
                  you're not overexerting at high altitudes.
                </li>
                <li>
                  <span className="text-primary">Stay Hydrated: </span>{" "}
                  Dehydration can mimic or exacerbate AMS symptoms. Drink
                  regularly but avoid overhydration. Monitor your hydration by
                  checking your urine color.
                </li>
                <li>
                  <span className="text-primary">Walk High, Sleep Low:</span>{" "}
                  This technique helps your body adjust to different elevations
                  without undue stress, promoting better acclimatization.
                </li>
                <li>
                  <span className="text-primary">Consider Medication: </span>{" "}
                  Diamox (Acetazolamide) can aid acclimatization but consult a
                  doctor before use. Be aware of potential side effects like
                  increased urination and tingling sensations.
                </li>
              </ul>
              <p className="mt-5 text-2xl font-bold text-primary">
                Tazama's Commitment to Your Safety
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                With Tazama, your safety is paramount. Our experienced guides
                monitor your well-being closely, ready to adjust plans for
                optimal acclimatization. We equip you with the necessary
                knowledge and support to minimize the risk of altitude sickness,
                ensuring a memorable and safe climb.
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
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Remember </span>
                AMS can affect anyone, regardless of fitness level or previous
                high-altitude experience. By following our guidance and
                listening to your body, you can significantly reduce the risk of
                altitude sickness and enjoy the incredible journey to the roof
                of Africa.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Choose Tazama for a Kilimanjaro climb that prioritizes your
                health, safety, and personal achievement. With our expert
                guidance, comprehensive preparation, and commitment to luxury
                and personalized experiences, you're set for an unforgettable
                expedition.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Ready to take on the challenge of Kilimanjaro with the best
                support by your side? Reach out to Tazama today and start
                planning your safe and exhilarating climb to the summit. Let's
                conquer the heights together, with safety, comfort, and the
                spirit of adventure guiding our way.
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
