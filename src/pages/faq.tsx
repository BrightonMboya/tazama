import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import Accordion from "~/components/Accordion";
import { accordionQns } from "~/data/data";

const FAQPage = () => {
  React.useEffect(() => {
    setPageTitle("Frequently Asked Questions");
    // eslint-disable-next-line
  }, []);

  const [category, setCategory] = React.useState("safari");

  return (
    <>
      <PrimaryHeader image="faq.webp" title="Frequently Asked Questions" />
      <div className="mx-auto mt-48 lg:mt-5 max-w-7xl px-4 py-20 lg:py-10 md:px-8">
        <p className="mx-auto max-w-4xl p-4 text-center text-2xl text-[#757371]">
          Explore our FAQ section to find answers to common queries. This
          resource provides quick, reliable guidance for your most frequent
          questions.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
          <aside className="w-full md:w-1/3">
            <h4 className="mb-4  text-2xl">Frequently Asked Questions</h4>
            <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
              <li
                className={`font-now cursor-pointer text-sm hover:text-primary hover:underline focus:underline active:underline sm:text-base ${
                  category === "safari" ? "text-primary" : ""
                }`}
                onClick={() => setCategory("safari")}
              >
                Safaris FAQs
              </li>
              <li
                className={`font-now cursor-pointer text-sm hover:text-primary hover:underline sm:text-base ${
                  category !== "safari" ? "text-primary" : ""
                }`}
                onClick={() => setCategory("kili")}
              >
                Kilimanjaro FAQs
              </li>
            </ul>
          </aside>
          <section className="flex w-full flex-col space-y-3 md:w-2/3">
            {accordionQns.map((item, index) => {
              if (item.category === category)
                return (
                  <div key={index}>
                    <Accordion
                      question={item.qn}
                      answer={item.ans}
                      list={item.list}
                      note={item.note}
                    />
                  </div>
                );
              return null;
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
