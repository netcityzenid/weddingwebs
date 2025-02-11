import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScrollAnimation = () => {
  const controls = useAnimation(); // Kontrol animasi per elemen
  const { ref, inView } = useInView({
    threshold: 0.1, // Animasi aktif ketika 10% elemen terlihat
    triggerOnce: false, // Animasi bisa diaktifkan berkali-kali saat elemen masuk viewport lagi
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Animasi aktif jika elemen masuk viewport
    } else {
      controls.start("hidden"); // Elemen tersembunyi jika keluar viewport
    }
  }, [controls, inView]);

  return { ref, controls }; // Mengembalikan ref dan kontrol animasi untuk digunakan di setiap elemen
};
