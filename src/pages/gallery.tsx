import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import { MemoryImage, honeyMooners } from "./experiences/honeymooners";

const GalleryPage = () => {
  React.useEffect(() => {
    setPageTitle("Gallery");
  }, []);

  return (
    <>
      <PrimaryHeader image="gallery.webp" title="Glimpse of our Memories" />

      <section className="flex flex-col items-center justify-center">
        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133] text-center">
            Our Personal Tailored experiences
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371] text-center">
            Welcome to our diverse collection of meticulously crafted
            itineraries, each designed to offer you a unique and unforgettable
            travel experience. Our itineraries are thoughtfully curated to
            showcase the beauty, culture, and adventure awaiting you at every
            destination.
          </p>
        </div>
        <div className="mt-10 lg:mt-[10px] ">
          <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
