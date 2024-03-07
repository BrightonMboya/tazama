import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";
import BlogLayout from "~/components/ui/BlogLayout";

export default function Page() {
  return (
    <BlogLayout title="Summit Night">
      <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              As you prepare to conquer Mount Kilimanjaro, the pinnacle of your
              adventure awaits during the enigmatic summit night. This is the
              moment that tests your endurance, spirit, and determination under
              the veil of darkness. With Tazama, your journey to the rooftop of
              Africa is enveloped in support, guidance, and a touch of luxury
              that elevates your climbing experience. Let's delve into what
              makes summit night a transformative chapter in your Kilimanjaro
              saga.
            </p>{" "}
            <p className="mt-5 text-2xl font-bold text-primary">
              The Midnight March: A Prelude to Triumph
            </p>
            <ul className="list-disc pl-10 text-xl text-[#757371]">
              <li>
                <span className="text-primary">Altitude and Sleep: </span>
                The daunting elevations make rest elusive. By embarking at
                midnight, we turn restlessness into progress, climbing towards
                the stars.
              </li>
              <li>
                <span className="text-primary">
                  Pacing and Acclimatization:{" "}
                </span>
                The slow, deliberate pace necessary for success is more
                manageable under the cool night sky, reducing the risk of
                altitude sickness and conserving your energy for the summit
                push.
              </li>
              <li>
                <span className="text-primary">The Reward of Dawn: </span>
                There's a profound magic in reaching Stella Point in time to
                witness the sunrise. The horizon blooms with color, a visual
                reward for your efforts and a memory to cherish forever.
              </li>
            </ul>
            <p className="mt-5 text-2xl font-bold text-primary">
              What to Expect When the World Sleeps
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Summit night is unlike any other part of your Kilimanjaro journey.
              The air is thinner, the cold more biting, and the path ahead
              illuminated only by moonlight and the beams of your headlamps.
              It's a surreal landscape of shadows and snow, where the mountain
              reveals its raw beauty.
              <br />
              <br />
              Your Tazama team, a beacon of support and expertise, ensures every
              detail is managed, from the pacing to the encouragement, making
              this challenging ascent not just bearable but deeply rewarding.
              The sense of camaraderie and shared purpose is palpable, turning
              individual effort into a collective triumph. Just when you think
              you can’t take another step our team will be there to grab your
              pack and sing you a song to get you another few meters.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              The Summit: A New Dawn
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              As you approach the summit, the night gives way to the first light
              of dawn, painting the glaciers and the vast plains below in hues
              of gold and pink. The sight of Uhuru Peak, bathed in the morning
              light, is a moment of unparalleled emotion and achievement. It's
              here, at the roof of Africa, that you realize the magnitude of
              your journey—not just the physical climb but the inner journey of
              growth and self-discovery.
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
              Descending: A Journey Back to Earth
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              After the euphoria of the summit, the descent begins—a rapid
              return to the lower camps where oxygen is richer and the warmth of
              the sun thaws the chill of the night. This journey back down is a
              time for reflection, for processing the enormity of what you've
              achieved, and for looking forward to the stories you'll share.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              Your Kilimanjaro Night with Tazama: A Symphony of Stars and Dreams
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Choosing Tazama for your Kilimanjaro climb means embracing the
              summit night with confidence, supported by a team dedicated to
              your success and comfort. Our approach to luxury in the wilderness
              means you're free to focus on the experience, enveloped in the
              care and expertise that sets us apart.
              <br />
              <br />
              As you contemplate your Kilimanjaro adventure, remember that
              summit night is not just a challenge to overcome but a profound
              experience that will stay with you forever. It's a testament to
              the human spirit's capacity to dream, endure, and triumph.
              <br />
              <br />
              Ready for an unforgettable journey with Tazama? Let's make your
              Kilimanjaro dream a reality, where every step is a step towards
              the extraordinary.
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
