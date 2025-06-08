import Gym from "../assets/gym.jpg";

import exercise1 from "../assets/exercise1.png";
import exercise2 from "../assets/exercise2.png";
import exercise3 from "../assets/exercise3.jpg";
import exercise4 from "../assets/exercise4.jpg";

function card(img, title) {
  return (
    <div className="relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <button><img src={img} className="w-full h-48 object-cover" /></button>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-sm">Intensyvumas: {Math.round(1 + Math.random() * 2)} iš 3</p>
      </div>
    </div>
  );
};

function GrupinesTreniruotes() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Gym}
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
        </div>

        {/* Wave SVG */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 2400 200"
            className="w-full h-[129px] fill-gray-100"
          >
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
            GRUPINĖS TRENIRUOTĖS
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span className="text-white">Paslaugos</span>
            <span>/</span>
            <span className="text-white">Grupinės treniruotės</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <main className="container mx-auto px-4 mt-1 relative z-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Cards */}
            {card(exercise1, 'SPORTAS')}
            {card(exercise2, 'SPORTAS')}
            {card(exercise3, 'SPORTAS')}
            {card(exercise4, 'SPORTAS')}
            {card(exercise3, 'SPORTAS')}
            {card(exercise1, 'SPORTAS')}
            {card(exercise4, 'SPORTAS')}
            {card(exercise2, 'SPORTAS')}
          </div>
        </div>
      </main>
    </div>
  );
}

export default GrupinesTreniruotes;
