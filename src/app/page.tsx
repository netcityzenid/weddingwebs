// app/page.tsx
"use client";
import UndanganContainer from "./components/InvitationCard";
import HalamanUtama from "./components/HalamanUtama";
import { useState } from "react";
import { AudioProvider } from "./components/AudioContext";
import "../app/globals.css";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <AudioProvider>
      <div className="block sm:hidden font-sans">
        {/* Undangan container di atas dengan posisi absolute */}
        <UndanganContainer onOpenInvitation={handleOpenInvitation} />
        {/* Halaman utama di bawah */}
        {isInvitationOpen && <HalamanUtama className={`${isInvitationOpen ? "relative" : "fixed max-w-md h-full"}`} />}
      </div>
      <div className="sm:flex hidden text-white h-screen items-center justify-center text-center bg-[#d6b064] p-10">
        <div className="text-2xl font-bold p-10 rounded-full bg-black/10">
          <div>Buka undangan di handphone agar tampilan maksimal.</div>
        </div>
      </div>
    </AudioProvider>
  );
}
