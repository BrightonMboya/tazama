import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import {
  emailJSPublicKey,
  emailJSServiceId,
  emailJSTemplateId,
  setPageTitle,
} from "~/helpers";
import { contactGuestTypeOptions, contactPrefixOptions } from "~/data/data";
import { Input } from "~/components/Form";
import Loader from "~/components/Loader";
import emailjs from "@emailjs/browser";
import { string } from "fast-web-kit";

const ContactPage = () => {
  React.useEffect(() => {
    setPageTitle("contact");
    // eslint-disable-next-line
  }, []);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [prefix, setPrefix] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [guestType, setGuestType] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  const validateForm = async (
    event: React.ChangeEvent<HTMLFormElement>,
  ): Promise<void> => {
    try {
      setLoading(true);
      event.preventDefault();

      emailjs.init(emailJSPublicKey);
      const emailSent = await emailjs.send(
        emailJSServiceId,
        emailJSTemplateId,
        {
          prefix,
          message,
          phone: phoneNumber,
          last_name: lastName,
          first_name: firstName,
          email: email.toLowerCase(),
          guest_type: string.capitalize(guestType),
          full_name: string.capitalize(`${firstName} ${lastName}`),
        },
      );

      if (emailSent.status === 200) {
        setEmail("");
        setPrefix("");
        setMessage("");
        setLastName("");
        setFirstName("");
        setGuestType("");
        setPhoneNumber("");
      }
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

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
            action="#"
            className="mx-auto mt-8 flex w-full flex-col gap-8"
            onSubmit={validateForm}
          >
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="prefix" className="font-now text-[#484848]">
                Prefix*
              </label>
              <select
                name="prefix"
                id="prefix"
                className="font-now form-select cursor-pointer rounded-lg border-none px-4 py-3 shadow-sm focus:ring-[#A87133]"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                required
              >
                <option
                  value={""}
                  className="font-now hover:bg-pink-200"
                  label="Select prefix"
                />
                {/* @ts-ignore */}
                {contactPrefixOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option.option}
                    className="font-now hover:bg-pink-200"
                  >
                    {option.option}
                  </option>
                ))}
              </select>
            </div>
            <Input
              required
              type="text"
              name="firstName"
              value={firstName}
              label="First Name*"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              required
              type="text"
              name="lastName"
              value={lastName}
              label="last Name*"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
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
            <Input
              required
              type="number"
              name="phoneNumber"
              value={phoneNumber}
              label="Phone Number*"
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="message" className="font-now text-[#484848]">
                Message*
              </label>
              <textarea
                className="font-now h-36 rounded-lg border-none px-4 py-3 shadow-sm placeholder:text-gray-300 focus:ring-[#A87133]"
                placeholder="Write your message here"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="type" className="font-now text-[#484848]">
                I am a
              </label>
              {/* @ts-ignore */}
              {contactGuestTypeOptions.map((GuestType, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <input
                    id="guestType"
                    type="checkbox"
                    name="guestType"
                    value={GuestType.htmlName}
                    checked={GuestType.htmlName === guestType}
                    className="cursor-pointer rounded-full checked:bg-[#A87133]"
                    onChange={(e) => setGuestType(e.target.value)}
                  />
                  <label htmlFor={GuestType.htmlName} className="font-now">
                    {GuestType.name}
                  </label>
                </div>
              ))}
            </div>
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
