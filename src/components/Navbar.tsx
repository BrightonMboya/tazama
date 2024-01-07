import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { navMainContent, navSubContent } from "../data";
import Link from "next/link";


const Navbar: React.FunctionComponent = React.memo(() => {
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
    <nav className="flex justify-between items-center py-4 px-4 md:px-8 fixed w-full top-0 left-0 gap-4 z-20">
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
          className="py-2 px-4 text-xs md:text-base font-base bg-[#A87133] hover:bg-[#946632] rounded-md text-center text-white font-now"
        >
          Plan my trip
        </button>

        <button
          className={`hidden md:flex gap-2 md:gap-3 items-center py-1 px-2 md:py-2 md:px-4 transition ease-in-out duration-200 ${
            isScrolled ? "text-[#484848]" : "text-white"
          }`}
          onClick={toggleSearchModal}
        >
          <AiOutlineSearch /> <span className="font-now">Search</span>
        </button>

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
              className={`bg-[#000000be] absolute w-full h-screen top-0 left-0`}
            >
              <button
                className="absolute right-4 top-4 md:top-0 md:right-8 flex gap-2 text-white md:gap-3 items-center py-1 px-4 md:py-6 md:px-4"
                onClick={toggleSearchModal}
              >
                <span className="font-now">Close</span>
                <AiOutlineClose />
              </button>

              <div className="border border-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full py-2 px-4">
                <div className="w-full flex flex-col sm:flex-row font-now gap-4">
                  <input
                    type="search"
                    placeholder="Your search here..."
                    className="appearance-none relative  block w-full font-now px-3 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#A87133] bg-gray-300 focus:bg-white focus:border-2 focus:border-[#A87133] sm:text-sm placeholder-font-now"
                  />
                  <button className="bg-[#A87133] hover:bg-[#a87133be] py-2 px-4 text-white font-semibold">
                    Seacrch
                  </button>
                </div>
                <hr className="my-4" />
                <div className="flex flex-col gap-4 max-h-64 overflow-y-scroll search-scroll-bar">
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
          className={`flex gap-2 md:gap-3 items-center py-1 px-2 md:py-2 md:px-4 transition ease-in-out duration-200 ${
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
            className={`bg-[#A87133] absolute w-full h-screen top-0 left-0 px-8 py-4`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <img
                  className="w-24 sm:w-32 md:w-40 tazama"
                  src="assets/images/logos/tazama-white.svg"
                  alt=""
                />
              </Link>
              <div className="flex items-center gap-1 sm:gap-2  text-white">
                <button className="flex gap-2 md:gap-3 items-center py-1 px-2 md:py-2 md:px-4">
                  <AiOutlineSearch /> <span className="font-now">Search</span>
                </button>
                <button
                  className="flex gap-2 md:gap-3 items-center py-1 px-2 md:py-2 md:px-4"
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
              className="w-full px-12 mt-4 flex flex-col md:flex-row items-start justify-center sm:justify-evenly gap-10 mx-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white"
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
                className="text-xl sm:text-3xl flex flex-col space-y-4 md:space-y-8"
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
                <div className="text-xs sm:text-lg flex flex-col gap-y-2 mb-8">
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
                        className="cursor-pointer hover:underline pb-1 w-fit font-now"
                      >
                        {subLink.title}
                      </Link>
                    </motion.span>
                  ))}
                </div>

                <Link
                  className="font-now border border-white rounded-md px-6 py-2 hover:text-[#A87133] hover:bg-white transition ease-in duration-150"
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
});

export default Navbar;
