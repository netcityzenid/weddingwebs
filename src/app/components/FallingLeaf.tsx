import React from "react";
import Image from "next/image";
import leaf from "../../../public/images/leaf.png";

export default function FallingLeaves() {
  return (
    <div className="grid grid-rows-2 opacity-80">
      <div className="falling-leaves-container ">
        <Image src={leaf} alt="leaf1" className="leaf leaf1" />
        <Image src={leaf} alt="leaf1" className="leaf leaf3" />
        <Image src={leaf} alt="leaf1" className="leaf leaf2" />
        <Image src={leaf} alt="leaf1" className="leaf leaf4" />
      </div>
    </div>
  );
}
