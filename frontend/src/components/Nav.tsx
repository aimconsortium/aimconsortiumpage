// import { Link } from "@tanstack/react-router";
import { HeaderLink } from "./HeaderLink";

export const Nav = () => {
  return (
    <header>
      {/* desktop */}
      <nav className="fixed p-(--nav-padding) rounded-(--nav-rounding) left-1/2 -translate-x-1/2 flex gap-4 items-center justify-center bg-(--primary-50) outline outline-(--primary-200) shadow-xl mt-(--nav-top-gap)">
        <HeaderLink text="Home" to="/" />
        <HeaderLink text="Team" to="/team" />
        <HeaderLink text="Portfolio" to="/portfolio" />
        <HeaderLink text="Contact" to="/contact" />
      </nav>
    </header>
  )
}
