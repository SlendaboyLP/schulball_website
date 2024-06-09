"use client";
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="w-full flex justify-between bg-mainDarkGray ">
      <Image
        src="/logo.png"
        alt="The Red Carpet Logo"
        width={240}
        height={0}
        className="ml-4  hover:cursor-pointer hover:shadow-lg hover:drop-shadow-glow"
        onClick={() => {
          window.location.href = "/";
        }}
      />

      <ul className="flex justify-evenly w-1/5 items-center mr-4">
        <li
          onClick={() => (window.location.href = "/")}
          className="mr-2 text-mainWhite font-franklin font-black hover:cursor-pointer hover:text-mainGold hover:shadow-lg hover:drop-shadow-glow  h-min p-4"
        >
          Home
        </li>
        <li
          onClick={() => (window.location.href = "/")}
          className="mr-2 text-mainWhite font-franklin font-black hover:cursor-pointer hover:text-mainGold hover:shadow-lg hover:drop-shadow-glow  h-min p-4"
        >
          Info
        </li>
        <li
          onClick={() => (window.location.href = "/")}
          className="mr-2 text-mainWhite font-franklin font-black hover:cursor-pointer hover:text-mainGold hover:shadow-lg hover:drop-shadow-glow  h-min p-4"
        >
          Kontakt
        </li>
      </ul>
    </nav>
  );
}
