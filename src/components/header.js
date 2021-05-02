import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink, BlobHeader } from "./atoms"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <span className="hidden sm:flex flex-grow items-center space-x-6">
        <NavLink to="/" title="Home" selected={activePage === "/"}>
          Voorstelling
        </NavLink>
        <NavLink to="/activiteiten" title="Activiteiten" selected={activePage === "activiteiten"}>
          Activiteiten
        </NavLink>
        <NavLink
          to="/selectie"
          title="Selectie"
          selected={activePage === "selectie"}
        >
          Selectie
        </NavLink>
        <NavLink to="/reflectie" title="Reflectie" selected={activePage === "reflectie"}>
          Reflectie
        </NavLink>
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>

    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
        <BlobHeader />
      </div>
    </div>
  </header>
)

export default Header
