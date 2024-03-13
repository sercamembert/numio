"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

const variants = {
  open: { x: 0 },
  closed: { x: 800 },
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className="fixed w-screen h-full top-[80px] bg-black padding text-[40px] flex flex-col gap-10 md:hidden z-50 "
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        variants={variants}
        initial={{ x: 800 }}
      >
        <Link
          href="/onas"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
          title="O nas"
        >
          O nas
        </Link>
        <Link
          href="/realizacje"
          className="font-bold cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
          title="Realizacje"
        >
          Realizacje
        </Link>
        <Link
          href="/artysci"
          className="font-bold cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
          title="Artyści"
        >
          Artyści
        </Link>
        <Link
          href="/kalendarium"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
          title="Kalendarium"
        >
          Kalendarium
        </Link>
        <Link
          href="/kontakt"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
          title="Kontakt"
        >
          Kontakt
        </Link>
        <Link
          href="/bilet"
          className="font-bold cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
          title="Kup bilet"
        >
          Kup bilet
        </Link>
      </motion.div>

      <nav
        className={`w-full padding h-[80px] ${
          isOpen && "bg-black"
        } fixed top-0 flex items-center justify-between xl:h-[110px] ultra:h-[160px] bg-none md:bg-none z-50 ${
          isScrolled && "bg-black"
        }`}
      >
        <Link href="/" aria-description="Strona główna">
          <Image
            src="/images/logo.png"
            alt="Złote Głosy Musicalu"
            width={318}
            height={193}
            className="w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px] 3xl:w-[106px] ultra:w-[120px]"
          />
        </Link>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} size={17} toggle={setIsOpen} />
        </div>

        <div className="hidden md:flex items-center gap-[38px] lg:gap-[49px] xl:gap-[62px] 2xl:gap-[72px] desktop:gap-[85px]">
          <Link href="/onas" title="O nas" className="navbar-paragraph">
            O nas
          </Link>
          <Link
            href="/realizacje"
            title="Realizacje"
            className="navbar-paragraph"
          >
            Realizacje
          </Link>
          <Link href="/artysci" title="Artyści" className="navbar-paragraph ">
            Artyści
          </Link>
          <Link
            href="/kalendarium"
            title="kalendarium"
            className="navbar-paragraph  "
          >
            Kalendarium
          </Link>
          <Link href="/kontakt" title="kontakt" className="navbar-paragraph">
            Kontakt
          </Link>
          <Link href="/wydarzenia" className="" title="Wydarzenia">
            <button
              className="bg-white text-black font-semibold text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] desktop:text-[15px] ultra:text-[20px]
              rounded-[8px] xl:rounded-[10px] desktop:rounded-[17px] ultra:rounded-[26px]
              h-[26px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[55px] ultra:h-[82px]
              min-w-[55px] lg:min-w-[72px] xl:min-w-[90px] 2xl:min-w-[102px] desktop:min-w-[121px] ultra:min-w-[180px]
              px-3 xl:px-6 
              navbar-button-animation"
            >
              KUP BILET
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
