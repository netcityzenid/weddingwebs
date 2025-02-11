import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import layer1 from "../../../public/images/layer1.png";
import layer2 from "../../../public/images/layer2.png";
import layer3 from "../../../public/images/layer3.png";
import layer4 from "../../../public/images/layer4.png";
import layer5 from "../../../public/images/layer5.png";
import layer1s from "../../../public/images/layer-1s.png";
import layer2s from "../../../public/images/layer-2s.png";
import layer3s from "../../../public/images/layer-3s.png";
import layer4s from "../../../public/images/layer-4s.png";
import layer5s from "../../../public/images/layer-5s.png";
import { useAudio } from "./AudioContext";

const getQueryParam = (name: string) => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  return null;
};

interface UndanganContainerProps {
  onOpenInvitation: () => void;
}

const UndanganContainer = ({ onOpenInvitation }: UndanganContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState<string>("");
  const { togglePlayPause } = useAudio();

  useEffect(() => {
    const name = getQueryParam("inv");
    setGuestName(name ? decodeURIComponent(name) : "");
  }, []);

  // Variants untuk animasi keluar undangan container
  const containerVariants = {
    hidden: { y: 0, opacity: 1 }, // Posisi awal
    exit: { y: -1500, opacity: 1, transition: { duration: 3 } }, // Naik ke atas dan menghilang
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    onOpenInvitation();
    togglePlayPause(); // Inform `page.tsx` that the invitation has been opened
  };

  return (
    <div className="relative z-[1000]">
      <>
        <motion.div
          id="container"
          initial="hidden"
          animate={isOpen ? "exit" : "hidden"} // Trigger animasi saat button diklik
          variants={containerVariants}
          className="bg-couple inset-0 min-h-screen bg-[#0a0a0a] fixed z-[1000] overflow-hidden"
        >
          <div>
            <div className="transform scale-y-[-1]">
              <motion.div
                initial={{ opacity: 0, y: 100, x: 100 }} // Mulai dari atas dan dengan opacity 0
                animate={{ opacity: 1, y: 0, x: 0 }} // Turun ke posisi aslinya dengan opacity 1
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-1/2 right-0 z-[100] mx-auto bottom-0 "
              >
                <Image src={layer1} alt="" className="absolute -bottom-5 -right-5 rotate-animation"></Image>
                <Image src={layer2} alt="" className="absolute -bottom-5 -right-5 rotate-animation2 z-50"></Image>
                <Image src={layer3} alt="" className="absolute -bottom-5 -right-5 rotate-animation3"></Image>
                <Image src={layer4} alt="" className="absolute -bottom-5 -right-5 rotate-animation4"></Image>
                <Image src={layer5} alt="" className="relative -bottom-5 -right-2 rotate-animation5"></Image>
              </motion.div>
            </div>
            <div className="transform scale-y-[-1]">
              <motion.div
                initial={{ opacity: 0, y: 100, x: -100 }} // Mulai dari atas dan dengan opacity 0
                animate={{ opacity: 1, y: 0, x: 0 }} // Turun ke posisi aslinya dengan opacity 1
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-1/2 left-0 z-[100] bottom-0 "
              >
                <Image src={layer1s} alt="" className="absolute -bottom-5 -left-5 rotate-animation"></Image>
                <Image src={layer2s} alt="" className="absolute -bottom-5 -left-5 rotate-animation2 z-50"></Image>
                <Image src={layer3s} alt="" className="absolute -bottom-5 -left-5 rotate-animation3"></Image>
                <Image src={layer4s} alt="" className="absolute -bottom-5 -left-5 rotate-animation4"></Image>
                <Image src={layer5s} alt="" className="relative -bottom-5 -left-2 rotate-animation5"></Image>
              </motion.div>
            </div>
            <div className="absolute top-20 text-white  right-1/2 translate-x-1/2 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className="">
                <div className="">The Wedding Of</div>
                <div className="text-5xl font-custom " style={{ textShadow: " 0px 0px 0px rgba(0, 0, 0, 0.6)" }}>
                  Afni & Galang
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-40 right-1/2 translate-x-1/2">
              <div className="  text-white text-center">
                <motion.div className="" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                  <div className="text-sm mb-2">Kepada Bapak/Ibu/Saudara/i</div>
                  <div className="font-semibold mb-4">{guestName || "Nama Tamu"}</div>
                </motion.div>
              </div>
              <div className="  rounded-full justify-center mx-auto flex gap-2 text-black  transition duration-300 overflow-hidden z-[1000]">
                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} onClick={handleOpenInvitation} className="py-1.5 px-4 border rounded-full bg-gradient-to-b from-[#d6b064] to-[#8c6e33] shadow-lg ">
                  {/* SVG Icon */}
                  <div className="flex gap-1">
                    <span>
                      <svg className="h-3.5 w-auto" fill="#fff" width="64px" height="64px" viewBox="0 0 56.00 56.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00056">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.8960000000000001"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M 9.4843 54.8476 L 46.5157 54.8476 C 51.4141 54.8476 53.8751 52.4102 53.8751 47.5820 L 53.8751 24.2617 C 53.8751 20.8867 53.1719 19.3867 50.9452 17.6289 L 32.8515 3.3789 C 31.1405 2.0195 29.7343 1.1524 27.9999 1.1524 C 26.2890 1.1524 24.8593 2.0195 23.1718 3.3789 L 5.0780 17.6289 C 2.8515 19.3867 2.1249 20.8867 2.1249 24.2617 L 2.1249 47.5820 C 2.1249 52.4336 4.6093 54.8476 9.4843 54.8476 Z M 32.9218 32.3711 C 31.2812 30.7305 29.6874 30.0742 28.0468 30.0742 C 26.3827 30.0742 24.8124 30.7305 23.1718 32.3711 L 21.6484 33.8711 L 7.6093 19.9961 L 25.1874 6.2852 C 26.3358 5.3945 26.9921 4.9024 27.9999 4.9024 C 29.0312 4.9024 29.6640 5.3945 30.8124 6.2852 L 48.4376 20.0430 L 34.4452 33.8711 Z M 5.7109 47.5820 L 5.7109 23.6289 C 5.7109 23.3945 5.7343 23.1836 5.7343 22.9961 L 19.1874 36.2852 L 5.9921 49.2461 C 5.8046 48.7774 5.7109 48.2149 5.7109 47.5820 Z M 50.2890 23.6289 L 50.2890 47.5820 C 50.2890 48.1914 50.2184 48.7305 50.0548 49.1992 L 36.9062 36.2852 L 50.2655 23.0664 C 50.2890 23.2305 50.2890 23.4180 50.2890 23.6289 Z M 9.3671 51.2617 C 9.2031 51.2617 9.0390 51.2617 8.8749 51.2383 L 25.2109 35.1367 C 26.2187 34.1289 27.1093 33.6836 28.0468 33.6836 C 28.9843 33.6836 29.8749 34.1289 30.8827 35.1367 L 47.2184 51.2383 C 47.0312 51.2617 46.8436 51.2617 46.6564 51.2617 Z"></path>
                        </g>
                      </svg>
                    </span>
                    <span className="text-xs text-white">Buka Undangan</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    </div>
  );
};

export default UndanganContainer;
