"use client";
import { Kalam } from "next/font/google";
import Image from "next/image";
const kalam = Kalam({ subsets: ["latin-ext"], weight: "700" });

const Menus = () => {
  return (
    <div className="px-10 py-5 bg-dark/70 rounded-2xl" id="menu">
      <h1
        className={`mx-auto ${kalam.className} text-7xl text-primary text-center `}
      >
        Menu Kami
      </h1>
      <div class="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <div>
          <a href="#" className="group block overflow-hidden cursor-default">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/menus/aneka_rasa.png"
                alt=""
                width="300"
                height="500"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/menus/aneka_rasa_hover.png"
                alt=""
                width="300"
                height="500"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative pt-3">
              <h3 className="text-xl font-semibold  text-light">Aneka Rasa</h3>

              <div className="mt-1.5 flex items-center justify-between text-light">
                <p className="tracking-wide">Rp. 10.000,00</p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" className="group block overflow-hidden cursor-default">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/menus/fullcoklat.png"
                alt=""
                width="300"
                height="500"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/menus/fullcoklat_hover.png"
                alt=""
                width="300"
                height="500"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative pt-3">
              <h3 className="text-xl font-semibold text-light">Full Coklat</h3>

              <div className="mt-1.5 flex items-center justify-between text-light">
                <p className="tracking-wide">Rp. 10.000,00</p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" className="group block overflow-hidden cursor-default">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/menus/fullkeju.png"
                alt=""
                width="300"
                height="500"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/menus/fullkeju_hover.png"
                alt=""
                width="300"
                height="500"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative pt-3">
              <h3 className="text-xl font-semibold text-light">Full Keju</h3>

              <div className="mt-1.5 flex items-center justify-between text-light">
                <p className="tracking-wide">Rp. 10.000,00</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menus;
