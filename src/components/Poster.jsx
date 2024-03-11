function Poster({ title, subtitle, image }) {
  return (
    <div className="relative w-full h-80 cursor-pointer group">
      <img
        src={image}
        alt="imagen"
        className="h-full w-full group-hover:blur-[2px] group-hover:opacity-25 transition-all duration-300 object-cover "
      />
      <div className="absolute w-full h-full top-0 p-6 m-auto opacity-0 hover:opacity-100 transition-opacity">
        <h1 className="text-4xl py-2 text-center text-300 font-bold">
          {title}
        </h1>
        <p className="text-justify text-lg tracking-tighter text-wrap font-semibold py-10 text-800">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Poster;
