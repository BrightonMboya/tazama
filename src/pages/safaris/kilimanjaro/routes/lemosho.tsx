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
              <h3 className="text-4xl text-[#A87133]">
                Journeying the Lemosho Route
              </h3>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The Lemosho Route, starting from the west at Londorossi Gate,
                unfolds a breathtaking ascent to Kilimanjaro, standing proud at
                2,100 meters above sea level. Esteemed as a tranquil path less
                traveled, Lemosho offers an intimate encounter with the heart of
                Kilimanjaro's wilderness. It's a route that balances challenge
                with beauty, weaving through lush rainforests to the expansive
                views of the Shira Plateau, making it an ideal choice for those
                seeking both adventure and solitude.
              </p>{" "}
              <p className="mt-5 text-xl font-bold text-primary">
                Why Lemosho Stands Out
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Lemosho is heralded for its strategic approach to
                acclimatization, with its extended itinerary providing ample
                time to adapt to the mountain's majestic heights. This careful
                pacing, combined with the route's natural splendor, contributes
                to an impressive success rate nearing 95%. Opting for the
                Lemosho route means embarking on a journey filled with the
                potential for wildlife sightings and unparalleled scenic vistas,
                especially during the 8-day climb which allows for thorough
                acclimatization and leisurely exploration of Kilimanjaro's many
                wonders.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                Navigating the Lemosho Route
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                While Lemosho presents a challenge, it's a rewarding endeavor.
                With options for a 7 or 8-day trek, climbers have the advantage
                of extra acclimatization time. This thoughtful itinerary ensures
                that trekkers can comfortably ascend to higher altitudes while
                enjoying restful nights at lower elevations. The journey from
                gate to summit unfolds over approximately 70 km, with each day
                bringing new landscapes and challenges, from the initial ascent
                through rainforest to the exhilarating climb of the Barranco
                Wall.
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
              <p className="mt-5 text-xl font-bold text-primary">
                A Day-by-Day Adventure
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Day 1: Embark from Londorossi Gate to Mti Mkubwa Camp, covering
                7 km through forest.
                <br />
                Day 2: Traverse to the Shira Plateau's edge, journeying 7 km.{" "}
                <br />
                Day 3: Continue through Shira Caldera on a unique path, 7 km.{" "}
                <br />
                Day 4: Aim high and sleep low, a 10 km trek.
                <br />
                Day 5: Conquer the Barranco Wall, a 4 km ascent. <br />
                Day 6: A gentler stretch to Karanga Camp, just 5 km. <br />
                Day 7: Begin your summit push at midnight, a 17 km journey to
                the peak. <br /> Day 8: Descend to Mweka Camp, 9 km, reflecting
                on the accomplishment.
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
                What You'll Experience on Lemosho route
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371] lg:mt-0">
                On the Lemosho Route, climbers are treated to some of
                Kilimanjaro's most stunning and varied landscapes. This route,
                known for its scenic beauty, offers an unparalleled opportunity
                to witness the diverse ecosystems of Africa's highest peak.
                Here’s what you can expect to see along the way:
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Lush Rainforests: </span>
                The journey begins in the rich, verdant rainforests of
                Kilimanjaro’s lower slopes, home to an array of wildlife
                including monkeys, exotic birds, and possibly even the elusive
                elephants. The dense canopy overhead is a vibrant green, with
                sunlight filtering through to the forest floor.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Heath and Moorland: </span>
                As you ascend, the terrain shifts to heath and moorland,
                offering sweeping views of the mountain and surrounding plains.
                This zone is characterized by its unique flora, such as the
                towering senecios and lobelias, which seem otherworldly in their
                appearance.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Shira Plateau: </span>One of
                Kilimanjaro's three volcanic cones, the Shira Plateau, offers a
                breathtakingly flat expanse that contrasts sharply with the
                steep slopes that come before and after it. It's an excellent
                place for acclimatization and provides stunning sunset and
                sunrise views.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Alpine Desert: </span>
                The landscape becomes more rugged and sparse as you enter the
                alpine desert zone. Here, the beauty lies in the starkness and
                wide-open skies, with views that stretch for miles during clear
                weather.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Lava Tower: </span>
                This prominent landmark is a volcanic plug left from
                Kilimanjaro’s volcanic activity. Climbers passing by or stopping
                for acclimatization can marvel at its imposing structure against
                the backdrop of the surrounding desert.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Barranco Wall: </span>A
                challenging but rewarding part of the climb, the Barranco Wall
                presents a steep and rocky ascent. Once at the top, climbers are
                rewarded with one of the route’s most impressive views.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">
                  Glacial Valleys and Ice Fields:{" "}
                </span>
                Near the summit, the landscape shifts dramatically to glacial
                valleys and vast ice fields. These ancient glaciers, while
                receding, offer a poignant reminder of the mountain’s icy past.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Uhuru Peak: </span>
                The ultimate destination, Uhuru Peak, provides climbers with a
                sense of accomplishment and awe. Standing atop Africa, you are
                surrounded by glaciers and have 360-degree views of the African
                continent below.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Wildlife: </span>
                Throughout the trek, climbers might spot various wildlife,
                including colobus monkeys in the forest zone, high-altitude
                birds, and smaller creatures like lizards and insects adapted to
                the harsh alpine conditions.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                Book Your Lemosho Journey with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Choosing the Lemosho Route with Tazama means not just aiming for
                the summit but embracing an unforgettable journey enriched with
                meticulous planning, sustainable travel practices, and a
                commitment to your comfort and success. Our expert team ensures
                every step is taken with safety, enjoyment, and personal
                achievement in mind. Ready for the adventure of a lifetime?
                Reach out to Tazama today and step closer to the summit dreams
                are made of.
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
