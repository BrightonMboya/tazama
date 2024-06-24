import { motion } from "framer-motion";
import React from "react";

type quoteSection = {
  quote: string;
  subText?: string;
};

const QuoteSection = (props: quoteSection) => {
  return (
    <div
      className="flex min-h-[36rem] w-full flex-col items-center justify-center bg-[#A87133] p-20 text-center text-white "
    >
      <h2 className="mb-10 text-3xl md:text-4xl">“{props.quote}”</h2>
      {props.subText ? (
        <p className="font-raleway text-lg md:text-2xl">{props.subText}</p>
      ) : null}
    </div>
  );
};

export default QuoteSection;
