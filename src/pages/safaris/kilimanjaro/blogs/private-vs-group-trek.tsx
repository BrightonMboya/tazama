import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";

import BlogLayout from "~/components/ui/BlogLayout";

export default function Page() {
  return (
    <>
      <BlogLayout title="Private vs Group Trek">
        <section className="flex items-start lg:mx-0 lg:gap-10">
          <div className="mx-auto  lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Embracing the Private Tour Experience
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                For those seeking a more tailored adventure, Tazama offers
                luxurious private tours. These excursions offer the ultimate
                personalized experience, allowing climbers to set their pace,
                choose their path, and enjoy a journey designed around their
                preferences and needs. From solo adventurers to family groups,
                our private tours ensure that your Kilimanjaro climb is exactly
                as you envisioned, with all the luxury and attention to detail
                that sets Tazama apart.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                The Group Climb Advantage
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Group climbs on Kilimanjaro offer a unique blend of shared
                challenge and collective triumph. They're not just about
                reaching the summit; they're about the bonds formed on the way
                up. With Tazama, climbers enjoy the benefits of shared
                experiences, the joy of new friendships, and the support of a
                community, all while keeping costs accessible. Our group sizes
                are carefully managed to ensure safety and personal attention,
                making your climb both intimate and inclusive.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Choosing Your Path with Tazama
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Whether you're drawn to the camaraderie of a group climb or the
                bespoke experience of a private tour, Tazama is here to make
                your Kilimanjaro dream a reality. We understand the importance
                of flexibility, support, and personal attention on such a
                monumental journey. Our commitment to luxury, safety, and
                bespoke experiences ensures that every climber, regardless of
                their choice to continue or descend, feels valued, supported,
                and part of the Tazama family.
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
                Your Kilimanjaro Adventure Awaits
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Climbing Kilimanjaro is an invitation to challenge yourself,
                connect with nature, and become part of a community of
                adventurers. Whether in the solidarity of a group or the
                exclusivity of a private tour, Tazama is dedicated to providing
                a Kilimanjaro experience that is as fulfilling as it is
                unforgettable. Ready to take the first step on your Kilimanjaro
                journey? Reach out to Tazama, where your adventure begins with
                trust, care, and the promise of an extraordinary climb.
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
    </>
  );
}
