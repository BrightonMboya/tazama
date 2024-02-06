import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import { Input } from "~/components/Form";
import Loader from "~/components/Loader";

const ContactPage = () => {
  React.useEffect(() => {
    setPageTitle("contact");
    // eslint-disable-next-line
  }, []);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [fullNames, setFullNames] = React.useState("");

  const [message, setMessage] = React.useState<string>("");

  return (
    <>
      {loading ? <Loader /> : null}
      <PrimaryHeader image="mount-kilimanjaro.webp" title="Contact" />
      <div className="mx-auto pt-[12rem]">
        <div className="text-center text-[#757371]">
          <p className="mx-auto mb-10 mt-3 max-w-4xl px-4 text-3xl md:text-4xl">
            We'd love to hear from you. Simply fill in the form below or reach
            out directly to us through one of our contacts listed below.
          </p>
          <p className=" text-2xl md:text-3xl">
            Email:&nbsp;
            <a
              href="mailto:info@tazamaafricasafari.com"
              className="hover:underline"
            >
              {" "}
              info@tazamaafricasafari.com
            </a>
          </p>
          <p className=" text-2xl md:text-3xl">
            Phone:&nbsp;
            <a href="tel:+255745100011" className="hover:underline">
              (255)745100011
            </a>
          </p>
          <p className="mt-10 text-lg md:text-xl">
            You can also send us a message by filling the form below
          </p>
        </div>

        <div className="mx-auto my-20 max-w-4xl px-4">
          <h3 className="text-4xl">Contact Us</h3>
          <p className="font-now mt-8 text-black md:mt-12">
            Please complete the form below
          </p>

          <form
            action="https://formsubmit.co/jaff@tazamaafricasafari.com"
            method="POST"
            className="mx-auto mt-8 flex w-full flex-col gap-8"
          >
            <Input
              required
              type="text"
              name="fullName"
              value={fullNames}
              label="Full Names*"
              placeholder="Enter your full Names"
              onChange={(e) => setFullNames(e.target.value)}
            />

            <Input
              required
              type="email"
              name="email"
              value={email}
              label="Email Address*"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="message" className="font-now text-[#484848]">
                Message*
              </label>
              <textarea
                className="font-now h-36 rounded-lg border-none px-4 py-3 shadow-sm placeholder:text-gray-300 focus:ring-[#A87133]"
                placeholder="Write your message here"
                required
                name="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Hidden components necessary for submititng the form to the email */}
            <input
              type="hidden"
              name="_subject"
              value="New Tazama Trip Inquiry"
            ></input>
            <input
              type="hidden"
              name="_cc"
              value="james@tazamaafricasafari.com"
            ></input>
            <input
              type="hidden"
              name="_cc"
              value="info@tazamaafricasafari.com"
            ></input>
            <input
              type="hidden"
              name="_next"
              value="https://www.tazamaafricasafari.com/"
            ></input>

            <button
              type="submit"
              className="font-now w-[10rem] rounded-lg bg-[#A87133] px-4 py-2 text-white hover:border hover:border-[#A87133] hover:bg-transparent hover:text-[#A87133]"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
