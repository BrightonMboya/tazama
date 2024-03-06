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
              Do you need visa to climb Kilimanjaro?
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro Visa: Your Gateway to Adventure
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Embarking on a journey to Mount Kilimanjaro, the crown jewel of
                Tanzania and Africa's highest peak, is a dream for many
                adventurers and trekkers worldwide. Before setting foot on this
                majestic mountain, there's a crucial step every traveler must
                navigate: obtaining the necessary Kilimanjaro visa. Tazama, your
                trusted partner in luxury and personalized trekking experiences,
                is here to guide you through this essential process, ensuring
                your adventure starts smoothly and stress-free.
              </p>{" "}
              <p className="mt-5 text-2xl font-bold text-primary">
                Do You Need a Visa to Climb Kilimanjaro?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Absolutely, yes. As Mount Kilimanjaro graciously stands in the
                northern part of Tanzania, most foreign nationals are required
                to obtain a visa for entry into Tanzania. This is a
                non-negotiable prerequisite for anyone planning to conquer
                Kilimanjaro, requiring a passport valid for at least six months
                beyond your entry date, with at least one blank page for stamps.
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
                Securing Your Visa: Options and Processes
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                For those embarking from afar, the Kilimanjaro Visa On Arrival
                (VOA) presents a convenient option, allowing trekkers to obtain
                their visa directly at Tanzania’s Kilimanjaro International
                Airport [JRO]. While this might seem the easier route, it's
                essential to be aware of potential delays or issues that could
                arise. To ensure a seamless start to your adventure, Tazama
                recommends securing your visa in advance through the online
                application process, providing peace of mind as you prepare for
                your journey.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Online Visa Application: What You Need to Know
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                The Tanzanian government has streamlined the visa application
                process, allowing travelers to apply online. This process
                involves filling out a form, making a payment, and submitting
                your application for review. Notification of acceptance or
                rejection is conveniently sent via email, with the option to
                track your application status online. Required documents include
                a valid passport, a passport-sized photo, and, in some cases, an
                invitation letter or proof of accommodation in Tanzania.
                <br />
                <br />
                For the online visa application, visit: Tanzania Immigration
                Services Website.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro Visa Requirements at a Glance:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Valid Passport:</span> Must be
                  valid for six months beyond your travel date, with at least
                  one blank page.
                </li>
                <li>
                  <span className="text-primary">
                    Yellow Fever Certificate:
                  </span>{" "}
                  Required if arriving from a yellow fever-endemic country.
                </li>
                <li>
                  <span className="text-primary">Passport Size Photo</span> Two
                  photos are needed for a Visa on Arrival.
                </li>
                <li>
                  <span className="text-primary">
                    Invitation Letter and Proof of Residency
                  </span>{" "}
                  For Visa on Arrival, showing your accommodation details.
                </li>
                <li>
                  <span className="text-primary">Email Address:</span> For
                  e-Visa verification and notification.
                </li>
                <li>
                  <span className="text-primary">Payment Method:</span> Online
                  payments accepted via credit/debit cards and PayPal.
                </li>
              </ul>
              <p className="mt-5 text-2xl font-bold text-primary">
                Tanzania Visa Costs and Processing Times:
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  U.S. Citizens: Multiple-entry e-Visa, standard to super rush
                  processing, USD 100.00.
                </li>
                <li>
                  North Korean Citizens: Volunteer e-Visa, standard to super
                  rush processing, USD 100.00.
                </li>
                <li>
                  Other Nationalities: Tourist e-Visa, standard to super rush
                  processing, USD 100.00.
                </li>
              </ul>
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
                Where to Obtain Your Visa:
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Online, at any Tanzanian Embassy, High Commission, or specific
                entry points to Tanzania, including international airports and
                border crossings.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Elevating Your Kilimanjaro Experience
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                At Tazama, we understand that the journey to Kilimanjaro's
                summit begins long before you set foot on the mountain. Our
                commitment to your seamless adventure extends beyond the trek
                itself, ensuring every logistical detail, including the visa
                process, is handled with the utmost care and expertise. With
                Tazama, you're not just embarking on a trek; you're indulging in
                a fully catered, luxury experience that prioritizes your safety,
                comfort, and personal preferences.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Ready to Start Your Kilimanjaro Adventure?
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Let Tazama be your guide to not only conquering Africa's highest
                peak but also navigating the essential steps before your journey
                begins. With our expert knowledge, personalized service, and
                commitment to luxury and safety, your Kilimanjaro trek will be
                an unforgettable adventure from start to finish. Contact Tazama
                today, and let's start planning your climb with the peace of
                mind that every detail, including your Kilimanjaro visa, is in
                expert hands.
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
