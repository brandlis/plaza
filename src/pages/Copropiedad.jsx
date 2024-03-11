import { useEffect } from "react";
import AOS from "aos";

import Slider from "../components/Slider";
import DataCopropiedad from "../components/DataCopropiedad";
import Maps from "../components/Maps";
import Footer from "../components/Footer";

import FotoPLaza3 from "../assets/pictures/inicioplaza3.jpg";
import FotoPLaza4 from "../assets/pictures/inicioplaza4.jpg";

const imagesSlaider = [FotoPLaza3, FotoPLaza4];

function Copropiedad() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div className=" absolute size-full flex flex-col justify-center items-center top-16">
        <div
          className=" text-0 z-20 text-3xl md:text-5xl lg:text-6xl "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Copropietarios
        </div>
        <div
          className=" my-2 w-[240px] sm:w-[300px] md:w-[400px] lg:w-[500px] md:h-2 h-1 bg-300 z-50"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="500"
        ></div>
      </div>
      <Slider slides={imagesSlaider} />
      <DataCopropiedad />
      <Maps />
      <Footer />
    </div>
  );
}

export default Copropiedad;
