import React from "react";
import HeadSEO from "./Head";

export default function BlogLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <React.Fragment>
      <HeadSEO title={title} />
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80"
          />
          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto  max-w-7xl px-4 pb-10 md:px-0">
          {children}
        </section>
      </section>
    </React.Fragment>
  );
}
