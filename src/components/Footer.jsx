import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/logotype/logo.png";

function Footer() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <footer
      className="bg-200"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ clipPath: "circle(100% at 49% 80%)" }}
    >
      <div className="py-12 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" reloadDocument="true">
              <img src={Logo} alt="imagen" className="max-w-24 mb-4" />
            </Link>
            <p className="text-950 text-[15px] text-balance">
              Descubre la comodidad en nuestro edificio ubicado en la ciudad de
              Neiva, Huila. Vive la experiencia única de la vida urbana en un
              ambiente moderno y sofisticado. ¡Contáctanos ahora para más
              información!
            </p>
          </div>
          <div className=" capitalize">
            <h4 className="text-lg font-semibold mb-6">Navegacion</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-500 text-[15px]"
                  reloadDocument="true"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="hover:text-500 text-[15px]"
                  reloadDocument="true"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/copropiedad"
                  className=" hover:text-500 text-[15px]"
                  reloadDocument="true"
                >
                  Copropietarios
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-500 text-[15px]"
                  reloadDocument="true"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Sigenos</h4>
            <ul className="flex space-x-5">
              <li>
                <a
                  href="https://web.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-500 sm:text-2xl text-xl"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:text-500 sm:text-2xl text-xl"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white capitalize">
              Contactos
            </h4>
            <div className="space-y-4">
              <p className="text-[15px]">Carrera 5 n° 10 - 49</p>
              <p className="text-[15px]">ccplazareal@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 bg-200">
        <p className="text-[15px]">
          © 2024{" "}
          <Link className=" border-b-[1px]" to="/inicio">
            Plaza Real
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
