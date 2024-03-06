import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import HeadSEO from "~/components/ui/Head";

export default function Page() {
  return (
    <>
    <HeadSEO title="Kilimanjaro Vaccinations"/>
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Vaccination for Kilimanjaro
            </h1>
          </div>
        </div>
      </div>

      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start justify-center lg:mx-0 lg:gap-10">
          <div className="mx-auto  px-4 md:px-8 lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro Vaccinations: Your Shield Against Diseases
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Conquering Mount Kilimanjaro, the tallest freestanding mountain
                in the world, is an exhilarating experience that demands
                meticulous preparation, especially when it comes to health and
                safety. Tazama is here to ensure that your adventure is not only
                memorable but also safeguarded against any health risks that
                might arise due to high altitude and the tropical environment of
                Tanzania.
              </p>{" "}
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Vaccinations play a crucial role in protecting trekkers from
                various diseases that can be encountered while climbing
                Kilimanjaro. These vaccines prime your immune system to fight
                off pathogens, ensuring you remain healthy and focused on your
                trek.
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
                Essential Vaccinations for Kilimanjaro
              </p>
              <ul className="list-disc pl-10 text-xl text-[#757371]">
                <li>
                  <span className="text-primary">Yellow Fever: </span> Mandatory
                  for travelers coming from or transiting through a yellow
                  fever-endemic area. It provides protection against this
                  mosquito-borne virus, which can have severe consequences.
                </li>
                <li>
                  <span className="text-primary">Hepatitis A and B: </span>{" "}
                  Recommended to prevent these liver infections transmitted
                  through contaminated food, water, or bodily fluids.
                </li>
                <li>
                  <span className="text-primary">Typhoid: </span> Advised for
                  travelers to Tanzania, as it can be contracted through
                  contaminated food and water.
                </li>
                <li>
                  <span className="text-primary">
                    Tetanus, Diphtheria, and Polio:{" "}
                  </span>{" "}
                  These booster shots are crucial to prevent infections that can
                  be life-threatening.
                </li>
                <li>
                  <span className="text-primary">Rabies: </span> Recommended for
                  trekkers who might be exposed to wild or domestic animals.
                </li>
                <li>
                  <span className="text-primary">Meningitis: </span> Especially
                  for those who might stay longer or visit rural areas.
                </li>
                <li>
                  <span className="text-primary">
                    Measles, Mumps, and Rubella (MMR):{" "}
                  </span>{" "}
                  Given the outbreaks in some regions, this vaccine is advised.
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
                Malaria Prevention
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Malaria is a concern in Tanzania, including the lower slopes of
                Kilimanjaro. Anti-malarial medication is recommended, alongside
                measures to prevent mosquito bites, such as using insect
                repellent and wearing long sleeves and pants.
                <br />
                <br />
                Be sure you understand how an anti-malarial may affect your
                sleep, appetite and exposure to sun before you begin,
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Altitude Sickness: Awareness and Prevention
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Altitude sickness is a significant concern on Kilimanjaro.
                Tazama emphasizes the importance of acclimatization and adopting
                a slow pace ("pole pole" in Swahili) to reduce the risk. Our
                guides are trained to recognize symptoms of altitude sickness
                early and take necessary actions, including descending if
                conditions worsen.
                <br />
                <br />
                You can also consider taking diamox which can help prevent
                altitude sickness.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Stay Hydrated and Nourished
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Hydration and proper nutrition are key to a successful summit.
                Tazama provides ample clean water and nutritious meals to keep
                you energized and hydrated throughout your climb.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Tazama's Commitment to Your Safety
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                Choosing Tazama means opting for a partner who prioritizes your
                safety above all. Our team, equipped with the necessary medical
                knowledge and evacuation plans, ensures you have a safe and
                enjoyable trekking experience.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Preparing for Your Trek
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                <span className="text-primary">
                  Consult with a healthcare provider{" "}
                </span>
                to determine the vaccinations and medications you'll need based
                on your health history and the specifics of your trip. Start the
                vaccination process early, as some vaccines require multiple
                doses or need to be administered well in advance of your travel
                date.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Embark With Confidence
              </p>
              <p className="mb-3 mt-5 text-xl text-[#757371]">
                With Tazama, embark on your Kilimanjaro adventure with the
                confidence that you're fully prepared for the physical and
                health challenges ahead. Our comprehensive care and support
                system is designed to ensure you can focus on the journey and
                the joy of reaching the roof of Africa safely.
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
