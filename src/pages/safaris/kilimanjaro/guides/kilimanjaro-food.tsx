import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";

export default function Page() {
  return (
    <>
      <HeadSEO title="Kilimanjaro food" />
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Kilimanjaro Food.
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro Cuisine
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Tazama ensures your journey to the summit of Mount Kilimanjaro
                is not only successful but also delightful, especially when it
                comes to nourishment. Recognizing the essential role that proper
                nutrition plays in high-altitude trekking, we go above and
                beyond to provide you with meals that are not only
                energy-boosting but also appealing to the palate.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Embarking on a trek up Kilimanjaro means engaging in physically
                demanding activities for hours each day. The energy expenditure
                is immense, even more so due to the altitude. That's where
                Tazama's culinary excellence shines through, offering an array
                of dishes designed to meet your caloric and nutritional needs
                while pleasing your taste buds.
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
                Culinary Expertise at High Altitude
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Our culinary team, comprising seasoned chefs alongside our
                dedicated guides and porters, focuses on your well-being and
                satisfaction. They prepare meals that ensure you're well-fed,
                hydrated, and ready to face the challenges of the next day. Our
                commitment is to serve high-quality, delicious meals that cater
                to all dietary preferences and restrictions, ensuring everyone
                is energized and satisfied.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                What's on the Menu?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                From breakfast to dinner, every meal is thoughtfully crafted to
                provide a balanced diet rich in carbohydrates, proteins, and
                fats, essential for maintaining energy levels and supporting
                muscle recovery. Here's a glimpse into what you can expect:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Breakfast: </span> Start your
                  day with a hearty breakfast including porridge, eggs prepared
                  to your liking, fresh fruits, bread with jam or honey, and a
                  selection of hot beverages.
                </li>
                <li>
                  <span className="text-primary">Lunch:</span> Recharge with
                  lunches that range from pasta dishes to fresh salads,
                  sandwiches, and soups, all designed to refuel your body during
                  the trek.
                </li>
                <li>
                  <span className="text-primary">Dinner: </span> Wind down with
                  a dinner that feels like a reward for the day's efforts. Enjoy
                  local and international dishes, from savory stews and grilled
                  meats to vegetables and rice, followed by a sweet treat for
                  dessert.
                </li>
                <li>
                  <span className="text-primary">Hydration: </span> The Key to
                  altitude acclimatization
                </li>
              </ul>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Staying hydrated is crucial to mitigate the risks associated
                with high altitude. We emphasize regular water intake throughout
                the day, complemented by a variety of hot drinks to ensure
                you're well-hydrated and to aid in digestion and relaxation.
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
                Customized to Your Dietary Needs
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Whether you have specific dietary requirements or preferences,
                Tazama respects and accommodates them all. Inform us in advance,
                and our chefs will tailor the menu, ensuring you have the best
                dining experience, even at the roof of Africa.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                The Tazama Difference
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Choosing Tazama for your Kilimanjaro trek means opting for a
                journey where luxury, personalization, and safety converge. Our
                food, prepared with care and expertise, is just one aspect of
                the comprehensive support you receive, ensuring your trek is as
                enjoyable as it is triumphant.
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                With Tazama, embark on your Kilimanjaro adventure with the
                confidence that every meal will be a delightful, energizing
                experience, meticulously planned to support your journey to the
                summit. Join us and taste the adventure!
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
