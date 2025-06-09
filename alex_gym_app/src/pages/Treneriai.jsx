import React from "react";
import Gym from "../assets/gym_2.jpg";
import Trainer from "../assets/DominykasWeb.png";
import Trainer2 from "../assets/Gerardas.jpg";
import Trainer3 from "../assets/Tomas.jpg";

function Treneriai() {
  return (
    <div className="min-h-screen bg-gray-100">
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
            TRENERIAI
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span>Paslaugos</span>
            <span>/</span>
            <span className="text-white">Treneriai</span>
          </div>
        </div>
      </div>

      {/* Trainers Section */}
      <main className="container mx-auto px-4 -mt-16 relative z-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Trainer Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={Trainer}
                  alt="Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Dominykas Žilionis
              </h2>
              <p className="text-blue-500 font-semibold mb-4">
                Asmeninis Treneris,Atletinis rengimas, Sveikatingumo
                treneris(fizinio aktyvumo specialistas)
              </p>
              <p className="text-gray-600 mb-4">
                "Prižadu, jei atidžiai mano nuorodų ir patarimų klientas
                laikysis - jo norimi rezultatai bus pasiekti."
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Susisiekti
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={Trainer3}
                  alt="Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Tomas Rainys
              </h2>
              <p className="text-blue-500 font-semibold mb-4">
                Asmeninis Treneris,Kultūrizmas,Atletinis rengimas
              </p>
              <p className="text-gray-600 mb-4">
                "Tik disciplina ir nuoseklus darbas pavers Tavo svajonę
                realybe!"
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Susisiekti
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={Trainer2}
                  alt="Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Gerardas Chriščinavičius
              </h2>
              <p className="text-blue-500 font-semibold mb-4">
                Asmeninis Treneris,Kultūrizmas
              </p>
              <p className="text-gray-600 mb-4">"Kada, jeigu ne šiandien?"</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Susisiekti
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Treneriai;
