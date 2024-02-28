import { useEffect } from "react";

export default function EnquireNow() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-primary py-20 text-center text-white">
      <h3 className="text-xl font-bold uppercase tracking-wide">
        craft your own memorable experience
      </h3>
      <p className="px-4 pt-5 text-lg">
        Have a conversation with our team so that we can create a more memorable
        trip for you.
      </p>

      <button
        data-tf-popup="yy0ZJs6g"
        data-tf-opacity="100"
        data-tf-size="100"
        data-tf-iframe-props="title=My branded typeform"
        data-tf-auto-close
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        className="font-now mt-5 rounded-md bg-white px-4 py-2 text-center hover:bg-light text-black  md:text-base"
      >
        Plan my trip
      </button>
    </div>
  );
}
