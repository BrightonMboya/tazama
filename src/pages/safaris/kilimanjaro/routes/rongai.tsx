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
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The Rongai Route offers a unique approach to conquering Mount
                Kilimanjaro, standing out with its tranquil paths and the
                distinction of being the only trail starting from the mountain's
                northern side, near the Kenyan border. This route is especially
                appealing for those seeking solitude away from the crowds, or
                for adventurers trekking during the rainy season, thanks to its
                location which typically receives less rainfall.
              </p>{" "}
              <p className="mt-5 text-xl font-bold text-primary">
                Embrace the Quiet Adventure
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Rongai's gentle slopes make it a fantastic choice for trekkers
                who prefer a quieter journey. With fewer travelers, the path
                allows for a serene and intimate experience with nature, making
                every step through Kilimanjaro's diverse ecosystems even more
                memorable.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                Evaluating the Challenge
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                While Rongai presents a moderate challenge, it's highly favored
                by hikers who are comfortable with somewhat steeper paths. Its
                unique northern approach not only offers a chance to witness a
                higher density of wildlife, including antelopes, elephants, and
                buffaloes, but also boasts a great success rate due to its
                gradual ascent which aids in better acclimatization.
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
                Journey Length
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Spanning approximately 76 kilometers from the Nalemuru Gate to
                the exit, the Rongai Route unfolds over 7 days, allowing ample
                time for acclimatization and exploration. The itinerary
                includes:
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Day 1: A scenic 8km walk through the rainforest from Nalemuru
                Gate.
                <br />
                Day 2: A 16km hike into the moorland zone, witnessing the
                dramatic shift in vegetation. <br />
                Day 3: A short 3km ascent to Mawenzi Tarn Camp, nestled under
                Kilimanjaro's rugged peaks. <br />
                Day 4: A rest day for acclimatization, exploring the surrounding
                landscape. <br />
                Day 5: A 9km trek across the saddle, connecting Mawenzi and
                Kibo. <br />
                Day 6: The most challenging 21km summit attempt, starting at
                midnight. <br />
                Day 7: A 19km descent to Marangu Gate, reflecting on the
                journey’s unforgettable moments Descend to Mweka Camp, 9 km,
                reflecting on the accomplishment.
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
                Your Path to the Summit with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371] lg:mt-0">
                Choosing Tazama for your Rongai Route adventure ensures a
                journey marked by professional guidance, top-notch safety
                measures, and an unwavering commitment to environmental
                conservation. Our team's expertise guarantees a memorable trek,
                surrounded by Kilimanjaro's majestic beauty, without the
                environmental footprint.
              </p>{" "}
              <p className="mt-5 text-xl font-bold text-primary">
                WHAT YOU WILL SEE ON RONGAI ROUTE
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371] lg:mt-0">
                On the Rongai Route, trekkers are treated to a distinct and
                serene journey up Mount Kilimanjaro, offering a blend of
                captivating landscapes and wildlife encounters that make this
                path truly unique. Here's what you'll see along the way:
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Rich Rainforest: </span>
                Starting from the Nalemuru Gate, the initial stretch of the
                Rongai Route takes you through a lush rainforest, home to a
                variety of bird species, monkeys, and occasionally, larger
                mammals like elephants and buffaloes, making for an enchanting
                beginning to your trek.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Alpine Moorland: </span>
                As you ascend, the dense forest gives way to the open moorland,
                characterized by heather and grasses. This zone offers panoramic
                views of the Kenyan plains stretching out below, providing a
                stunning backdrop as you hike.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Mawenzi Tarn Camp: </span>This
                camp is set against the dramatic backdrop of Mawenzi, one of
                Kilimanjaro's volcanic cones. The rugged landscapes around
                Mawenzi Tarn are spectacular, with jagged peaks and a serene
                alpine lake that adds to the route's allure.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">The Saddle: </span>A wide, flat
                plateau connecting Mawenzi and Kibo, the saddle offers trekkers
                expansive views of the barren alpine desert landscape. This is a
                great place to spot unique alpine flora and experience the stark
                beauty of Kilimanjaro's high-altitude zones.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Kibo's Lunar Landscape: </span>
                As you approach Kibo, Kilimanjaro's main peak, the terrain takes
                on a lunar-like quality with its rocky and barren landscape. The
                stark beauty of this area, especially under the night sky as you
                make your summit attempt, is unforgettable.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Summit Views: </span> Reaching
                the summit of Kilimanjaro via the Rongai Route, you'll be
                rewarded with breathtaking views of the crater, the glacier, and
                the world below. Watching the sunrise from Uhuru Peak is an
                emotional and awe-inspiring experience that epitomizes the
                climax of your trek.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">Varied Wildlife: </span>
                The Rongai Route's proximity to the Amboseli National Park in
                Kenya means trekkers have a higher chance of encountering
                wildlife, including antelopes and elephants, especially during
                the initial and final days of the trek.
              </p>
              <p className="mt-5 text-xl font-bold text-primary">
                Begin Your Kilimanjaro Journey with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Embrace the road less traveled and experience Kilimanjaro like
                never before on the Rongai Route with Tazama. Prepare for a
                journey filled with breathtaking landscapes, wildlife
                encounters, and the unparalleled joy of reaching Africa's
                highest summit. Contact us today to start planning your
                adventure on Kilimanjaro's serene and wildlife-rich path
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
