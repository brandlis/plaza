import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navData } from "../js/listData";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logotype/logo.png";
import NavResponsive from "./responsive/NavResponsive";

function Header() {
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavBarHidden(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header
      className={`p-1 text-0 font-medium px-5 sm:px-7 sm:text-sm md:px-15 lg:px-20 z-10 w-full  ${
        isNavBarHidden
          ? " fixed text-900 bg-200 shadow-xl transform translate-y-5 -top-5 transition-all duration-500 py-1 "
          : " absolute"
      } `}
    >
      <nav
        className={`max-w-6xl mx-auto h-20 flex justify-between items-center px-2 sm:px-8 md:px-2 border-b-[1.5px] border-white ${
          isNavBarHidden ? "border-none" : ""
        } `}
      >
        <picture className="flex items-center text-balance">
          <Link
            to="/"
            className=" bg-gradient-to-br from-600 to-200 rounded-2xl "
          >
            <img src={Logo} alt="imagen" className="max-w-20" />
          </Link>
          <div className="pl-4">
            <p className="text-xs sm:text-xs md:text-xs indent-[2px] -mb-1 tracking-[3px]">
              Centro Comercial
            </p>
            <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold">
              Plaza Real
            </h1>
          </div>
        </picture>
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <HiOutlineX className="md:hidden flex text-2xl" />
          ) : (
            <HiOutlineMenu className="md:hidden flex text-2xl" />
          )}
        </button>
        {isMenuOpen && <NavResponsive />}
        <div className="md:flex hidden text-base">
          <ul className=" flex text-base">
            {navData &&
              navData.map((item, id) => (
                <li key={id} className="px-3 hover:opacity-80">
                  <Link to={`/${item.route}`} reloadDocument="true">
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
          <div className=" border-l-[1px] border-200 flex justify-center px-2">
            <button className="px-2 text-lg hover:opacity-80">
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </button>
            <button className="px-2 text-lg hover:opacity-80">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
