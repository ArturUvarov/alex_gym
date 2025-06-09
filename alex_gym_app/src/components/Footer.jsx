import Logo from "../assets/alexlogo.png";
import { HiOutlinePhone } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-24 bottom-0 w-full fixed">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Gym Logo" className="h-16 mb-4" />
            <p className="text-gray-400 text-sm">Sporto klubas Klaipėdoje</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Kontaktai</h3>
            <span className="hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 mb-2">
              <HiOutlinePhone />
              (+370-674) 35989
            </span>
            <span
              className="hover:text-blue-500 transition-colors duration-200 flex items-center gap-2"
              typeof="email"
              href="mailto:info@alexgym.lt"
            >
              <FaRegEnvelope />
              info@alexgym.lt
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Nuorodos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Apie Mus
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Paslaugos
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Tvarkaraštis
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Kontaktai
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Atsiliepimai</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Palikite savo atsiliepimą apie mus
            </p>
            <button className="bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
              <span className="font-medium">RAŠYTI ATSILIEPIMĄ</span>
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <span className="block text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alex Gym. Visos teisės saugomos.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
