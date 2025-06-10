import React, { useState, useEffect } from "react";
import gymCarousell1 from "../assets/gym_carousell2.jpg";
import gymCarousell2 from "../assets/gym_carousell3.jpg";
import gymCarousell3 from "../assets/gym_carousell4.jpg";

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const slides = [gymCarousell1, gymCarousell2, gymCarousell3];

  const faqData = [
    {
      question: "Ar galima lankytis be sutarties?",
      answer:
        "Taip, siūlome vienkartinius apsilankymus už 15€ ir trumpalaikes narystes. Galite išbandyti mūsų sporto salę prieš apsispręsdami dėl ilgalaikės narystės.",
    },
    {
      question: "Ar yra nemokama įvadinė treniruotė?",
      answer:
        "Taip, kiekvienam naujam nariui suteikiame nemokamą įvadinę treniruotę su mūsų treneriu. Jis padės susipažinti su įranga ir sudaryti individualų treniruočių planą.",
    },
    {
      question: "Kokie sporto salės darbo laikai?",
      answer:
        "Dirbame kasdien: pirmadienį-penktadienį 6:00-23:00, šeštadienį-sekmadienį 8:00-22:00. Šventinėmis dienomis darbo laikai gali keistis.",
    },
    {
      question: "Ar galima užšaldyti narystę?",
      answer:
        "Taip, narystę galima užšaldyti iki 2 mėnesių per metus dėl sveikatos problemų ar kitų svarbių priežasčių. Reikalingas išankstinis pranešimas.",
    },
  ];

  const plans = [
    {
      name: "Easy Fit",
      price: "€29.99/mėn",
      color: "blue",
      features: [
        "Neriboti apsilankymai",
        "Grupinės treniruotės",
        "Šatynės ir dušai",
        "Nemokamas parkavimas",
      ],
      popular: false,
    },
    {
      name: "Pro Fit",
      price: "€79.99/3 mėn",
      color: "purple",
      features: [
        "Viskas iš Easy Fit",
        "2 asmeninės treniruotės",
        "Mitybos planas",
        "Fitneso įvertinimas",
      ],
      popular: true,
    },
    {
      name: "Premium Fit",
      price: "€149.99/6 mėn",
      color: "red",
      features: [
        "Viskas iš Pro Fit",
        "Pirtis ir sauna",
        "Sutarties perrašymas",
        "Masažo procedūros",
        "VIP zona",
      ],
      popular: false,
    },
  ];

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <main className="mb-32">
      {/* Slider Section */}
      <div className="relative overflow-hidden h-96 md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Gym slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
          <h1 className="text-3xl md:text-6xl font-bold text-white text-center mb-4">
            Sveiki atvykę į AlexGym
          </h1>
          <p className="text-lg md:text-xl text-gray-200 text-center mb-8">
            Sustiprėk · Pasisemk įkvėpimo · Pasiek savo tikslus
          </p>
          <a href="/sign-up">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
              Prisijunkite dabar
            </button>
          </a>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-white text-gray-800 text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Mūsų paslaugos</h2>
        <p className="text-lg max-w-2xl mx-auto px-4">
          „Alex's Gym" sporto salėje siūlome įvairias užsiėmimus, asmenines
          treniruotes ir moderniausią įrangą, skirtą padėti jums pasiekti savo
          fizinio pasirengimo tikslus.
        </p>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 text-gray-800 text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Apie mus</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Įkurtas įsitikinimu, kad kiekvienas nusipelno galimybę būti geriausiu
          savimi, „Alex's Gym" suteikia aplinką, kurioje aistra susitinka su
          rezultatais. Mūsų patyrę treneriai, moderni įranga ir palaikanti
          bendruomenė daro mus puikiu pasirinkimu visiems fitneso entuziastams.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Atsiliepimai</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Jonas",
              text: "Alex's Gym pakeitė mano gyvenimą! Treneriai nuostabūs, o atmosfera nepaprastai motyvuojanti.",
              rating: 5,
            },
            {
              name: "Rasa",
              text: "Dėka čia pritaikytų treniruočių programų savo fizinio pasirengimo tikslus pasiekiau greičiau nei bet kada anksčiau.",
              rating: 5,
            },
            {
              name: "Tomas",
              text: "Jauki aplinka, moderni įranga ir nuostabus personalas. Labai rekomenduoju!",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="italic text-gray-600 mb-4">"{testimonial.text}"</p>
              <h3 className="font-bold text-gray-800">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Plans Section */}
      <div className="bg-gray-50 text-gray-800 text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-8">Narystės planai</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl p-6 shadow-lg transition-all hover:shadow-xl ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populiariausias
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4 text-purple-600">
                {plan.price}
              </p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/kainos">
                <button className="w-full py-3 px-6 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all">
                  Pasirinkti planą
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white text-gray-800 py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Dažniausiai užduodami klausimai
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                <span className="text-gray-500 text-xl">
                  {expandedFAQ === index ? "−" : "+"}
                </span>
              </button>
              {expandedFAQ === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white py-16 px-4 mx-4 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Susisiekite su mumis
        </h2>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xl">✉</span>
            <span>info@alexgym.lt</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xl">📞</span>
            <span>+370 123 45678</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xl">📍</span>
            <span>Klaipėda, Lietuva</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
