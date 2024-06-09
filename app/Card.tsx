import Image from "next/image";

export default function Card({ src, alt, title, description }: any) {
  return (
    <div
      className="w-[30vw] h-[25vw] rounded-md shadow-lg flex flex-col m-4 hover:cursor-pointer  "
      onClick={() => alert(description)}
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
      <div className="bg-mainRed rounded-b-md">
        <div style={{ flex: 1 }} className="flex items-center justify-center">
          <h2 className="font-franklin font-black text-mainDarkGray text-4xl  mt-2 translate-y-3">
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
