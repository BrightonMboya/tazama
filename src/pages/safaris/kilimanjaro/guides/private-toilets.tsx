import Image from "next/legacy/image";
import BlogLayout from "~/components/ui/BlogLayout";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";

export default function Page() {
  return (
    <BlogLayout title="Private toilets in Kilimanjaro">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mt-5 text-2xl font-bold text-primary">
              Emphasizing Privacy and Hygiene
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Tazama prides itself on enhancing the Kilimanjaro climbing
              experience with the provision of Private Toilet Tents, a service
              that guarantees privacy and convenience for all climbers.
              Recognizing the importance of hygiene and comfort during the
              climb, Tazama offers this exclusive amenity to ensure a more
              pleasant and dignified journey to the summit.
            </p>{" "}
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Climbing Mount Kilimanjaro is an intimate and bonding experience
              with your team, but privacy is paramount, especially when it comes
              to personal hygiene. Tazama addresses this need by providing
              high-quality, private toilet tents for climbers. Unlike the basic
              public facilities on the mountain, our private toilets offer a
              clean, secluded, and sanitary option.
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
              Understanding Toilet Options on Kilimanjaro
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Kilimanjaro offers various toilet facilities, ranging from basic
              wooden structures to more sophisticated portable options. The
              wooden toilets, while common, lack privacy and cleanliness. To
              combat this, Tazama provides portable toilets with individual
              tents, ensuring a hygienic and private solution that far surpasses
              the public options available.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              No Showers but Ample Cleanliness Solutions
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              While showers are not available on Kilimanjaro, Tazama ensures
              that climbers receive a daily supply of hot water for washing,
              maintaining a level of personal hygiene throughout the trek.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              The Advantage of Private Over Public Toilets
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Public toilets on Kilimanjaro can be unhygienic and uncomfortable,
              especially during the night or in cold weather. Tazama's private
              toilet tents are a significant upgrade, offering a clean, chemical
              toilet with a seat and flush mechanism within a stand-up tent for
              ease of use and maximum privacy.
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
              The Tazama Difference
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Choosing Tazama for your Kilimanjaro climb means opting for an
              experience where your comfort and hygiene are a top priority. Our
              portable, pump-flush toilets are eco-friendly and maintained to
              the highest standards of cleanliness. Hand sanitizers are provided
              to all climbers, ensuring health and hygiene are maintained
              throughout the trek.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              Elevating Your Climbing Experience
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              The provision of private toilet tents is just one of the many ways
              Tazama goes above and beyond to ensure a comfortable, successful,
              and enjoyable Kilimanjaro climb. By focusing on the details that
              matter, such as privacy and hygiene, we ensure that your journey
              to the roof of Africa is as rewarding as it is unforgettable. Join
              Tazama for a Kilimanjaro experience that prioritizes your
              well-being, every step of the way.
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
