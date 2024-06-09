import Image from "next/image";
export default function Section({
  title,
  img,
  text,
  alt,
  left,
  width,
  height,
}: any) {
  if (left) {
    return (
      <section className="sect px-12 py-4 flex justify-between">
        <Image
          src={img}
          alt={alt}
          width={width}
          height={height}
        />
        <div className="flex flex-col">
          <h1 className="text-6xl font-franklin font-black text-mainWhite text-right">
            {title}
          </h1>
          <div className="flex justify-end ">
            <p className="mt-4 text-2xl font-franklin text-mainWhite font-medium w-3/4 text-right">
              {text}
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="sect px-12 py-4 flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-6xl font-franklin font-black text-mainWhite">
            {title}
          </h1>
          <p className="mt-4 text-2xl font-franklin text-mainWhite w-3/4 font-medium  ">
            {text}
          </p>
        </div>

        <Image
          src={img}
          alt={alt}
          width={width}
          height={height}
        />
      </section>
    );
  }
}
