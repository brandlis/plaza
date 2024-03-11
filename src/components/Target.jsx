import React from "react";

function Target({ tittle, description, contact, images, ubication }) {
  return (
    <div className="mx-auto max-w-screen-xl px-3 w-full grayscale hover:grayscale-0">
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 max-w-sm cursor-pointer border border-600/20">
        <div className=" overflow-hidden relative h-52">
          <img
            className=" bg-contain p-4 h-full w-full"
            src={images}
            alt="Imagen"
          />
        </div>
        <div className="bg-white px-3">
          <h1 className="text-lg mb-2 font-semibold">{tittle}</h1>
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs text-600 text-pretty">{description}</p>
          </div>
          <div className="text-sm text-900 my-2 font-medium">
            <h3>{ubication}</h3>
            <p className=" py-2 text-600">Telefono: {contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
