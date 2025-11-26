"use client";
import { useState } from "react";
import NavLink from "../common/NavLink/NavLink";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <nav className="flex justify-between items-start">
      <Link href={'/'} className="text-xl text-customMainBlack">
        vive<span className="font-semibold text-customMainBlack">Code</span>
      </Link>
      <div
        onClick={toggleMenu}
        className={`cursor-pointer mt-1 text-customMainBlack ${open ? "rotate-0 flex z-20" : "rotate-180 fixed right-5 z-20"} transition-transform duration-200 md:hidden z-10`}
      >
        <ArrowIcon />
      </div>
      <ul
        className={`flex fixed pr-6 pt-16 h-screen w-1/2 bg-white z-10 right-0 top-0 flex-col items-end gap-2 transition-all duration-200 md:hidden ${
          open ? "translate-x-56" : "translate-x-0"
        }`}
      >
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end text-customMainBlack"
          exact
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
      <ul className="hidden">
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-end text-customMainBlack"
          exact
          activeClass="opacity-100 underline-offset-4 underline active"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
      <ul className="hidden md:flex gap-5 text-customMainBlack">
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          exact
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/challenge"
        >
          desafio
        </NavLink>
      </ul>
      <ul className="hidden">
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          exact
          activeClass="opacity-100 underline-offset-4 underline active"
          href="/"
        >
          inicio
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/blocks"
        >
          bloques
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
          activeClass="opacity-100 underline-offset-4 underline active text-gray"
          href="/about"
        >
          conoce
        </NavLink>
        <NavLink
          className="opacity-70 hover:underline-offset-4 hover:underline text-customMainBlack"
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
