"use client";
import { Laila } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const laila = Laila({
  subsets: ["latin"],
  variable: "--font-laila",
  weight: ["500", "600", "700"],
});

const Navbar = () => {
  const navHandler = (e) => {
    setMenuMobile(!menuMobile);
  };

  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <nav
      className={`${laila.className} bg-transparent text-dark  dark:bg-dark`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
        <div className="w-20 h-20 relative">
          <Image src="/logo.png" className="h-8" alt="Klepon Aneka" fill />
        </div>

        <div className=" md:w-auto">
          {!menuMobile ? (
            <ul className="md:flex hidden flex-col font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block accordion-header  py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Menu Kami
                </a>
              </li>
              <li className="flex justify-center items-center gap-2">
                <FaWhatsapp />
                <a
                  href="https://wa.me/+6285939466976?text=Saya%20Ingin%20Memesan%20Klepon%20Anekanya%20Kak%20Tolong%20Dibalas%20Terima%20Kasih"
                  target="_blank"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pesan via WA
                </a>
              </li>
            </ul>
          ) : (
            <ul className=" top-0 bottom-0 right-0 z-10 flex justify-between px-5 py-20 items-center  md:hidden absolute h-full flex-col rounded-lg bg-cyan-900/75 backdrop:blur-lg ">
              <li>
                <a
                  href="#"
                  className="block bg-transparent text-white p-0 hover:text-primary "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block bg-transparent text-white p-0 hover:text-primary "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block bg-transparent text-white p-0 hover:text-primary "
                >
                  Menu
                </a>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <FaWhatsapp className="text-white hover:text-primary " />
                <a
                  href="https://wa.me/+6285939466976?text=Saya%20Ingin%20Memesan%20Klepon%20Anekanya%20Kak%20Tolong%20Dibalas%20Terima%20Kasih"
                  target="_blank"
                  className="block bg-transparent text-white p-0 hover:text-primary "
                >
                  Pesan via WA
                </a>
              </li>
            </ul>
          )}
          <AiOutlineMenu
            className={`md:hidden flex text-3xl ${
              menuMobile ? "text-white" : "text-green-700"
            } z-20 relative`}
            onClick={navHandler}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
