import Image from "next/image";
import Link from "next/link";

export default function Card({ src, alt, title, description, images }: any) {
  return (
    <div
      className="  h-[50vw] lg:h-[25vw] rounded-md  flex flex-col m-4 hover:cursor-pointer relative  
      hover:shadow-sm hover:drop-shadow-glow bg-mainDarkRed transform transition-transform duration-500 ease-in-out hover:scale-105"
      onClick={() => {
        let array = [title, src, alt, description];
        let params = new URLSearchParams();

        params.append("title", array[0]);
        params.append("src", array[1]);
        params.append("alt", array[2]);
        params.append("description", array[3]);
        if (images !== undefined)
          images.map((image: any, index: any) => {
            params.append(`images[${index}]`, image);
          });

        window.location.href = `/details?${params.toString()}`;
      }}
      role="button"
    >
      <div style={{ flex: 3 }} className="relative">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="bg-mainRed rounded-b-md curve">
        <div style={{ flex: 1 }} className="flex items-center justify-center">
          <h2 className="text-lg sm:text-4xl font-franklin font-black text-mainDarkGray  mt-2 translate-y-3">
            {title}
          </h2>
        </div>
        <div className="flex justify-around pb-2 translate-y-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-mainGold" />
          ))}
        </div>
      </div>
    </div>
  );
}
