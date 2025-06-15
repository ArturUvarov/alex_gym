import gymPic from '../assets/gym_6.jpg';
import { Clock } from 'lucide-react';

const days = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'];
const times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

const workouts = [
  { day: 0, time: '16:00 - 17:00', name: 'Workout', trainer: 'Trainer' },
  { day: 1, time: '09:20 - 10:00', name: 'Workout', trainer: 'Trainer' },
  { day: 2, time: '10:30 - 11:30', name: 'Workout', trainer: 'Trainer' },
  { day: 5, time: '14:00 - 15:00', name: 'Workout', trainer: 'Trainer' },
  { day: 4, time: '20:00 - 20:45', name: 'Workout', trainer: 'Trainer' },
];

export default function Schedule() {
  return (
    <>
       <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={gymPic}
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
          <Clock className="w-24 h-24 mb-2.5" color="white" />
          <h1 className="text-7xl font-bold mb-6 text-white tracking-wide">
            TVARKARAŠTIS
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <span>Titulinis</span>
            <span>/</span>
            <span className="text-white font-bold">Tvarkaraštis</span>
          </div>
        </div>
      </div>

      <div className='m-12 p-1 shadow-2xl rounded-lg grid grid-cols-[75px_auto_repeat(6,auto)]'>
        <div className='bg-gray-200 rounded-lg m-1'></div>
        {
          days.map(day => (
            <div className='bg-gray-200 rounded-lg text-shadow-lg m-1 p-3 text-center'>{day}</div>
          ))
        }
        {
          times.map((time, row) => (
            <>
              <div className='bg-gray-200 rounded-lg text-shadow-lg m-1 p-3 text-center'>{time}</div>
              {
                days.map((_, col) => {
                  const workout = workouts.find(
                    w => {
                      const initialTime = w.time.split(':')[0];
                      
                      return w.day === col && initialTime - initialTime % 2 === parseInt(time.split(':')[0]);
                    }
                  );

                  return (
                    <div key={`${row}-${col}`} className='bg-gray-100 rounded-lg m-1 text-center'>
                      {
                        workout ? (
                          <div className='flex items-center justify-center relative bg-black text-white rounded-lg w-full h-full group'>
                            {workout.name}

                            <div className='border-2 border-blue-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-lg w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-1'>
                              <div className='text-xl'>{workout.name}</div>
                              <div className='text-xl text-blue-500 mb-3'>{workout.time}</div>

                              <div>{workout.trainer}</div>
                              <div className='border border-gray-400 my-3'></div>
                              <button className='bg-blue-500 py-2 rounded-lg w-full' onClick={() => window.open('http://localhost:5173/sign-up')}>REGISTRUOTIS</button>
                            </div>
                          </div>
                        ) : <div className='flex items-center justify-center h-full text-gray-400'>-</div>
                      }
                    </div>
                  );
                })
              }
            </>
          ))
        }
      </div>
    </>
  );
};