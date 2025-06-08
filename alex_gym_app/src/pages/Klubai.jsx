import Gym from "../assets/gym_4.jpg";
import Back from "../assets/gym_5.jpg";

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
          <svg viewBox="0 0 2400 200" className="w-full h-[150px] fill-white">
            <path
              d="M0,100 
                 C400,150 800,50 1200,100 
                 C1600,150 2000,50 2400,100 
                 L2400,200 
                 L0,200 
                 Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold mb-6 text-white tracking-wide">
            KLUBAI
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span className="text-white">Klubai</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen mt-[-250px]">
        <h1 className="text-6xl font-bold mb-4 uppercase">Klaipėda</h1>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          <img
            src={Gym}
            alt="Alexgym"
            className="w-200 h-160 object-cover rounded-3xl shadow-lg"
          />
          <span className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
            Laukininkų g. 19
          </span>
        </div>
      </div>
    </>
  );
}

export default Klubai;
