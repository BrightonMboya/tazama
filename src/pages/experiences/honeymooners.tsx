import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/legacy/image";
import { TazamaExperience } from "~/components/tazama-experience";
const honeyMooners = [
  {
    id: 1,
    src: "/assets/images/gallery/family-trip.webp",
  },
  {
    id: 2,
    src: "/assets/images/gallery/maasai.webp",
  },
  {
    id: 3,
    src: "/assets/images/gallery/blog.webp",
  },
  {
    id: 4,
    src: "/assets/images/gallery/offer.webp",
  },
  {
    id: 5,
    src: "/assets/images/gallery/classic-safaris.webp",
  },
  {
    id: 6,
    src: "/assets/images/gallery/discovery.webp",
  },
];

const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[80%]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" />
    </div>
  );
};

export default function Index() {
  return (
    <>
      <PrimaryHeader
        title="Big Title about the experience"
        image="/home.webp"
      />
      <main className="pl-5">
        <section className="mt-5 flex flex-col ">
          <div className="relative h-[500px] w-[90%] ">
            <Image
              src="/assets/images/gallery/family-trip.webp"
              className="rounded-md object-cover"
              alt="family-trip"
              layout="fill"
            />
          </div>
          <div className="mt-5">
            <h3 className="font-now text-lg font-medium">
              We are Tazama – a new luxury travel company
            </h3>
            <p className="pr-3 pt-5 text-base">
              Specialising in once-in-a-lifetime trips, we exist to ensure that
              your time away is perfect and has a positive impact. We believe
              it’s time to linger longer and afford places the time they richly
              deserve. We specialise in curating tailor-made luxury holidays
              that are ten days or more, so you can slow down, really unravel
              the essence of a destination and return feeling like a local. But
              we’re also a luxury travel specialist with a conscience and
              responsible travel is a core bedrock of our foundations. We want
              to ensure you have an unforgettable time that doesn’t compromise
              the very beauty of the place you’re visiting. This is travel built
              for the future. It’s time to awaken your wanderlust. The Times'
              top eleven sustainable travel companies
            </p>
          </div>
        </section>

        <div className="mt-10">
          <h3 className="font-now text-lg font-medium">
            Get inspired with our month-by-month calendar
          </h3>
          <div className="mt-[20px] flex flex-col items-center space-y-5">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>

        <div className="mt-[40px] flex flex-col items-center">
          <h3 className="font-now text-3xl  font-medium text-black lg:text-5xl">
            Reasons to book with Tazama
          </h3>
          <TazamaExperience />
        </div>
      </main>
    </>
  );
}
