import Gym from "../assets/gym.jpg";

function Kainos() {
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
            className="h-[150px] fill-gray-100"
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
            KAINOS
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span className="text-white">Kainos</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <main className="container mx-auto px-4 mt-1 relative z-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Easy Fit Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Easy Fit
              </h2>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                1 Mėnesis
              </h3>
              <p className="text-4xl font-bold text-blue-500 mb-4">€29.99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Neriboti apsilankymai
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Grupinės treniruotės
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Persirengimo spintelė
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Nemokama įvadinė treniruotė
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Pirkti
              </button>
            </div>

            {/* Pro Fit Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Pro Fit</h2>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                3 Mėnesiai
              </h3>
              <p className="text-4xl font-bold text-blue-500 mb-4">€79.99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Neriboti apsilankymai
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Grupinės treniruotės
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Persirengimo spintelė
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Nemokama įvadinė treniruotė
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Asmeninė treniruotė
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Pirkti
              </button>
            </div>

            {/* Premium Fit Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Premium Fit
              </h2>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                6 Mėnesiai
              </h3>
              <p className="text-4xl font-bold text-blue-500 mb-4">€149.99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Neriboti apsilankymai
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Grupinės treniruotės
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Persirengimo spintelė
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Nemokama įvadinė treniruotė
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Asmeninė treniruotė
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mitybos planas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Sutarties perrašymas kitam asmeniui
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Pirtis ir sauna
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Pirkti
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Kainos;
