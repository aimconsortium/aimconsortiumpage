// import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HeaderLink } from "./HeaderLink";
import { useOnClickOutside } from "usehooks-ts";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import {
  motion,
  useReducedMotion,
  easeInOut,
  AnimatePresence,
} from "motion/react";
import { animationPresets } from "../constants/animationPresets";

export const Nav = () => {
  const shouldReduceMotion = useReducedMotion();
  const largePreset = animationPresets.large;
  const [isDropDownOpen, setIsDropdownOpen] = useState(false); // dropdown behavior for mobile

  return (
    <header>
      {/* desktop */}
      <nav className="fixed left-1/2 z-50 mt-(--nav-top-gap) hidden h-(--nav-height) -translate-x-1/2 items-center justify-center gap-4 rounded-(--nav-rounding) bg-(--primary-50) p-(--nav-padding) shadow-xl outline outline-(--primary-200) backdrop-blur-3xl sm:flex">
        <HeaderLink text="Home" to="/" />
        <HeaderLink text="Team" to="/team" />
        <HeaderLink text="Portfolio" to="/portfolio" />
        <HeaderLink text="Contact" to="/contact" />
      </nav>

      {/* mobile */}
      <nav className="fixed left-1/2 z-50 mt-(--nav-top-gap) flex h-(--nav-height) w-[calc(90%-1.5rem)] -translate-x-1/2 items-center justify-center gap-4 rounded-(--nav-rounding) bg-(--primary-50) p-(--nav-padding) shadow-xl outline outline-(--primary-200) backdrop-blur-3xl sm:hidden">
        <div className="relative flex w-full items-center justify-between">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="ml-(--nav-mobile-spacing-nudge) h-8 w-8 object-cover transition-transform duration-200 hover:scale-110"
            />
          </Link>
          <button>
            {isDropDownOpen ? (
              <RxCross2
                className="mr-(--nav-mobile-spacing-nudge) h-8 w-8 cursor-pointer text-(--primary-900)"
                onClick={() => setIsDropdownOpen(false)}
              />
            ) : (
              <RxHamburgerMenu
                className="mr-(--nav-mobile-spacing-nudge) h-8 w-8 cursor-pointer text-(--primary-900)"
                onClick={() => setIsDropdownOpen(true)}
              />
            )}
          </button>
        </div>
      </nav>
      {/* dropdown menu */}
      <div
        className={`fixed left-1/2 z-40 mt-(--nav-top-gap) flex h-fit w-[calc(90%-1.5rem)] -translate-x-1/2 flex-col gap-y-3 rounded-(--nav-rounding) bg-(--primary-50)/50 px-(--nav-padding) pt-[calc(var(--nav-height)*1.3)] pb-(--nav-padding) shadow-xl outline outline-(--primary-200) ${isDropDownOpen ? "block" : "hidden"} backdrop-blur-xl sm:hidden`}
      >
        <div className="flex w-full" onClick={() => setIsDropdownOpen(false)}>
          <HeaderLink text="Home" to="/" />
        </div>
        <div className="flex w-full" onClick={() => setIsDropdownOpen(false)}>
          <HeaderLink text="Team" to="/team" />
        </div>
        <div className="flex w-full" onClick={() => setIsDropdownOpen(false)}>
          <HeaderLink text="Portfolio" to="/portfolio" />
        </div>
        <div className="flex w-full" onClick={() => setIsDropdownOpen(false)}>
          <HeaderLink text="Contact" to="/contact" />
        </div>
      </div>
    </header>
  );
}
