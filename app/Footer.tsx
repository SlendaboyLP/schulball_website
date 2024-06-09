"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full h-min bg-mainDarkGray flex justify-between items-center  ">
      <p className="text-mainWhite font-franklin font-black ml-4">
        © 2024 Red Carpet
      </p>
      <Image
        src="/logo.png"
        alt="The Red Carpet Logo"
        width={120}
        height={0}
        className=" hover:cursor-pointer "
        onClick={() => {
          window.location.href = "/";
        }}
      />

      <p className="mr-8 text-mainWhite font-franklin font-black hover:cursor-pointer hover:text-mainGold hover:shadow-lg hover:drop-shadow-glow  h-min p-4 ">
        Impressum
      </p>
    </footer>
  );
}
