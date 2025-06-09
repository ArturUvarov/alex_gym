import Gym from "../assets/gym_3.jpg";
import Values from "../assets/values.png";

function Apie() {
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
            Apie mus
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/ apie</span>
          </div>
        </div>
      </div>

      {/* Apie Section */}
      <main className="container mx-auto px-4 mt-42 relative z-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                MŪSŲ MISIJA
              </h2>
              <p className="text-gray-600">
                Kurti visą parą veikiančius, modernius, naujausias sporto
                inovacijas ir tendencijas įprasminančius sporto klubus
                kokybiškoms klientų patirtims už patrauklią kainą.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">VIZIJA</h2>
              <p className="text-gray-600">
                Tapti sveiko gyvenimo būdo ambasadoriais, šviečiančiais apie
                judėjimo naudą įvairaus amžiaus žmones, kuriančiais inovatyvias
                sporto erdves patogias kiekvienam.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                VERTYBĖS
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded">
                  <h3 className="font-bold text-blue-800">Inovacijos</h3>
                  <p className="text-gray-600 text-sm">
                    Nuolat tobulėjame ir diegiame naujoves
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h3 className="font-bold text-blue-800">Kokybė</h3>
                  <p className="text-gray-600 text-sm">
                    Užtikriname aukščiausią paslaugų kokybę
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h3 className="font-bold text-blue-800">Bendruomeniškumas</h3>
                  <p className="text-gray-600 text-sm">
                    Kuriame stiprią sporto bendruomenę
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h3 className="font-bold text-blue-800">Profesionalumas</h3>
                  <p className="text-gray-600 text-sm">
                    Dirbame su patyrusiais specialistais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Apie;
