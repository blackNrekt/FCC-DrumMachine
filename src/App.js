import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './App.css';

const soundArr = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function App() {

  const[activeKey,setActiveKey] = useState("");

  return (
    <div className="App">
      <div id='drum-machine'> 
        <div id="display">                    
          {soundArr.map((clip) => (           
            <Pad key={clip.text} clip={clip} setActiveKey={setActiveKey} />           
          ))}            
            {activeKey!='' &&
              <div className="description">You pressed the {activeKey} button</div>
            }  
        </div>  
      </div>  
    </div>    
  );  
}

function Pad({clip,setActiveKey}) {  

  React.useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    } 
  };

  const playSound = ()=> {
    const audioTag = document.getElementById(clip.text);
    audioTag.play();
    setActiveKey(clip.text);
  }

  return(    
    <div onClick={playSound} className='drum-pad'id='{clip.KeyCode}'>
      <audio className='clip' id={clip.text} src={clip.src}/>
      {clip.text}
    </div>
  );
}

export default App;

