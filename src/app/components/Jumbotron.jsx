/* -disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin-ext"], weight: "700" });

const Jumbotron = () => {
  return (
    <section className="w-full h-screen relative rounded-3xl md:flex-row flex-col-reverse flex bg-gradient-to-t from-[#0C090A] to-[#2d2e25] p-12">
      <div className="absolute -left-5 top-[50%] translate-y-[-50%] bg-cyan-900/50 flex justify-center items-center px-3 py-5 gap-6 rounded-full backdrop-blur-lg flex-col">
        <a href="https://www.instagram.com/kleponanekastore" target="_blank">
          <AiFillInstagram className="text-red-400 text-3xl" />
        </a>
        <a href="https://wa.me/+6285939466976" target="_blank">
          <FaWhatsappSquare className="text-green-600 text-3xl" />
        </a>
        <a href="">
          <SiShopee className="text-orange-600 text-3xl" />
        </a>
      </div>
      <div className="flex-1  flex justify-center flex-col">
        <h1
          className={`text-3xl sm:text-7xl font-bold text-green-700 ${kalam.className}`}
        >
          Traditional <a className="text-blue-600">Food</a>{" "}
          <a className="text-red-700">with</a> <br />
          <a className="text-yellow-500">Modern Taste's</a>
        </h1>
        <p className="text-[12px] font-light sm:font-normal sm:text-lg text-white">
          Nikmati Kelezatan Klepon Aneka Dengan Beragam Rasa Isian Dan Topping
          Yang Unik Serta Beraneka Warna!
        </p>
      </div>
      <div className="w-full sm:w-[40%] flex md:mx-[inherit] mx-auto ml-auto h-full relative">
        <Image src="/jumbotron.png" fill alt="jumbotron image" />
      </div>
    </section>
  );
};

export default Jumbotron;
