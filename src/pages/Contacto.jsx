import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalLibrary } from "react-icons/md";

import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Maps from "../components/Maps";

import imagen1 from "../assets/pictures/inicioplaza4.jpg";
import imagen2 from "../assets/pictures/inicioplaza5.jpg";

const ImagesSlider = [imagen1, imagen2];

function Contacto() {
  return (
    <div>
      <div className=" absolute size-full flex flex-col justify-center items-center top-16">
        <div
          className=" text-0 z-20 text-3xl md:text-5xl lg:text-6xl "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Contactos
        </div>
        <div
          className=" my-2 w-[240px] sm:w-[300px] md:w-[400px] lg:w-[500px] md:h-2 h-1 bg-300 z-50"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="500"
        ></div>
      </div>
      <Slider slides={ImagesSlider} />
      <section className=" flex-row sm:flex md:text-base lg:text-xl p-8 w-full justify-center items-center text-600">
        <div className=" flex justify-start md:justify-center sm:px-2 md:px-4 lg:px-8 py-8 items-center">
          <FaPhoneAlt className="text-2xl" />
          <div className=" px-6">
            <h1>Llámanos</h1>
            <p>(+57) 320 3811430</p>
          </div>
        </div>
        <div className="flex justify-start md:justify-center sm:px-2 md:px-4 lg:px-8 py-8 items-center">
          <FaLocationDot className="text-2xl" />
          <div className="px-6">
            <h1>Dirección</h1>
            <p>Carrera 5 N° 10 - 49</p>
          </div>
        </div>
        <div className="flex justify-start md:justify-center sm:px-2 md:px-4 lg:px-8 py-8 items-center">
          <MdLocalLibrary className="text-2xl" />
          <div className="px-6">
            <h1>Escríbenos</h1>
            <p>ccplazareal@gmail.com</p>
          </div>
        </div>
      </section>
      <section>
        <Contact />
        <Maps />
      </section>
      <Footer />
    </div>
  );
}

export default Contacto;
