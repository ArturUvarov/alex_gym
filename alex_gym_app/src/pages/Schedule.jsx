const days = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'];
const times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

const workouts = [
  { onDay: 0, onTime: 5, name: 'Workout', time: '00:00 - 00:00', trainer: 'Trainer' },
  { onDay: 1, onTime: 6, name: 'Workout', time: '00:00 - 00:00', trainer: 'Trainer' },
  { onDay: 2, onTime: 4, name: 'Workout', time: '00:00 - 00:00', trainer: 'Trainer' },
  { onDay: 3, onTime: 5, name: 'Workout', time: '00:00 - 00:00', trainer: 'Trainer' },
  { onDay: 6, onTime: 3, name: 'Workout', time: '00:00 - 00:00', trainer: 'Trainer' },
];

export default function Schedule() {
  return (
    <>
      <div className='my-50'>TEMPORARY: top section here</div>

        <div className='m-12 p-1 shadow-2xl rounded-lg grid grid-cols-[auto_repeat(7,auto)]'>
          <div></div>
          {
            days.map(day => (
              <div className='text-shadow-lg p-3 text-center'>{day}</div>
            ))
          }
          {
            times.map((time, row) => (
              <>
                <div className='text-shadow-lg p-3 text-center'>{time}</div>
                {
                  days.map((_, col) => {
                    const workout = workouts.find(w => w.onDay === col && w.onTime === row);

                    return (
                      <div key={`${row}-${col}`} className='bg-gray-100 rounded-lg m-1 text-center'>
                        {
                          workout ? (
                            <div className='relative bg-black text-white rounded-lg w-full h-full text-sm group'>
                              {workout.name}
                              <div className='border-2 border-blue-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-lg w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-1'>
                                <div className='text-xl'>{workout.name}</div>
                                <div className='text-xl text-blue-500 mb-3'>{workout.time}</div>
                                <div>{workout.trainer}</div>
                                <div className='border border-gray-400 my-3'></div>
                                <button className='bg-blue-500 py-2 rounded-lg w-full'>REGISTRUOTIS</button>
                              </div>
                            </div>
                          ) : <div className='text-gray-400'>-</div>
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