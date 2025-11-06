"use client";
import { useState } from "react";
import NavLink from "../common/NavLink/NavLink";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <nav className="flex justify-between items-start mb-6">
      <Link href={'/'} className="text-xl">
        vive<span className="font-semibold">Code</span>
      </Link>
      <div
        onClick={toggleMenu}
        className={`cursor-pointer mt-1 ${open ? "rotate-0" : "rotate-180"} transition-transform duration-200 md:hidden`}
      >
        <ArrowIcon />
      </div>
      <ul
        className={`flex fixed right-5 top-6 flex-col items-end gap-2 mt-10 transition-all duration-200 md:hidden ${
          open ? "translate-x-24" : "translate-x-0"
        }`}
      >
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          exact
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
      <ul className="hidden">
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          exact
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
      <ul className="hidden md:flex gap-5">
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          exact
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
      <ul className="hidden">
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end"
          exact
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
