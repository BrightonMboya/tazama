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
              Your Mount Kilimanjaro Family
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The adventure of Climbing Mount Kilimanjaro isn't just about
                reaching the peak; it's about the joyous journey you undertake
                with your new mountain family. At Tazama, we understand that the
                essence of a memorable Kilimanjaro climb lies in the camaraderie
                and shared experiences with your dedicated team of guides and
                porters. They are more than just crew members; they become your
                family, your cheerleaders, and the soul of your adventure
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">Your Crew</p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Climbing the highest mountain in Africa is a transformative
                experience, reshaping your view of the world and yourself. But
                what truly elevates this journey are the people you share it
                with—your Kilimanjaro porters and guides. At Tazama, we take
                immense pride in our exceptional team of experienced guides,
                porters, kitchen crew, and support staff. They bring the
                mountain to life, not just with their invaluable support but
                with their vibrant spirit, singing, and dancing their way into
                your heart.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                A Symphony of Joy and Togetherness
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                On Kilimanjaro, every day is a celebration, a testament to the
                human spirit's resilience and joy. Our guides and porters embody
                this spirit, turning the climb into a festive journey. With
                songs that echo through the valleys and dances that animate the
                campsites, they invite you to partake in a unique cultural
                exchange that's as enriching as the climb itself. The melodies
                of Kilimanjaro, taught with smiles and open hearts, become the
                soundtrack of your adventure, a harmonious backdrop to the
                stunning vistas and challenging ascents.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Summit Celebrations: A Collective Triumph
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Reaching the summit of Kilimanjaro is a monumental achievement,
                a moment of triumph that calls for jubilant celebration. Who
                better to share this pinnacle of joy with than your mountain
                family? Our team at Tazama ensures that every milestone, no
                matter how small, is celebrated with song and dance. It's not
                just about reaching the top; it's about embracing every step of
                the journey with a light heart and a joyful spirit.
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
                An All-Singing, All-Dancing Adventure
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                At Tazama, we believe that the essence of adventure lies in the
                connections we make and the experiences we share. Our Tanzanian
                team goes above and beyond to foster a sense of unity and
                belonging among climbers. When the rhythm of Kilimanjaro calls,
                we all join in—clapping, singing, dancing, and celebrating the
                journey together. It's an invitation to let go, immerse yourself
                in the moment, and be part of something truly magical.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Join Our Jubilant Kilimanjaro Family
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Choosing Tazama for your Kilimanjaro climb means not just
                embarking on an epic journey to the Roof of Africa but also
                becoming part of a vibrant, joyful family. Our commitment to
                excellence in client care is matched only by our passion for
                celebrating every moment of the climb. With Tazama, you're not
                just climbing a mountain; you're creating unforgettable
                memories, bound by song, dance, and the spirit of togetherness.
                <br/>
                <br/>
                Are you ready to experience the ultimate Kilimanjaro adventure,
                where every step is a reason to celebrate? Join us at Tazama,
                and let's sing and dance our way to the summit together. Your
                mountain family awaits!
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
