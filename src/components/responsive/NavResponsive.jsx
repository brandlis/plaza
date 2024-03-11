import { Link } from "react-router-dom";
import { navData } from "../../js/listData";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function NavResponsive() {
  return (
    <ul className="md:hidden absolute inset-x-14 top-[88px] bg-950 rounded-b-md">
      {navData &&
        navData.map((item, id) => (
          <li key={id} className=" py-1">
            <Link
              to={`/${item.route}`}
              className=" flex justify-center my-2 text-0 hover:opacity-80"
              reloadDocument="true"
            >
              {item.name}
            </Link>
          </li>
        ))}
      <div className="flex justify-center p-3 text-0 ">
        <button className="text-2xl px-2 hover:opacity-80">
          <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </button>
        <button className="text-2xl px-2 hover:opacity-80">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </button>
      </div>
    </ul>
  );
}

export default NavResponsive;
