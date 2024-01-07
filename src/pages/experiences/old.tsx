import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/legacy/image";
import { TazamaExperience } from "~/components/tazama-experience";
import { Button } from "~/components/ui/button";
import { array } from "fast-web-kit";
import ContentSection from "~/components/ContentSection";

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
export const honeyMoonersContent = [
  {
    rank: 1,
    reverse: true,
    image: "lioness.webp",
    actionTitle: "Our Story",
    title: " We are Tazama – a new luxury travel company",
    description: `Our outstanding guides and staff are experts who ensure your trip is seamless from start to finish. We offer authentic safaris, giving you up an up-close glimpse of these incredible ecosystems at the pace you'd prefer.\n
        We partner with outfitters that share our passion of environmentally sustainable business practices and commit to buying local, organic and women-owned where possible.\n
        Whether it's on the slopes of Kilimanjaro or the plains of the Serengeti, we promise to deliver an experience that is authentic, adventurous, and awe-inspiring! We can't wait to share our home with you.`,
  },
  {
    rank: 2,
    reverse: false,
    image: "maasai.webp",
    title: "LOCALLY OWNED & OPERATED",
    description:
      "When you travel with us, we'll be with you every step of the way. From the minute you touch down on the runway our talented, dedicated, and passionate staff are there to make sure you have the trip of a lifetime. We can't wait to share our home with you.",
  },
];
const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[80%] md:h-[300px] lg:w-[400px]">
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
      <main className="container flex flex-col items-center justify-center pl-5">
        <div className="sm:mb-52">
          {array
            .sort(honeyMoonersContent, "asc", "rank")
            .map((content, index: number) => (
              <section className="-mb-10 sm:-mb-72" key={index}>
                <ContentSection
                  rank={content.rank}
                  title={content.title}
                  image={content.image}
                  action={content.action}
                  reverse={content.reverse}
                  actionTitle={content.actionTitle}
                  description={content.description}
                />
              </section>
            ))}
        </div>
        <section className="container mt-4 flex flex-col lg:flex-row lg:items-center lg:space-x-[30px] ">
          <div className="relative mt-[40px] h-[500px] w-[90%]  lg:w-[800px] ">
            <Image
              src="/assets/images/gallery/family-trip.webp"
              className="rounded-md object-cover"
              alt="family-trip"
              layout="fill"
            />
          </div>
          <div className="mt-5 lg:w-[60%] ">
            <div className="lg:w-[600px]">
              <h3 className="font-now text-3xl  font-medium text-black lg:text-5xl">
                We are Tazama – a new luxury travel company
              </h3>
              <p className="pr-3 pt-5 text-base md:text-lg">
                Specialising in once-in-a-lifetime trips, we exist to ensure
                that your time away is perfect and has a positive impact. We
                believe it’s time to linger longer and afford places the time
                they richly deserve. We specialise in curating tailor-made
                luxury holidays that are ten days or more, so you can slow down,
                really unravel the essence of a destination and return feeling
                like a local. But we’re also a luxury travel specialist with a
                conscience and responsible travel is a core bedrock of our
                foundations. We want to ensure you have an unforgettable time
                that doesn’t compromise the very beauty of the place you’re
                visiting. This is travel built for the future. It’s time to
                awaken your wanderlust. The Times' top eleven sustainable travel
                companies
              </p>
            </div>
          </div>
        </section>
        <section className="container mt-4 flex flex-col lg:mt-[100px] lg:flex-row-reverse lg:items-center lg:gap-10 lg:space-x-[90px] ">
          <div className="relative mt-[40px] h-[500px] w-[90%]  lg:w-[800px] ">
            <Image
              src="/assets/images/gallery/classic-safaris.webp"
              className="rounded-md object-cover"
              alt="family-trip"
              layout="fill"
            />
          </div>
          <div className="mt-5 lg:w-[60%] ">
            <div className="lg:w-[600px]">
              <h3 className="font-now text-3xl  font-medium text-black lg:text-5xl">
                We are Tazama – a new luxury travel company
              </h3>
              <p className="pr-3 pt-5 text-base md:text-lg">
                Specialising in once-in-a-lifetime trips, we exist to ensure
                that your time away is perfect and has a positive impact. We
                believe it’s time to linger longer and afford places the time
                they richly deserve. We specialise in curating tailor-made
                luxury holidays that are ten days or more, so you can slow down,
                really unravel the essence of a destination and return feeling
                like a local. But we’re also a luxury travel specialist with a
                conscience and responsible travel is a core bedrock of our
                foundations. We want to ensure you have an unforgettable time
                that doesn’t compromise the very beauty of the place you’re
                visiting. This is travel built for the future. It’s time to
                awaken your wanderlust. The Times' top eleven sustainable travel
                companies
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 lg:mt-[100px] ">
          <h3 className="font-now text-3xl font-medium text-black lg:text-4xl">
            Get inspired with our month-by-month calendar
          </h3>

          <div className="mt-[40px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>

        <div className="my-[40px] flex flex-col items-center justify-center md:mt-[50px]">
          <h3 className="font-now text-3xl  font-medium text-black lg:text-4xl">
            Reasons to book with Tazama
          </h3>
          <TazamaExperience />

          <Button
            className="font-base font-now mt-5 text-white"
            data-tf-popup="yy0ZJs6g"
            data-tf-opacity="100"
            data-tf-size="100"
            data-tf-iframe-props="title=My branded typeform"
            data-tf-auto-close
            data-tf-transitive-search-params
            data-tf-medium="snippet"
          >
            Plan My Trip
          </Button>
        </div>
      </main>
    </>
  );
}
