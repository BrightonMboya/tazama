/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
type primaryHeader = {
  title: string | undefined;
  image: string | undefined;
  subTitle?: string | undefined;
};

const PrimaryHeader = (props: primaryHeader) => {
  return (
    <div className="relative h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
        <img
          src={`/assets/images/gallery/${props.image}`}
          className="absolute left-0 right-0 top-0 -z-50 h-screen w-full object-cover opacity-80"
        />
        <div className="container">
          <h1 className=" absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl text-white font-amiora">
            {props.title}
          </h1>

          {props.subTitle && (
            <h3 className="font-raleway absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-lg tracking-wide text-white">
              {props.subTitle}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
