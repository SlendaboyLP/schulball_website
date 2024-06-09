"use client";
import Image from "next/image";
import Card from "./Card";

export default function Home() {
  return (
    <>
      <main className="w-full bg-mainDarkGray">
        <div className="flex flex-wrap">
          <Card
            src="https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/b/3/csm_20240604_GemeindeTV_1_924bf485a7.jpg"
            title="Ball Fotos"
            className="w-1/3"
          />
          <Card
            src="https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/b/3/csm_20240604_GemeindeTV_1_924bf485a7.jpg"
            title="Ball Fotos"
            className="w-1/3"
          />
          <Card
            src="https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/b/3/csm_20240604_GemeindeTV_1_924bf485a7.jpg"
            title="Ball Fotos"
            className="w-1/3"
          />
          <Card
            src="https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/b/3/csm_20240604_GemeindeTV_1_924bf485a7.jpg"
            title="Ball Fotos"
            className="w-1/3"
          />
          <Card
            src="https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/b/3/csm_20240604_GemeindeTV_1_924bf485a7.jpg"
            title="Ball Fotos"
            className="w-1/3"
          />
        </div>
      </main>
    </>
  );
}
