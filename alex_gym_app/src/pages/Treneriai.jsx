import React, { useState } from "react";
import { Mail, Phone, Star, Award, Users, Calendar } from "lucide-react";
import Gym from "../assets/gym_2.jpg";
import Trainer from "../assets/DominykasWeb.png";
import Trainer2 from "../assets/Gerardas.jpg";
import Trainer3 from "../assets/Tomas.jpg";

function Treneriai() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      id: 1,
      name: "Dominykas Žilionis",
      image: Trainer,
      specialties: [
        "Asmeninis Treneris",
        "Atletinis rengimas",
        "Sveikatingumo treneris",
      ],
      quote:
        "Prižadu, jei atidžiai mano nuorodų ir patarimų klientas laikysis - jo norimi rezultatai bus pasiekti.",
      experience: "8+ metai",
      clientCount: "200+",
      rating: 4.9,
      certifications: ["ACSM-CPT", "NASM-PES", "Sveikatingumo specialistas"],
      email: "dominykas@gym.lt",
      phone: "+370 600 12345",
    },
    {
      id: 2,
      name: "Tomas Rainys",
      image: Trainer3,
      specialties: ["Asmeninis Treneris", "Kultūrizmas", "Atletinis rengimas"],
      quote: "Tik disciplina ir nuoseklus darbas pavers Tavo svajonę realybe!",
      experience: "6+ metai",
      clientCount: "150+",
      rating: 4.8,
      certifications: ["IFBB Pro Card", "NASM-CPT", "Nutritionist"],
      email: "tomas@gym.lt",
      phone: "+370 600 54321",
    },
    {
      id: 3,
      name: "Gerardas Chriščinavičius",
      image: Trainer2,
      specialties: ["Asmeninis Treneris", "Kultūrizmas"],
      quote: "Kada, jeigu ne šiandien?",
      experience: "5+ metai",
      clientCount: "120+",
      rating: 4.7,
      certifications: ["NASM-CPT", "Bodybuilding Specialist"],
      email: "gerardas@gym.lt",
      phone: "+370 600 98765",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Gym}
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
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
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-full">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-8xl font-black mb-4 text-white tracking-tight">
            TRENERIAI
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Profesionalūs treneriai, kurie padės jums pasiekti savo tikslus
          </p>
          <div className="flex items-center gap-3 text-blue-200 text-lg">
            <span className="hover:text-white transition-colors cursor-pointer">
              Titulinis
            </span>
            <span>/</span>
            <span className="text-white font-semibold">Treneriai</span>
          </div>
        </div>
      </div>

      {/* Trainers Section */}
      <main className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mūsų Ekspertų Komanda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kiekvienas mūsų treneris turi unikalų požiūrį ir patirtį, kad
              padėtų jums pasiekti maksimalius rezultatus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">
                      {trainer.rating}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {trainer.name}
                  </h3>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="w-4 h-4 text-blue-500 mr-1" />
                        <span className="text-sm text-gray-600">Patirtis</span>
                      </div>
                      <span className="font-bold text-gray-800">
                        {trainer.experience}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-gray-600">Klientai</span>
                      </div>
                      <span className="font-bold text-gray-800">
                        {trainer.clientCount}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 italic mb-6 text-center border-l-4 border-blue-200 pl-4">
                    "{trainer.quote}"
                  </blockquote>

                  {/* Certifications */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        Sertifikatai
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {trainer.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-md font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedTrainer(trainer)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Susisiekti
                    </button>
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${trainer.email}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        El. paštas
                      </a>
                      <a
                        href={`tel:${trainer.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border-2 border-green-200 text-green-600 rounded-xl hover:bg-green-50 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Skambinti
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Contacts */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <img
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedTrainer.name}
              </h3>
              <p className="text-blue-600 font-semibold">
                {selectedTrainer.specialties.join(", ")}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${selectedTrainer.email}`}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-800">El. paštas</div>
                  <div className="text-blue-600">{selectedTrainer.email}</div>
                </div>
              </a>
              <a
                href={`tel:${selectedTrainer.phone}`}
                className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-800">Telefonas</div>
                  <div className="text-green-600">{selectedTrainer.phone}</div>
                </div>
              </a>
            </div>

            <button
              onClick={() => setSelectedTrainer(null)}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors font-semibold"
            >
              Uždaryti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Treneriai;
