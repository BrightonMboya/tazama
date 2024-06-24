import PrimaryHeader from "../../components/PrimaryHeader";
import { safaris } from "~/data/data";
import Link from "next/link";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";

const Page = () => {
  return (
    <>
      <HeadSEO title="Tazama Special Offers" />
      <PrimaryHeader
        image={`adventure.webp`}
        title="Our discounted special offers."
      />
      <div className="mx-auto  max-w-5xl px-4 md:px-8">
        <div id="offers" className="mb-10 py-8">
          <h3 className="text-4xl text-primary">
            Our Personal Tailored experiences
          </h3>
          <p className="mb-3 mt-5 2xl:text-lg text-darker/85">
            Welcome to our diverse collection of meticulously crafted
            itineraries, each designed to offer you a unique and unforgettable
            travel experience. Our itineraries are thoughtfully curated to
            showcase the beauty, culture, and adventure awaiting you at every
            destination.
          </p>
          <hr className="mt-4 border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safaris.map((safari, index) => (
            <div
              key={index}
            >
              <Link href={safari.href} className="relative cursor-pointer">
                <>
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={`/assets/images/gallery/${safari.img}`}
                      alt=""
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs text-primary sm:text-sm md:text-base">
                    {safari.name}
                  </p>
                </>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
