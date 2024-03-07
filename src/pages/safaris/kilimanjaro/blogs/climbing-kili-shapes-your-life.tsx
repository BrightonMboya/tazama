import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";
import BlogLayout from "~/components/ui/BlogLayout";

export default function Page() {
  return (
    <BlogLayout title="Climbing Kilimanjaro shapes your life">
      <section className="mx-auto flex items-start  lg:mx-0 lg:gap-10">
        <div className="mx-auto  lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Embarking on the challenge of Climbing Mount Kilimanjaro is more
              than just a mark on a bucket list; it's an expedition that could
              profoundly transform your outlook on life. Imagine standing under
              the starlit sky, the cold biting at your cheeks, each breath a
              testament to your resilience. The climb is arduous, pushing you to
              the brink of your physical and mental limits. Yet, it's in these
              moments of sheer willpower and determination that you discover the
              boundless potential within you.
            </p>{" "}
            <p className="mt-5 text-2xl font-bold text-primary">
              A Journey of Humility and Equality
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              The path to Kilimanjaro's summit is a great leveler. It strips
              away all pretenses, revealing the core of human endurance and
              spirit. Here, on these ancient trails, you learn a humbling truth:
              we are all equal in the face of nature's majesty. The mountain
              does not discriminate; it challenges all equally, teaching us the
              value of every step taken in earnest
            </p>{" "}
            <p className="mt-5 text-2xl font-bold text-primary">
              The Power of Support and Community
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Climbing Kilimanjaro is a testament to the strength found in
              unity. The journey is intensely personal, yet it is the support
              from those around you—porters, guides, fellow climbers—that
              propels you forward. This trek teaches you to embrace help with
              grace and to extend your hand in kind. It's a powerful reminder of
              our shared humanity and the strength that comes from
              collaboration.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              Patience, Persistence, and the Slow March to Success
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Kilimanjaro demands patience. The slow, deliberate pace is a
              lesson in itself, teaching you the value of persistence and the
              strength of gradual progress. It's a metaphor for life's
              challenges, where the key to overcoming obstacles often lies in
              steady, persistent effort rather than rushed endeavors. On
              Kilimanjaro, every step is a lesson in endurance, every breath a
              reminder of the journey's worth.
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
              Stepping Beyond Comfort to Embrace Adventure
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              To climb Kilimanjaro is to step boldly beyond the familiar
              confines of comfort, into a realm where adventure reigns. It's in
              this leap of faith that you discover the exhilaration of the
              unknown, the joy of exploration, and the transformative power of
              confronting the new. Standing atop Africa, the world unfolds in a
              new light, urging you to embrace the vastness of possibility.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              Finding Beauty in Every Direction
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              As you ascend, remember to pause, to breathe in the crisp mountain
              air, to witness the unfurling beauty of the world from this unique
              vantage point. Kilimanjaro teaches you to appreciate the journey
              in all its facets—the struggle, the camaraderie, the breathtaking
              vistas. It's a reminder to cherish each moment, for each step is a
              part of a larger, beautiful journey.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              A Changed Perspective
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Climbing Mount Kilimanjaro alters your perspective, not just on
              the mountain, but on life itself. It's a voyage that challenges,
              humbles, and ultimately, inspires profound change within. At
              Tazama, we are committed to crafting journeys that not only reach
              physical summits but also elevate the spirit. Our luxury,
              personalized expeditions promise not just a climb, but an
              awakening.
              <br />
              <br />
              Are you ready to transform your view of the world and yourself?
              Join us on this life-altering adventure to the roof of Africa. Let
              Tazama be the guide on your journey to self-discovery and
              boundless potential.
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

      <section className="mx-auto mt-5 flex w-full flex-col items-center  space-y-1  lg:flex-row  lg:items-start lg:space-x-[1%] lg:space-y-0  ">
        <div className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]">
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
        <div className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]">
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
        <div className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]">
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
    </BlogLayout>
  );
}
