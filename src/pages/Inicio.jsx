import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

import { logoList } from "../js/listData";

import Slider from "../components/Slider";
import FotoPLaza from "../assets/pictures/inicioplaza.jpg";
import FotoPLaza2 from "../assets/pictures/inicioplaza2.jpg";
import FotoPLaza3 from "../assets/pictures/inicioplaza3.jpg";
import FotoPLaza4 from "../assets/pictures/inicioplaza4.jpg";
import FotoPLaza5 from "../assets/pictures/inicioplaza5.jpg";
import ZonaComun1 from "../assets/pictures/zonacomun1.jpg";
import ZonaComun2 from "../assets/pictures/zonacomun2.jpg";

import Poster from "../components/Poster";
import Contact from "../components/Contact";
import Maps from "../components/Maps";
import Footer from "../components/Footer";

const imagesSlaider = [
  FotoPLaza4,
  FotoPLaza2,
  FotoPLaza3,
  FotoPLaza5,
  FotoPLaza,
];

function Inicio() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <Slider slides={imagesSlaider} />
      <article className="block max-h-screen m-3 sm:p-2 sm:grid sm:grid-cols-2 md:grid md:mx-3 lg:px-20 lg:pt-16">
        <div className=" h-full p-2 sm:pr-3 md:max-w-xl  group ">
          <img
            src={FotoPLaza5}
            alt="imagen-plaza"
            className=" grayscale h-full transition-transform ease-out duration-300 cursor-pointer"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:px-10 lg:px-10 lg:content-center h-full justify-center"
        >
          <div className=" lg:flex lg:flex-col lg:justify-center md:justify-center md:flex md:flex-col px-2 h-full ">
            <h2 className=" md:text-2xl lg:text-3xl text-lg font-medium text-300 py-4 ">
              Sobre nosotros
            </h2>
            <p className=" text-wrap text-justify ">
              <span className="md:text-3xl text-2xl text-900 font-extrabold tracking-tighter">
                Plaza Real
              </span>
              , un destacado edificio en el corazón de Neiva, sirviendo a la
              comunidad con dedicación por más de 10 años. Ofrecemos espacios
              cómodos y agradables, creando un ambiente excepcional para todos
              nuestros colaboradores. Descubre la comodidad y conveniencia en
              cada rincón de nuestro edificio, donde tu bienestar es nuestra
              prioridad.
            </p>
            <div className="pt-2 text-end">
              <Link
                to="/nosotros"
                className="text-base font-extralight cursor-pointer hover:text-500"
                reloadDocument="true"
              >
                Leer Mas
                <MdArrowRight className="inline-block text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <div className="sm:hidden w-full h-4 bg-gradient-to-r from-0 to-200 m-0"></div>
      <article className="block sm:grid md:grid lg:p-24 md:p-10 p-3 ">
        <div className="flex items-center">
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-300 py-4 pr-4">
            Servicios
          </h2>
          <div className=" bg-900 w-full h-[2px] mt-1 "></div>
        </div>
        <div>
          <p className="text-2xl text-900 pb-2 font-extrabold tracking-tighter">
            Zonas Comunes
          </p>
          <div className="">
            <Poster
              image={ZonaComun1}
              title={`La Caldera`}
              subtitle={` Experimenta la exquisitez de platos y bebidas preparados con esmero y dedicación. Sumérgete en una experiencia culinaria única, disfrutando de una variada selección que deleitará tu paladar.`}
            />
            <div className=" py-4">
              <div className=" bg-900 w-full h-[2px] mt-1 opacity-55 "></div>
            </div>
            <Poster
              image={ZonaComun2}
              title={`Fresh-Co`}
              subtitle={` Explora la increíble diversidad de bebidas refrescantes, jugos vibrantes y exquisitos sándwiches, todos preparados con cuidado y pasión. Sumérgete en una experiencia culinaria única.`}
            />
          </div>
        </div>
      </article>
      <article className="block sm:grid md:grid md:p-10 lg:p-24 p-3 mb-8 ">
        <div className="flex items-center">
          <h2 className=" font-medium text-300 py-4 pr-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Copropietarios
          </h2>
          <div className=" bg-900 w-full h-[2px] mt-1 "></div>
        </div>
        <div>
          <p className=" text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-900 pb-7">
            Conocer algunos de nuestros copropietarios
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" w-full max-h-mi border border-100 rounded-xl shadow-xl"
          >
            <div className=" w-full p-2 flex flex-wrap justify-center gap-2">
              {logoList.map((item, id) => (
                <img
                  key={id}
                  src={item.logo}
                  alt="logo"
                  className="sm:size-12 md:size-16 md:mx-2 lg:size-20 lg:mx-3 mx-1 size-10 object-contain "
                />
              ))}
            </div>
            <div className=" text-end">
              <Link
                to="/copropiedad"
                className="text-base font-extralight cursor-pointer hover:text-500"
                reloadDocument="true"
              >
                Leer Mas
                <MdArrowRight className="inline-block text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}

export default Inicio;
