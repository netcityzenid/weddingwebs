// src/components/HalamanUtama.tsx
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import CountdownTimer from "./Countdown";
import afni from "../../../public/images/afni.jpg";
import galang from "../../../public/images/galang.jpg";
import hand from "../../../public/images/hand.png";
import bl from "../../../public/images/BL.png";
import br from "../../../public/images/BR.png";
import im1 from "../../../public/images/im1.jpg";
import couple from "../../../public/images/couple-1.jpg";
import FormData from "./FromData";
import { motion, AnimatePresence } from "framer-motion";
import permata from "../../../public/images/permata.png";
import bca from "../../../public/images/BCA.svg";
import lines from "../../../public/images/lines.png";
import im12 from "../../../public/images/im12.jpg";
import MusicButton from "./ButtonAudio";
import ImageGallery from "./Gallery";
import flower from "../../../public/images/flower.png";
import flowerstop from "../../../public/images/flowers-top.png";
import { useInView } from "react-intersection-observer";
interface HalamanUtamaProps {
  className?: string; // Tambahkan prop comments
}
interface AnimatedComponentProps {
  children: ReactNode; // Menentukan tipe children
  initial?: {
    opacity?: number; // Opsi untuk opacity
    y?: number; // Opsi untuk y
    x?: number; // Opsi untuk y
    scale?: number; // Opsi untuk y
  };
  animate?: {
    opacity?: number; // Opsi untuk opacity
    y?: number; // Opsi untuk y 
    x?: number; // Opsi untuk y
    scale?: number;
  };
  transition?: { duration: number }; // Tipe untuk transition 
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, initial = { opacity: 0, y: 100 }, animate = { opacity: 1, y: 0 }, transition = { duration: 0.5 } }) => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has started
  const { ref, inView } = useInView({
    rootMargin: "0% 0px", // Trigger when the element is at the center of the screen
    triggerOnce: false, // Keep observing for changes
  });

  // Start animation when the element enters the center of the screen
  if (inView && !hasAnimated) {
    setHasAnimated(true); 
  }

  return (
    <motion.div ref={ref} initial={initial} animate={inView ? animate : initial} transition={transition} className="">
      {children} {/* Konten yang bisa disesuaikan */}
    </motion.div>
  );
};

