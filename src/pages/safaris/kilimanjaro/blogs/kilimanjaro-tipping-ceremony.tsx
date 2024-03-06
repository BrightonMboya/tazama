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
              Kilimanjaro's Tipping Ceremony
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Ascending the mighty Kilimanjaro is an adventure that leaves an
                indelible mark on your soul, not just for the breathtaking views
                or the exhilarating challenge but for the unwavering support and
                dedication of your climbing team. Tazama, with its commitment to
                excellence and genuine connections, cherishes the tradition of
                the tipping ceremony—a moment that transcends mere transaction
                and becomes a heartfelt expression of gratitude towards those
                who have become more than guides, porters, and cooks; they've
                become part of your journey's story.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Understanding the Tradition
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                In the realm of mountain climbing, the tipping ceremony is a
                revered tradition, much like the unwritten yet universally
                understood language of appreciation that spans continents from
                the peaks of Nepal to the trails of Peru. On Kilimanjaro, this
                ceremony is the climax of your expedition, a time to acknowledge
                the hard work, perseverance, and spirit of your mountain family.
                It's an opportunity to give back, to say thank you in the most
                tangible way to those who've shared in your triumphs and
                challenges.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                The Guiding Principles of Tipping
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                While the act of tipping is infused with personal discretion and
                subjective experience, at Tazama, we provide guidance to ensure
                that your token of appreciation aligns with the customary
                practices of Kilimanjaro. The essence of tipping here is not
                measured by percentages or mandatory sums but by the
                acknowledgment of effort and excellence. Here are some factors
                to consider as you prepare for this significant moment:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Group Dynamics: </span>
                  The size of your expedition group can influence the tipping
                  amount. In larger assemblies, the logistics, coordination, and
                  personal attention demand a greater collective effort,
                  suggesting a higher tip to fairly reward the team's hard work.
                </li>
                <li>
                  <span className="text-primary">
                    Service Beyond Expectation:{" "}
                  </span>
                  The caliber of service—the extra mile walked by your guides,
                  the culinary magic in the most challenging conditions, the
                  smiles and encouragement from your porters—should influence
                  your tipping decision. Exceptional service merits exceptional
                  recognition.
                </li>
              </ul>
              <p className="mt-5 text-2xl font-bold text-primary">
                A Personal Expression of Gratitude
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Tipping on Kilimanjaro goes beyond financial transactions; it's
                a celebration of the human spirit, of endurance, and of the
                bonds formed on the slopes of Africa's highest peak. While we
                suggest a guideline of 10-15% of your climb cost as a starting
                point, we encourage you to let your personal experience, the
                quality of service, and the depth of your gratitude guide your
                contribution.
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
                The Tipping Ceremony: A Moment of Unity
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The tipping ceremony, typically held after your descent, is a
                poignant moment of unity and mutual respect. It's an occasion
                marked by speeches, songs, and sometimes, dance, where climbers
                and crew alike share their experiences, challenges, and joys.
                This ceremony embodies the essence of the Kilimanjaro climb—not
                just the physical ascent but the collective journey of hearts
                and spirits united towards a common goal.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Your Kilimanjaro Adventure with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                As you prepare to take on the challenge of Kilimanjaro with
                Tazama, know that you're not just embarking on a climb but
                becoming part of a tradition that honors the dignity, hard work,
                and dreams of every individual who walks alongside you. The
                tipping ceremony is your opportunity to contribute to this
                legacy of respect and gratitude, ensuring that the journey to
                Kilimanjaro's summit is as enriching for those who guide and
                support you as it is for you.
                <br />
                <br />
                Ready to experience the magic of Kilimanjaro with a team that
                values connection, respect, and shared success? Tazama awaits to
                guide you through this journey of a lifetime, where every step
                is a story, and every gesture of gratitude weaves you deeper
                into the tapestry of Kilimanjaro's legacy.
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
