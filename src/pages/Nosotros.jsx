import { useEffect } from "react";
import Slider from "../components/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import FotoPLaza2 from "../assets/pictures/inicioplaza2.jpg";
import FotoPLaza from "../assets/pictures/inicioplaza.jpg";
import Maps from "../components/Maps";
import Footer from "../components/Footer";

const imagesSlaider = [FotoPLaza, FotoPLaza2];

function Nosotros() {
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
          Sobre Nosotros
        </div>
        <div
          className=" my-2 w-[240px] sm:w-[300px] md:w-[400px] lg:w-[500px] md:h-2 h-1 bg-300 z-50"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="500"
        ></div>
      </div>
      <Slider slides={imagesSlaider} />
      <section className="m-2 p-2">
        <div className=" flex flex-col sm:flex-row sm:items-center lg:items-center max-w-6xl mx-auto py-10">
          <div className="sm:px-4" data-aos="fade-up" data-aos-duration="1000">
            <h2 className=" text-2xl capitalize text-400 font-semibold py-4">
              Nuestra historia
            </h2>
            <p className=" text-base text-balance pb-4">
              Desde su inicio en 1992, nuestro centro comercial ha sido un punto
              de referencia en nuestra comunidad. Con servicios como
              restaurantes y bebidas, ofrecemos conveniencia y calidad para
              todos nuestros visitantes. A lo largo de los años, hemos
              evolucionado para adaptarnos a las necesidades cambiantes de
              nuestros copropietarios. Con el tiempo, hemos expandido y
              modernizado nuestras instalaciones para seguir siendo relevantes
              en un entorno comercial en constante cambio.
            </p>
          </div>
          <img
            src={FotoPLaza}
            alt="imagen"
            className=" hidden md:flex sm:size-2/4 lg:size-2/5 self-center"
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
            }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
          />
          <img
            src={FotoPLaza}
            alt="imagen"
            className=" flex md:hidden m-2 sm:size-4/5"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
          />
        </div>

        <div className=" flex flex-col sm:flex-row-reverse sm:items-center lg:items-center max-w-6xl mx-auto">
          <div
            className="sm:px-4 md:text-right md:mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className=" text-2xl capitalize text-400 font-semibold py-4">
              Espacios para Crecer
            </h2>
            <p className=" text-base text-balance pb-4">
              Maximiza tu Exposición: ¡Destaca tu Empresa Frente a los
              Transeúntes! Descubre Grandes Oportunidades para Comprar o
              Alquilar Un Espacio en Nuestro Edificio.
            </p>
          </div>
          <img
            src={FotoPLaza2}
            alt="imagen"
            className=" hidden md:flex sm:size-2/4 sm:ml-4 lg:size-2/5 self-center"
            style={{
              clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
            }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
          />
          <img
            src={FotoPLaza2}
            alt="imagen"
            className=" flex md:hidden m-2 sm:size-4/5"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
          />
        </div>
      </section>
      <div
        className=" m-6 my-14 text-balance text-center border-y-[1px] border-700"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-offset="1"
      >
        <h1 className=" text-xl my-6">
          <b className=" text-600 text-3xl">
            ¡Encuéntranos y déjate sorprender con una experiencia única!
          </b>{" "}
          No dudes en visitarnos y descubrir todo lo que tenemos para ofrecerte.
          Te esperamos con los brazos abiertos para que disfrutes de momentos
          inolvidables.
        </h1>
      </div>
      <Maps />
      <Footer />
    </div>
  );
}

export default Nosotros;