const HalamanUtama: React.FC<HalamanUtamaProps> = ({ className }) => {
  const targetDate = "2025-04-19T00:00:00";
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const mempelaiPria = "Galang Al Rizky";
  const mempelaiWanita = "Nurafni Putri Azzahra";
  const mempelaiWanitaDari = "Putri pertama Ibu Fitri & Bapak Ismail";
  const mempelaiPriaDari = "Putra ketiga Bapak Harun & Ibu Rahma";
  const IGmempelaiWanita = "nurafniazahraa";
  const IGmempelaiPria = "galangalrizky";

  const copyToClipboard = () => {
    // The text you want to copy
    const textToCopy = "1235003860";

    // Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        // Optionally handle success (e.g., show a message)
        alert("Text copied to clipboard!");
      },
      (err) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const copyToClipboards = () => {
    // The text you want to copy
    const textToCopy = "123123123";

    // Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        // Optionally handle success (e.g., show a message)
        alert("Text copied to clipboard!");
      },
      (err) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Failed to copy text: ", err);
      }
    );
  };
  const copyAlamat = () => {
    // The text you want to copy
    const textToCopy = "Jl. laskar raya Gg. mushola al ikhlas rt.003/02 no.128 pekayon jaya, bekasi selatan, Bekasi 17148";

    // Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        // Optionally handle success (e.g., show a message)
        alert("Text copied to clipboard!");
      },
      (err) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleOpen1 = () => setIsOpen1(!isOpen1);

  return (
    <div className={className}>
      <AnimatePresence>
        <div className=" overflow-hidden bg-pattern relative max-w-[640px] mx-auto">
          <MusicButton />
          <div id="section-1" className="w-full h-full bg-pattern bg-[#e4e4e4] relative ">
            <div className=" relative overflow-hidden">
              <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 0 }} className="flex">
                <Image src={im1} alt="couple" className=" "></Image>
              </motion.div>
              <div className="text-white px-5 relative z-[50] pb-20 -mt-9">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 2 }}>
                  <AnimatedComponent initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                    <div className="text-center mt-5 bg-[#d6b064] w-max px-4 py-1 rounded-full  text-sm text-[#fff] items-center flex mx-auto justify-center ">
                      <span className=" opacity-65">
                        <svg className="h-4 w-auto mr-1" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>{" "}
                            <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#fff"></rect> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#f0f0f0"></rect>{" "}
                            <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#fff"></rect>{" "}
                          </g>
                        </svg>
                      </span>
                      <span className="">Sabtu, 19 April 2025</span>
                    </div>

                    <motion.div className="mt-5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 3 }}>
                      <CountdownTimer targetDate={targetDate} />
                    </motion.div>
                  </AnimatedComponent>
                </motion.div>
              </div>
            </div>
          </div>
          <section id="section2" className=" bg-pattern bg-[#0a0a0a] px-5 pb-32 pt-20 relative z-100">
            <AnimatedComponent initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
              <div className="rotating">
                <Image src={flower} alt="flower" className=" absolute -top-40 h-32 w-auto -left-20 transform scale-x-[-1]"></Image>
              </div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <div className="text-[#d6b064] text-center font-serif  relative">
                <p className="text-2xl font-semibold font-custom">Assalamu{"'"}alaikum Wr. Wb.</p>
              </div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <p className="mt-5 text-[#d6b064] text-sm text-center">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat dan teman-teman sekalian untuk menghadiri acara pernikahan kami :</p>
            </AnimatedComponent>
            <div className="w-full text-white text-center mt-4">
              <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                <div className="px-14 pt-10">
                  <Image src={afni} alt="" className=" relative rounded-t-full border-2 border-[#d6b064] mx-auto w-2/3"></Image>
                </div>
              </AnimatedComponent>
              <AnimatedComponent initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <p className="mt-5 text-2xl font-bold font-custom  text-[#d6b064]">{mempelaiWanita}</p>
                <p className="mt-4 text-[#d6b064] text-sm">{mempelaiWanitaDari}</p>
                <a href={`https://instagram.com/${IGmempelaiWanita}`} target="_blank" className="mt-4 items-center flex text-center justify-center text-sm">
                  <span>
                    <svg className="h-4 w-auto mr-1" width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect>{" "}
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect>{" "}
                        <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                          fill="white"
                        ></path>{" "}
                        <defs>
                          {" "}
                          <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                            {" "}
                            <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                          </radialGradient>{" "}
                          <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                            {" "}
                            <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>{" "}
                          </radialGradient>{" "}
                          <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                            {" "}
                            <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#d6b064]">{IGmempelaiWanita}</span>
                </a>
              </AnimatedComponent>
            </div>

            <AnimatedComponent initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <div className="text-[#d6b064] text-center mt-10 font-custom text-4xl">&</div>
            </AnimatedComponent>
            <div className="w-full text-white text-center mt-4">
              <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                <div className="px-14 pt-10">
                  <Image src={galang} alt="" className=" relative rounded-t-full border-2 border-[#d6b064] mx-auto w-2/3"></Image>
                </div>
              </AnimatedComponent>
              <AnimatedComponent initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <p className="mt-5 text-2xl font-bold font-custom  text-[#d6b064]">{mempelaiPria}</p>
                <p className="mt-4 text-[#d6b064] text-sm">{mempelaiPriaDari}</p>
                <a href={`https://instagram.com/${IGmempelaiPria}`} target="_blank" className="mt-4 flex text-center justify-center text-sm items-center">
                  <span>
                    <svg className="h-4 w-auto mr-1" width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect>{" "}
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect>{" "}
                        <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                          fill="white"
                        ></path>{" "}
                        <defs>
                          {" "}
                          <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                            {" "}
                            <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                          </radialGradient>{" "}
                          <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                            {" "}
                            <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>{" "}
                          </radialGradient>{" "}
                          <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                            {" "}
                            <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#d6b064]">{IGmempelaiPria}</span>
                </a>
              </AnimatedComponent>
            </div>
          </section>
          <AnimatedComponent initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <div className=" relative">
              <Image src={flower} alt="flower" className=" absolute bottom-[500px] h-20 w-auto -right-10 rotate-animation5"></Image>
            </div>
          </AnimatedComponent>
          <AnimatedComponent initial={{ x: -100, y: 100 }} animate={{ x: 0, y: 0 }} transition={{ duration: 1 }}>
            <div className=" relative">
              <Image src={flower} alt="flower" className=" absolute bottom-[0px] h-20 w-auto -left-10 rotate-animation5"></Image>
            </div>
          </AnimatedComponent>
          <div id="section-2" className=" bg-pattern bg-[#f0f0f0] pt-20 text-center pb-72 relative">
            <AnimatedComponent initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
              <div className="rotating">
                <Image src={flower} alt="flower" className=" absolute -top-20 h-32 w-auto -right-10 "></Image>
              </div>
            </AnimatedComponent>

            <div className=" px-5 z-50 relative">
              <AnimatedComponent initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                <div className=" font-custom text-5xl mb-10 -mt-10">Wedding Event</div>
              </AnimatedComponent>
              <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                <div className="p-5 rounded-3xl bg-white/50 overflow-hidden shadow-lg text-black/80 relative backdrop-filter backdrop-blur-md">
                  <div className=" opacity-45">
                    <Image src={br} alt="" className="absolute -right-10 bottom-0 h-20 w-auto"></Image>
                    <Image src={br} alt="" className="absolute -right-10  h-40 w-auto"></Image>
                    <Image src={br} alt="" className="absolute -right-10 h-20 w-auto"></Image>
                  </div>
                  <div className=" relative z-100 ">
                    <div className="text-4xl font-custom mb-5">Akad Nikah</div>
                    <div>Sabtu, 19 April 2025</div>
                    <div className="">Pukul 09.00 WIB</div>
                    <div className="font-bold mt-5">Gedung Serbaguna Komplek PP. PUPR Pengairan Bekasi</div>
                    <div className="mt-5">
                      <a className="pl-2 pr-4 py-2 text-sm shadow-lg flex  border-2 border-[#d6b064] items-center w-max mx-auto rounded-full hover:scale-110 transition-all" href="https://maps.app.goo.gl/FJ6GJ2NZstnXrWrn6" target="_blank">
                        <span>
                          <svg className="h-4 w-auto mr-2" width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                                fill="#000000"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        <span>Lihat Lokasi</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedComponent>
              <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                <div className="p-5 rounded-3xl mt-5 overflow-hidden bg-white/50 shadow-lg text-black/80  backdrop-blur-lg backdrop-filter relative">
                  <div className=" opacity-45">
                    <Image src={bl} alt="" className="absolute -left-10 bottom-0 h-20 w-auto"></Image>
                    <Image src={bl} alt="" className="absolute -left-10  h-40 w-auto"></Image>
                    <Image src={bl} alt="" className="absolute -left-10 h-20 w-auto"></Image>
                  </div>
                  <div className=" relative z-100">
                    <div className="text-4xl font-custom mb-5">Resepsi</div>
                    <div className="">
                      <div>Sabtu, 19 April 2025</div>
                      <div className="">Pukul 11.00 - 15.00 WIB</div>
                    </div>
                    <div className="font-bold mt-5">Gedung Serbaguna Komplek PP. PUPR Pengairan Bekasi</div>
                    <div className="mt-5">
                      <a className="pl-2 pr-4 py-2 text-sm shadow-lg flex  border-2 border-[#d6b064] items-center w-max mx-auto rounded-full hover:scale-110 transition-all" href="https://maps.app.goo.gl/FJ6GJ2NZstnXrWrn6" target="_blank">
                        <span>
                          <svg className="h-4 w-auto mr-2" width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                                fill="#000000"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        <span>Lihat Lokasi</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedComponent>
            </div>
            <AnimatedComponent initial={{ scale: 2 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <Image src={hand} alt="" className="  absolute bottom-0 scale-1.10 pb-32 opacity-25 "></Image>
            </AnimatedComponent>
          </div>

          <div id="section-3" className="  bg-[#0a0a0a] pt-2  px-5 pb-40 ">
            <AnimatedComponent initial={{ x: -100, y: -100 }} animate={{ x: 0, y: 0 }} transition={{ duration: 1 }}>
              <div className="rotating">
                <Image src={flower} alt="flower" className=" absolute -top-10 h-32 w-auto -left-16 rotate-[45deg] transform scale-x-[-1]"></Image>
              </div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className="text-white text-center mt-10 flex justify-center mb-10">
                <p className="text-5xl font-custom text-[#d6b064]"> Our Gallery</p>
              </div>
            </AnimatedComponent>
            <div>
              <ImageGallery />
            </div>
            <AnimatedComponent initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className="bg-[#222222] rounded-3xl mt-10 overflow-hidden relative z-[100]">
                <div className="text-[#f0f0f0] bg-[#]  text-center p-5  leading-8 text-sm font-light">
                  &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang.
                  Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
                  <br />
                  <span className="font-semibold">Q.S Ar-Rum:21</span>
                </div>
                <AnimatedComponent initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
                  <Image src={couple} alt="" className=""></Image>
                </AnimatedComponent>
              </div>
            </AnimatedComponent>
          </div>

          <div id="section-4" className="   h-full bg-[#f0f0f0] pt-20 pb-20">
            <AnimatedComponent initial={{ x: 100, y: -100 }} animate={{ x: 0, y: 0 }} transition={{ duration: 1 }}>
              <div className="rotating">
                <Image src={flower} alt="flower" className=" absolute -top-20 h-32 w-auto -right-10 "></Image>
              </div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className="text-center">
                <p className=" text-5xl z-1 relative text-[#0a0a0a] font-custom">Ucapan dan</p>
                <p className=" text-5xl z-1 relative text-[#0a0a0a] font-custom">Doa Restu</p>
              </div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <div className="text-center mt-5">Kirim Ucapan dan Doa Restu</div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="mt-8 relative z-[100]">
                <FormData />
              </div>
            </AnimatedComponent>
          </div>

          <div id="section-5" className="pb-32 text-[#f0f0f0] bg-[#0a0a0a] py-20 px-5">
            <AnimatedComponent initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className="text-5xl font-custom text-center text-[#d6b064] relative z-1">Give a Gift</div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className=" text-center mt-5 text-[#f0f0f0] text-sm">kami menyambut setiap bentuk dukungan dan doa Anda. Terima kasih telah menjadi bagian dari perayaan ini dan berbagi kebahagiaan bersama kami.</div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className="mt-10">
                <div className="  rounded-[10px]">
                  <div onClick={toggleOpen} className="text-center rounded-lg flex justify-center bg-[#d6b064] py-2  text-white cursor-pointer">
                    <span>
                      <svg className="h-5 w-auto mr-1" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 8V21M12 8H7.5C6.83696 8 6.20107 7.73661 5.73223 7.26777C5.26339 6.79893 5 6.16304 5 5.5C5 4.83696 5.26339 4.20107 5.73223 3.73223C6.20107 3.26339 6.83696 3 7.5 3C11 3 12 8 12 8ZM12 8H16.5C17.163 8 17.7989 7.73661 18.2678 7.26777C18.7366 6.79893 19 6.16304 19 5.5C19 4.83696 18.7366 4.20107 18.2678 3.73223C17.7989 3.26339 17.163 3 16.5 3C13 3 12 8 12 8ZM3 14H21M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span className="font-semibold">Cashless Gift</span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.8 }}>
                        <div className=" overflow-hidden relative p-5 bg-gradient-to-bl from-[#111111] to-[#222222] mt-5 rounded-xl">
                          <Image src={lines} alt="lines" className="absolute -bottom-1 -right-1 opacity-50"></Image>
                          <div className="mb-8">
                            <Image src={permata} alt="permata" className="h-autp w-24"></Image>
                          </div>
                          <div className="grid grid-cols-3 h-8 w-14 mb-5 rounded bg-[#d6b064]">
                            <div className="grid grid-rows-3">
                              <div></div>
                              <div className="border-y border-black"></div>
                              <div></div>
                            </div>
                            <div className="border-x border-black rounded-lg"></div>
                            <div className="grid grid-rows-3">
                              <div></div>
                              <div className="border-y border-black"></div>
                              <div></div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <button onClick={copyToClipboard} className="font-mono relative text-xl mb-2 mr-2">
                              <span>1 2 3 5 0 0 3 8 6 0</span>
                              <span className="font-mono mb-2 absolute right-0 -top-5 text-xs opacity-60 ">tap to copy</span>
                            </button>
                          </div>
                          <div className="font-mono uppercase">Galang Al Rizky</div>
                        </div>
                        <div className=" overflow-hidden relative p-5 bg-gradient-to-bl from-[#111111] to-[#222222] mt-5 rounded-xl">
                          <Image src={lines} alt="lines" className="absolute -bottom-1 -right-1 opacity-50"></Image>
                          <div className="mb-8">
                            <Image src={bca} alt="permata" className="h-autp w-24"></Image>
                          </div>
                          <div className="grid grid-cols-3 h-8 w-14 mb-5 rounded bg-[#d6b064]">
                            <div className="grid grid-rows-3">
                              <div></div>
                              <div className="border-y border-black"></div>
                              <div></div>
                            </div>
                            <div className="border-x border-black rounded-lg"></div>
                            <div className="grid grid-rows-3">
                              <div></div>
                              <div className="border-y border-black"></div>
                              <div></div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <button onClick={copyToClipboards} className="font-mono relative text-xl mb-2 mr-2">
                              <span>1 2 3 1 2 3 1 2 3</span>
                              <span className="font-mono mb-2 absolute right-0 -top-5 text-xs opacity-60 ">tap to copy</span>
                            </button>
                          </div>
                          <div className="font-mono uppercase">Nurafni Putri Azzahra</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </AnimatedComponent>
            <AnimatedComponent initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              <div className="mt-5">
                <div className="">
                  <div onClick={toggleOpen1} className="text-center rounded-lg mb-5 flex justify-center bg-[#d6b064] py-2  text-white cursor-pointer">
                    <span>
                      <svg className="h-5 w-auto mr-1" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 8V21M12 8H7.5C6.83696 8 6.20107 7.73661 5.73223 7.26777C5.26339 6.79893 5 6.16304 5 5.5C5 4.83696 5.26339 4.20107 5.73223 3.73223C6.20107 3.26339 6.83696 3 7.5 3C11 3 12 8 12 8ZM12 8H16.5C17.163 8 17.7989 7.73661 18.2678 7.26777C18.7366 6.79893 19 6.16304 19 5.5C19 4.83696 18.7366 4.20107 18.2678 3.73223C17.7989 3.26339 17.163 3 16.5 3C13 3 12 8 12 8ZM3 14H21M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span className=" font-semibold">Special Gifts</span>
                  </div>
                  <AnimatePresence>
                    {isOpen1 && (
                      <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.8 }}>
                        <div className=" relative bg-gradient-to-bl  overflow-hidden from-[#111111] to-[#222222] rounded-xl">
                          <button onClick={copyAlamat} className=" bg-white/10 shadow-lg p-1 px-2 rounded absolute top-2 right-2 flex items-center gap-1 text-sm">
                            <div className="flex items-center gap-1 opacity-70">
                              <span className=" ">
                                <svg className="h-4 w-auto" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g id="Edit / Copy">
                                      {" "}
                                      <path
                                        id="Vector"
                                        d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15"
                                        stroke="#ffffff"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>{" "}
                                    </g>{" "}
                                  </g>
                                </svg>
                              </span>
                              <span>salin alamat</span>
                            </div>
                          </button>
                          <div className="p-5">
                            <div className="mb-2 font-bold text-lg text-[#f0f0f0]">Afni / oma jidan</div>
                            <div className="mb-2 text-[#f0f0f0]  whitespace-normal">
                              <span className="m">Jl. laskar raya Gg. mushola al ikhlas rt.003/02 no.128 pekayon jaya, bekasi selatan, Bekasi 17148 </span>
                            </div>
                            <div className="font-bold  text-[#f0f0f0]">0895383142520</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </AnimatedComponent>
          </div>

          <div id="section-6" className="bg-[#f0f0f0] pt-20 overflow-hidden relative">
            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
              <div className="relative">
                <Image src={flowerstop} alt="flower" className=" absolute top-20 -right-40 rotate-[90deg] scale-150 opacity-30"></Image>
              </div>
            </motion.div>
            <div className=" bg-[#f0f0f0] flex absolute "></div>
            <div className="z-50 px-5 relative">
              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className="font-custom text-5xl text-[#0a0a0a] text-center mb-5">
                Terima Kasih
              </motion.div>
              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className="text-center text-sm">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
              </motion.div>
              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className=" relative">
                <Image src={im12} alt="couple" className=" mt-5 bg-[#f0f0f0]"></Image>
                <div className=" z-50 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] font-sacramento font-bold text-[40px] leading-none " style={{ textShadow: " 0px 0px 10px rgba(0, 0, 0, 0.6)" }}>
                  Afni &<br />
                  Galang
                </div>
              </motion.div>
            </div>
            <div className="text-black text-xs relative z-50 mt-10 pb-10 text-center">
              Created with ❤️ by{" "}
              <a href="https://instagram.com/galangalrizky" target="_blank" className="font-semibold">
                galangalrizky
              </a>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default HalamanUtama;
