"use client";

export default function Details() {
  let params = new URLSearchParams(window.location.search);

  let title = params.get("title");
  let src = params.get("src");
  let alt = params.get("alt");
  let description = params.get("description");

  let images = [];
  let i = 0;
  while (true) {
    let image = params.get(`images[${i}]`);
    if (image === null) {
      break;
    }
    images.push(image);
    i++;
  }

  return (
    <>
      <main className="w-full bg-mainDarkGray flex mb-4">
        <div className="min-h-full w-1/2 ">
          {images.map((image, index) => (
            <center key={index}>
              <img
                key={index}
                src={image}
                alt={image}
                className="w-[60%]  object-cover rounded-md m-4"
              />
            </center>
          ))}
        </div>
        <div className="min-h-full w-[0.25vw] bg-mainWhite rounded-md"></div>

        <div className="min-h-full w-1/2 flex flex-col ">
          <div className="flex justify-center">
            <p className="text-6xl font-franklin font-black text-mainWhite">
              {title}
            </p>
          </div>

          <div className="mt-4 ml-12 mr-12">
            <p className="font-franklin font-medium text-mainWhite">
              {description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
