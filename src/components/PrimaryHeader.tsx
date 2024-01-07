type primaryHeader = {
  title: string;
  image: string;
  subTitle?: string;
};

const PrimaryHeader = (props: primaryHeader) => {
  return (
    <div className="relative h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
        <img
          src="/assets/images/gallery/home.webp"
          className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
        />
        <div className="container">
          <p className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
            {props.title}
          </p>
          {props.subTitle && (
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-sm text-white">
              {props.subTitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
