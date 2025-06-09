import Logo from "../assets/alexlogo.png";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Nav() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-11/12 mt-4 rounded-xl shadow-2xl z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-16 w-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
          <ul className="flex space-x-8 font-medium">
            <li>
              <a
                href="/kainos"
                className="text-gray-200 hover:text-blue-400 flex items-center gap-2 transition-colors duration-200"
              >
                <BsCart3 size={20} />
                <span>KAINOS</span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="/services"
                className="text-gray-200 hover:text-blue-400 flex items-center gap-2 transition-colors duration-200"
              >
                PASLAUGOS
              </a>
              <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 mt-4 w-56 bg-white rounded-lg shadow-xl transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-1">
                <ul className="py-2">
                  <li>
                    <a
                      href="/services/group"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      GRUPINĖS TRENIRUOTĖS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/trainers"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      TRENERIAI
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/schedule" className="text-gray-200 hover:text-blue-400">
                TVARKARAŠTIS
              </a>
            </li>
            <li className="relative group">
              <a
                href="/services"
                className="text-gray-200 hover:text-blue-400 flex items-center gap-2 peer"
              >
                APIE MUS
              </a>
              <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 mt-2 w-51 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <ul className="py-2">
                  <li>
                    <a
                      href="/services/alexgym"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      APIE ALEXGYM
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/clubs"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      KLUBAI
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/rules"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      TAISYKLĖS
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <a
                href="/"
                className="text-gray-200 hover:text-blue-400 flex items-center gap-2 peer underline decoration-blue-500 decoration-2"
              >
                KLUBAI
                <IoIosArrowDown />
              </a>
              <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 mt-2 w-80 p-5 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <ul className="py-2">
                  <li>
                    <h1 className="">KLAIPEDA</h1>
                    <a
                      href="https://www.google.com/maps/place/K+GYM/@55.6637361,21.1923534,17z/data=!3m1!4b1!4m6!3m5!1s0x46e4dd0074311485:0x6106312e1e58b2d8!8m2!3d55.6637361!4d21.1923534!16s%2Fg%2F1pzsb0hh2?hl=ru&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      Laukininkų g. 19
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="flex items-center space-x-6">
            <a href="/sign-up">
              <button className="bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                <IoPersonOutline className="text-lg" />
                <span className="font-medium">PRISIJUNGTI</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
