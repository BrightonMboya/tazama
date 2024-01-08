import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const navMainContent = [
  {
    title: "About Tazama",
    link: "/about",
  },
  {
    title: "Mount Kilimanjaro",
    link: "/safaris/kilimanjaro",
  },
  {
    title: "Mount Meru",
    link: "/safaris/mount-meru",
  },
  {
    title: "Safari",
    link: "/safaris",
  },
  {
    title: "Beach Holiday",
    link: "/itenaries?itenary=beach-holiday",
  },
  {
    title: "Gorrila & Chimps Trekking",
    link: "/itenaries?itenary=gorilla-and-chimps",
  },
];

const navSubContent = [
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "Positive Impact",
    link: "/blogs/positive-impact",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Special Offers",
    link: "/safaris/special-offers",
  },
  {
    title: "Photos and Videos",
    link: "/gallery",
  },
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [onExit, setOnExit] = useState<object>({});
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 750) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function toggleSearchModal() {
    setOnExit({
      opacity: 0,
      height: 0,
    });

    setSearchModal((prevSearchModal) => !prevSearchModal);
  }

  function toggleNav() {
    setOnExit({
      opacity: 0,
      height: 0,
    });
    setNav((preNav) => !preNav);
  }

  return (
    <nav className="fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-4 px-4 py-4 md:px-8">
      <Link href="/" onClick={() => setNav(false)}>
        <img
          className="w-20 sm:w-32 md:w-40"
          src={`${
            isScrolled
              ? "assets/images/logos/tazama-gold.svg"
              : "assets/images/logos/tazama-white.svg"
          }`}
          alt=""
        />
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          data-tf-popup="yy0ZJs6g"
          data-tf-opacity="100"
          data-tf-size="100"
          data-tf-iframe-props="title=My branded typeform"
          data-tf-auto-close
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          className="font-base font-now rounded-md bg-[#A87133] px-4 py-2 text-center text-xs text-white hover:bg-[#946632] md:text-base"
        >
          Plan my trip
        </button>

        {/* <button
          className={`hidden items-center gap-2 px-2 py-1 transition duration-200 ease-in-out md:flex md:gap-3 md:px-4 md:py-2 ${
            isScrolled ? "text-[#484848]" : "text-white"
          }`}
          onClick={toggleSearchModal}
        >
          <AiOutlineSearch /> <span className="font-now">Search</span>
        </button> */}

        <AnimatePresence>
          {searchModal ? (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "100vh",
              }}
              exit={onExit}
              className={`absolute left-0 top-0 h-screen w-full bg-[#000000be]`}
            >
              <button
                className="absolute right-4 top-4 flex items-center gap-2 px-4 py-1 text-white md:right-8 md:top-0 md:gap-3 md:px-4 md:py-6"
                onClick={toggleSearchModal}
              >
                <span className="font-now">Close</span>
                <AiOutlineClose />
              </button>

              <div className="absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-white px-4 py-2">
                <div className="font-now flex w-full flex-col gap-4 sm:flex-row">
                  <input
                    type="search"
                    placeholder="Your search here..."
                    className="font-now placeholder-font-now  relative block w-full appearance-none border-2 border-gray-300 bg-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:border-2 focus:border-[#A87133] focus:bg-white focus:outline-none focus:ring-[#A87133] sm:text-sm"
                  />
                  <button className="bg-[#A87133] px-4 py-2 font-semibold text-white hover:bg-[#a87133be]">
                    Seacrch
                  </button>
                </div>
                <hr className="my-4" />
                <div className="search-scroll-bar flex max-h-64 flex-col gap-4 overflow-y-scroll">
                  <div className="bg-gray-900 px-4 py-4 text-white">
                    <p className="font-now line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui nemo similique at quos a atque repellendus corporis
                      aut porro facilis nihil quia perspiciatis velit
                      consectetur sapiente, debitis fugit eligendi tenetur!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          className={`flex items-center gap-2 px-2 py-1 transition duration-200 ease-in-out md:gap-3 md:px-4 md:py-2 ${
            isScrolled ? "text-[#484848]" : "text-white"
          } menu-trigger`}
          onClick={toggleNav}
        >
          <span className="font-now menu-trigger">Menu</span>
          <AiOutlineMenu className="menu-trigger" />
        </button>
      </div>

      <AnimatePresence>
        {nav ? (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "100vh",
            }}
            exit={onExit}
            className={`absolute left-0 top-0 h-screen w-full bg-[#A87133] px-8 py-4`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <img
                  className="tazama w-24 sm:w-32 md:w-40"
                  src="assets/images/logos/tazama-white.svg"
                  alt=""
                />
              </Link>
              <div className="flex items-center gap-1 text-white  sm:gap-2">
                <button className="flex items-center gap-2 px-2 py-1 md:gap-3 md:px-4 md:py-2">
                  <AiOutlineSearch /> <span className="font-now">Search</span>
                </button>
                <button
                  className="flex items-center gap-2 px-2 py-1 md:gap-3 md:px-4 md:py-2"
                  onClick={toggleNav}
                >
                  <span className="font-now">Close</span>
                  <AiOutlineClose />
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 0.4,
                },
              }}
              className="absolute left-1/2 top-1/2 mx-auto mt-4 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-center gap-10 px-12 text-white sm:justify-evenly md:flex-row"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: -20,
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                className="flex flex-col space-y-4 text-xl sm:text-3xl md:space-y-8"
              >
                {navMainContent.map((mainLink, index) => (
                  <motion.span
                    initial={{ x: -20 }}
                    animate={{
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.15 * index,
                      },
                    }}
                    key={index}
                  >
                    <Link
                      href={mainLink.link}
                      className="hover:text-[#e0e0e0]"
                      onClick={() => setNav(false)}
                    >
                      {mainLink.title}
                    </Link>
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.75,
                    delay: 0.8,
                  },
                }}
              >
                <div className="mb-8 flex flex-col gap-y-2 text-xs sm:text-lg">
                  {navSubContent.map((subLink, index) => (
                    <motion.span
                      key={index}
                      initial={{ x: -20 }}
                      animate={{
                        x: 0,
                        transition: {
                          duration: 0.75,
                          delay: 0.2 * index,
                        },
                      }}
                    >
                      <Link
                        href={subLink.link}
                        onClick={() => setNav(false)}
                        className="font-now w-fit cursor-pointer pb-1 hover:underline"
                      >
                        {subLink.title}
                      </Link>
                    </motion.span>
                  ))}
                </div>

                <Link
                  className="font-now rounded-md border border-white px-6 py-2 transition duration-150 ease-in hover:bg-white hover:text-[#A87133]"
                  href="/contact"
                  onClick={() => setNav(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
