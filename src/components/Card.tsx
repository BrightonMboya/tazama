import React from "react";

type cardProperties = {
  mainHeading: string;
  subHeading?: string;
  image: string;
  offer?: string;
  link: string;
};

const Card = (props: cardProperties) => {
  return (
    <>
      <a href={props.link} className="relative cursor-pointer">
        {props.offer ? (
          <p className="font-raleway absolute left-1 top-1 rounded bg-white px-1.5 py-0.5 text-xs shadow-sm">
            {props.offer}
          </p>
        ) : null}
        <img
          src={`/assets/images/gallery/${props.image}`}
          alt=""
          className="h-[11rem] w-full object-cover sm:h-[15rem]"
        />
        <p className="mt-3 text-xs text-primary sm:text-sm md:text-base">
          {props.subHeading}
        </p>
        <p className="-mt-1 text-lg text-darker/85 sm:text-lg md:text-xl font-raleway">
          {props.mainHeading}
        </p>
      </a>
    </>
  );
};

export default Card;
