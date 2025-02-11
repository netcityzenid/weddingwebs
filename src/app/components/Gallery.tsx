import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Lightbox styles
import im1 from "../../../public/images/im1.jpg";
import im2 from "../../../public/images/im2.jpg";
import im3 from "../../../public/images/im3.jpg";
import im4 from "../../../public/images/im4.jpg";
import im5 from "../../../public/images/im5.jpg";
import im6 from "../../../public/images/im6.jpg";
import im7 from "../../../public/images/im7.jpg";
import im8 from "../../../public/images/im8.jpg";
import im9 from "../../../public/images/im9.jpg";
import im10 from "../../../public/images/im10.jpg";
import im11 from "../../../public/images/im11.jpg";
import im12 from "../../../public/images/im12.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    rootMargin: "-20% 0px", // Trigger when the element is at the center of the screen
    triggerOnce: false, // Keep observing for changes
  });

  // Start animation when the element enters the center of the screen
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div ref={ref} initial={initial} animate={inView ? animate : initial} transition={transition} className="mt-2">
      {children} {/* Konten yang bisa disesuaikan */}
    </motion.div>
  );
};

export default function Gallery() {
  const images = [im1.src, im2.src, im3.src, im4.src, im5.src, im6.src, im7.src, im8.src, im9.src, im10.src, im11.src, im12.src]; // Array of image sources
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0); // Track the current photo index

  const openImage = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className=" 0">
      <div>
        <div className="grid grid-cols-2 gap-2  ">
          <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(0)}>
              <Image src={im1} alt="Image 1" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
            </div>
          </AnimatedComponent>
          <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(1)}>
              <Image src={im2} alt="Image 2" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
            </div>
          </AnimatedComponent>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-2  ">
          <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(2)}>
              <Image src={im3} alt="Image 3" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
            </div>
          </AnimatedComponent>
          <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(3)}>
              <Image src={im4} alt="Image 4" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
            </div>
          </AnimatedComponent>
          <div>
            <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
              <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(4)}>
                <Image src={im5} alt="Image 5" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2  ">
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(5)}>
            <Image src={im6} alt="Image 6" layout="intrinsic" objectFit="cover" className="absolute -bottom-2" />
          </div>
        </AnimatedComponent>
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(6)}>
            <Image src={im7} alt="Image 7" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
          </div>
        </AnimatedComponent>
      </div>
      <div className="grid grid-cols-3 gap-2  ">
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(7)}>
            <Image src={im8} alt="Image 8" layout="intrinsic" objectFit="cover" className="absolute -bottom-2" />
          </div>
        </AnimatedComponent>
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(8)}>
            <Image src={im9} alt="Image 9" layout="intrinsic" objectFit="cover" className="absolute -bottom-2" />
          </div>
        </AnimatedComponent>
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(9)}>
            <Image src={im10} alt="Image 10" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
          </div>
        </AnimatedComponent>
      </div>
      <div className="grid grid-cols-2 gap-2  ">
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(7)}>
            <Image src={im11} alt="Image 11" layout="intrinsic" objectFit="cover" className="absolute -bottom-5" />
          </div>
        </AnimatedComponent>
        <AnimatedComponent initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(8)}>
            <Image src={im12} alt="Image 12" layout="intrinsic" objectFit="cover" className="absolute -bottom-10" />
          </div>
        </AnimatedComponent>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]} // Next image in array
          prevSrc={images[(photoIndex + images.length - 1) % images.length]} // Previous image in array
          onCloseRequest={() => setIsOpen(false)} // Close the lightbox
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)} // Go to previous image
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)} // Go to next image
        />
      )}
    </div>
  );
}
