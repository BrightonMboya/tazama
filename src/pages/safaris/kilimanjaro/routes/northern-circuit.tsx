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
                Discover the Northern Circuit Route: Kilimanjaro's Ultimate Trek
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The Northern Circuit Route, known for its breathtaking panoramas
                and serene trails, offers an unparalleled journey around Mount
                Kilimanjaro. Starting in the west at Londorossi Gate, this path
                initially mirrors the Lemosho Route, showcasing the expansive
                Shira Plateau. Diverging north near Lava Tower, it embarks on
                the unique Northern Circuit, wrapping around the mountain to
                reveal Kilimanjaro in all its glory.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                This route stands out for its length, providing ample time for
                acclimatization and immersion in the mountain's natural
                splendor. With a trail less traveled, it promises a peaceful
                trek away from the crowds, making it ideal for those who seek
                solitude and a deeper connection with nature.
              </p>{" "}
              <p className="mt-5 text-xl font-bold text-primary">
                Why Choose the Northern Circuit Route:
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The Northern Circuit is the pinnacle of Kilimanjaro treks,
                offering the best success rates, ranging from 90% to 95%. With
                options for an 8-day standard journey or a 9-day trek for
                optimal acclimatization, it caters to adventurers aiming for the
                summit with comfort and confidence. This extended itinerary not
                only enhances your acclimatization process but also allows for
                more nights at lower altitudes, ensuring a more enjoyable and
                successful climb.
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
                  Less crowded than other routes:{" "}
                </span>
                it provides a tranquil experience, allowing trekkers to soak in
                the vast landscapes and potentially spot wildlife in their
                natural habitat. The Northern Circuit's comprehensive path
                ensures a full Kilimanjaro experience, from lush rainforests to
                alpine deserts, leading to the majestic summit. and buffaloes,
                making for an enchanting beginning to your trek.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                How Challenging is the Northern Circuit Route?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                While the Northern Circuit presents its challenges, particularly
                due to its length, it is manageable with proper preparation. The
                extended days on the mountain aid in acclimatization,
                significantly reducing the difficulty compared to shorter, more
                direct routes. Trekkers who choose this path will find
                themselves well-adjusted to the altitude, making the final
                ascent to Uhuru Peak within reach.
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
                Summit Success Rate:
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371] lg:mt-0">
                The Northern Circuit boasts the highest success rate among all
                Kilimanjaro routes, thanks to its lengthy itinerary that allows
                trekkers to gradually acclimatize to the altitude. This route is
                a testament to the saying that "slow and steady wins the race,"
                providing climbers with the best chance to reach the summit and
                enjoy the breathtaking views from Africa's highest point.
              </p>{" "}
              <p className="mt-5 text-xl font-bold text-primary">
                What You Will See on the Northern Circuit Route
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371] lg:mt-0">
                Embarking on the Northern Circuit Route with Tazama offers a
                journey through the most diverse and captivating landscapes of
                Mount Kilimanjaro. This route, celebrated for its scenic beauty
                and tranquil paths, presents a rich tapestry of Kilimanjaro's
                ecosystems and panoramic views that are unmatched. Here's what
                awaits you:
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Lush Rainforests: </span>
                The trek begins in the dense rainforests at the base of
                Kilimanjaro, where the air is fresh, and the canopy teems with
                life. This verdant environment is home to an array of wildlife,
                including monkeys, exotic birds, and smaller mammals, offering a
                close encounter with nature.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Shira Plateau: </span>
                As you ascend, you'll emerge onto the Shira Plateau, a
                high-altitude desert with sweeping views across the African
                savannah below. This expansive landscape offers a sense of
                solitude and vastness that is both humbling and inspiring.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Alpine Deserts and Moors: </span>
                The route traverses the alpine desert and moorland zones, where
                the vegetation becomes sparse, and the terrain rugged. These
                sections offer stunning contrasts between the rock and ice
                formations and the wide-open skies.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Lava Tower: </span>The Lava
                Tower, a prominent volcanic rock formation, presents a
                challenging but rewarding climb. It's a key acclimatization
                point and offers spectacular views of the mountain's western
                face.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Northern Slopes: </span>
                Unique to this route, the northern slopes of Kilimanjaro are
                less traveled and provide a sense of untouched wilderness. The
                tranquility here is perfect for reflection and enjoying the
                peace of the mountain.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Panoramic Vistas: </span> The
                Northern Circuit wraps around the mountain, offering 360-degree
                views that include both the Kenyan and Tanzanian sides of
                Kilimanjaro. These breathtaking panoramas are a highlight for
                many trekkers.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Uhuru Peak: </span>
                The climax of the journey is the summit at Uhuru Peak, where the
                vast African continent stretches out below. Watching the sunrise
                from the highest point in Africa is an unforgettable experience
                that rewards the spirit of adventure.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Flora and Fauna: </span>
                Throughout the trek, the changing ecosystems reveal a variety of
                flora, from giant senecios and lobelias in the alpine moorland
                to the hardy plants of the alpine desert. The chance to spot
                wildlife, including the elusive Kilimanjaro leopard or herds of
                elephants in the distant plains, adds to the allure of the trek.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                Begin Your Kilimanjaro Journey with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Ready for an adventure that transcends the ordinary? Join Tazama
                on the Northern Circuit Route for an unforgettable journey to
                the summit of Kilimanjaro. With our expert guides, top-notch
                safety protocols, and commitment to environmental stewardship,
                we ensure a trek that's not just about reaching the top but
                creating memories that last a lifetime. Book your spot with
                Tazama today and step into the heart of Kilimanjaro's untouched
                beauty.
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
