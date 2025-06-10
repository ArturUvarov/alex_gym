import Gym from "../assets/gym_4.jpg";
import Back from "../assets/gym_5.jpg";
import { House } from "lucide-react";
function Klubai() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Back}
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
        </div>

        {/* Wave SVG */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 2400 200"
            className="w-full h-[140px]"
            shapeRendering="geometricPrecision"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: "#f8fafc" }} />
                <stop offset="100%" style={{ stopColor: "#eff6ff" }} />
              </linearGradient>
            </defs>

            <path
              fill="url(#waveGradient)"
              d="
               M0,160
                C200,120 400,120 600,160
                C800,200 1000,200 1200,160
                C1400,120 1600,120 1800,160
                C2000,200 2200,200 2400,160
                L2400,200
                L0,200
                Z
              "
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <House className="w-24 h-24 mb-2.5" color="white" />
          <h1 className="text-7xl font-bold mb-6 text-white tracking-wide">
            KLUBAI
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span className="text-white font-bold">Klubai</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
        <h2 className="text-5xl font-bold mb-8 uppercase">Klaipėda</h2>
        <div className="relative w-full max-w-2xl mb-8">
          <img
            src={Gym}
            alt="Alexgym"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"></div>
          <span className="absolute bottom-6 left-6 text-3xl text-white font-bold drop-shadow-lg">
            Laukininkų g. 19
          </span>
        </div>
        <div className="text-center max-w-xl">
          <p className="text-lg mb-4">
            Moderni sporto salė Klaipėdoje su naujausia įranga, patyrusiais
            treneriais ir jaukia atmosfera.
          </p>
          <p className="text-gray-600 mb-2">
            Darbo laikas: I-V 7:00-22:00, VI-VII 9:00-20:00
          </p>
          <a
            href="tel:(+370-674) 35989"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Skambinti klubui
          </a>
        </div>
      </div>
    </>
  );
}

export default Klubai;
