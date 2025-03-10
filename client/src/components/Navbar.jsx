import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import WidthLimiter from "./WidthLimiter";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  // console.log(isNavbarActive);

  return (
    <div className="fixed w-full border-b border-[#161826] bg-darkBlue px-5 py-2">
      <WidthLimiter>
        <div className="flex scale-90 items-center justify-center">
          <img src="./logo.png" alt="" className="w-16" />
          <p className="text-textColor w-[70px] pl-2 text-[1.1rem] font-black leading-[18px]">
            Coding Adda
          </p>
        </div>
        <ul className="hidden text-sm sm:block">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
              {/* <MountainIcon className="h-6 w-6" /> */}
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Products
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </nav>
          </header>
        </ul>

        <div className="text-[20px] sm:hidden">
          {isNavbarActive ? (
            <IoMdClose
              onClick={() => setIsNavbarActive(!isNavbarActive)}
              className="text-white"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setIsNavbarActive(!isNavbarActive)}
              className="text-white"
            />
          )}
        </div>
        <motion.div
          className="absolute -z-10 w-full bg-darkBlue bg-opacity-70 py-5 backdrop-blur-lg"
          initial={{
            left: "100%",
            top: "100%",
          }}
          animate={
            isNavbarActive
              ? { left: 0, top: "100%" }
              : { left: "100%", top: "100%" }
          }
          transition={{
            duration: 0.9,
            ease: [0.83, 0, 0.17, 1],
          }}
        >
          <ul className="flex flex-col items-center justify-center gap-5 text-2xl font-semibold uppercase">
            <li className="inline-block">Home</li>
            <li className="inline-block">Blogs</li>
            <li className="inline-block">Playlist </li>
            <li className="inline-block">Resources </li>
            <li className="inline-block">Podcast</li>
            <li className="inline-block">Sheets</li>
          </ul>
        </motion.div>
      </WidthLimiter>
    </div>
  );
};

export default Navbar;
