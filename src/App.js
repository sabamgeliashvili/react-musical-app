import React, { useState } from 'react';
import './App.css';
import beat1 from './beat1.mp3';
import beat2 from './beat2.mp3';
import beat3 from './beat3.mp3';
import beat4 from './beat4.mp3';
import beat5 from './beat5.mp3';
import beat6 from './beat6.mp3';
import beat7 from './beat7.mp3';
import beat8 from './beat8.mp3';
import beat9 from './beat9.mp3';
import beat10 from './beat10.mp3';

function App() {
  let ourBeats = [
    beat1,
    beat2,
    beat3,
    beat4,
    beat5,
    beat6,
    beat7,
    beat8,
    beat9,
    beat10
  ];

  let [playingSounds, setPlayingSounds] = useState([]);

  function playSound(soundFilename) {
    let audio = new Audio(soundFilename);

    if (playingSounds.includes(soundFilename)) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingSounds(prevSounds => prevSounds.filter(sound => sound !== soundFilename));
    } else {
      audio.play();
      setPlayingSounds(prevSounds => [...prevSounds, soundFilename]);

      audio.addEventListener('ended', () => {
        setPlayingSounds(prevSounds => prevSounds.filter(sound => sound !== soundFilename));
      });
    }
  }

  function isSoundPlaying(soundFilename) {
    return playingSounds.includes(soundFilename);
  }

  return (
    <div className="App h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className='w-8/12 h-28 bg-gray-800 flex justify-around items-center rounded-md shadow-lg p-4'>
        {ourBeats.map(beat => (
          <button
            onClick={() => playSound(beat)}
            className={`w-16 h-16 bg-purple-700 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white font-bold rounded-full ${
              isSoundPlaying(beat) ? 'playing' : ''
            }`}
            key={beat}
          >
            {isSoundPlaying(beat) ? 'Playing' : 'Play'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
