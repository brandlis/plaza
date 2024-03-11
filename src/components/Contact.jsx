import { FaFacebook, FaInstagram } from "react-icons/fa";
import BackgroundImage from "../assets/pictures/inicioplaza5.jpg";

function Contact() {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex flex-col min-h-screen bg-950/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-0 lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-bold capitalize lg:text-3xl">
                Contáctanos
              </h1>
              <p className="max-w-xl mt-6 text-justify">
                ¡Conéctate con nosotros! Estamos aquí para ayudarte. ¿Preguntas,
                comentarios o sugerencias? ¡Contáctanos ahora y hagamos que las
                cosas sucedan juntos!
              </p>
              <div className="mt-6 md:mt-8">
                <h3 className="text-0 font-semibold text-lg">Síguenos</h3>
                <div className="flex mt-4 -mx-1.5">
                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-300"
                    href="https://web.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="w-8 h-8 fill-current" />
                  </a>
                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-500"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto md:max-w-xl lg:w-screen lg:max-w-xl backdrop-blur-md">
                  <p className="mt-1 text-0">
                    ¡Contáctanos y pregúntanos todo lo que desees! Estamos aquí
                    para escucharte.
                  </p>
                  <form className="mt-6 text-0">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        placeholder="Juan Díaz"
                        className="block w-full px-5 py-3 mt-2 text-950 font-semibold bg-0 border border-300 rounded-md focus:border-400 focus:ring-400 focus:ring-opacity-35 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        placeholder="juandiaz@example.com"
                        className="block w-full px-5 py-3 mt-2 text-950 font-semibold bg-0 border border-300 rounded-md focus:border-400 focus:ring-400 focus:ring-opacity-35 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm">Mensaje</label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-950 font-semibold bg-0 border border-300 rounded-md md:h-48 focus:border-400 focus:ring-400 focus:ring-opacity-35 focus:outline-none focus:ring"
                        placeholder="Déjanos tus comentarios aquí."
                      ></textarea>
                    </div>
                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-widest capitalize transition-colors duration-700 transform bg-gradient-to-t to-300 from-400 rounded-md hover:to-200 hover:from-500 focus:outline-none focus:ring focus:ring-300 focus:ring-opacity-15">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
