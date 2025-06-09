import gymPhoto from "../assets/gym_1.jpg";
import React, { useState } from "react";
import { Gem } from "lucide-react";

function Kainos() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const subscriptions = [
    {
      name: "Easy Fit",
      price: "€29.99",
      duration: "1 Mėnesis",
      features: [
        "Neriboti apsilankymai",
        "Grupinės treniruotės",
        "Persirengimo spintelė",
        "Nemokama įvadinė treniruotė",
      ],
    },
    {
      name: "Pro Fit",
      price: "€79.99",
      duration: "3 Mėnesiai",
      features: [
        "Neriboti apsilankymai",
        "Grupinės treniruotės",
        "Persirengimo spintelė",
        "Nemokama įvadinė treniruotė",
        "Asmeninė treniruotė",
      ],
    },
    {
      name: "Premium Fit",
      price: "€149.99",
      duration: "6 Mėnesiai",
      features: [
        "Neriboti apsilankymai",
        "Grupinės treniruotės",
        "Persirengimo spintelė",
        "Nemokama įvadinė treniruotė",
        "Asmeninė treniruotė",
        "Mitybos planas",
        "Sutarties perrašymas",
        "Pirtis ir sauna",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={gymPhoto}
            alt="Gym background"
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
          <Gem className="text-white w-12 h-12 mb-4" />
          <h1 className="text-7xl font-bold mb-6 text-white tracking-wide drop-shadow-lg">
            KAINOS
          </h1>
          <span className="text-xl text-blue-100 mb-8 max-w-2xl">
            Pigiausios kainos tik pas mus
          </span>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span className="text-white font-semibold">Kainos</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <main className="container mx-auto px-4 mt-26 relative z-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-4xl font-bold text-gray-800 mb-8 block text-center">
            Mūsų prenumeratos planai
          </span>
          <p className="text-gray-600 text-center mb-12">
            Pasirinkite planą, kuris geriausiai atitinka jūsų poreikius ir
            pradėkite savo kelionę link geresnės fizinės būklės šiandien!
          </p>
          {/* Subscription Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptions.map((subscription, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {subscription.name}
                  </h2>
                  <div className="inline-block bg-blue-50 px-3 py-1 rounded-full">
                    <h3 className="text-lg font-semibold text-blue-600">
                      {subscription.duration}
                    </h3>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-blue-500">
                    {subscription.price}
                  </p>
                  <p className="text-gray-500 text-sm">per mėnesį</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {subscription.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-3 text-lg">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Contact Button */}
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedSubscription(subscription)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Pirkti dabar
                  </button>
                  <div className="flex gap-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Additional component */}
      {selectedSubscription && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedSubscription.name}
              </h3>
              <p className="text-blue-600 font-semibold">
                {selectedSubscription.duration}
              </p>
              <p className="text-blue-600 font-semibold">
                {selectedSubscription.price}
              </p>
            </div>
            <button
              onClick={() => setSelectedSubscription(null)}
              className="w-full py-3 bg-red-400 text-red-700 rounded-2xl hover:bg-red-300 transition-colors font-semibold"
            >
              Uždaryti
            </button>
            <button
              onClick={() =>
                window.open(
                  "http://localhost:5173/sign-up",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="w-full py-3 bg-green-400 text-green-700 rounded-2xl hover:bg-green-300 transition-colors font-semibold"
            >
              Pirkti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kainos;
