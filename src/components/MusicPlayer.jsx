import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

export function MusicProvider({children}){

  const audioRef = useRef(null);
  const [started,setStarted] = useState(false);

  const startMusic = ()=>{
  if(started) return;

  const audio = audioRef.current;
  if(!audio) return;

  audio.volume = 0;
  audio.play();

  let vol = 0;

  const fade = setInterval(()=>{
    vol += 0.02;            
    audio.volume = Math.min(vol, 0.35);

    if(vol >= 0.35){
      clearInterval(fade);
    }
  }, 120);                  

  setStarted(true);
};

  return(
    <MusicContext.Provider value={{startMusic}}>
      {children}
      <audio ref={audioRef} loop preload="auto" playsInline>
  <source src="/music.mp3" type="audio/mpeg"/>
</audio>


    </MusicContext.Provider>
  );
}

export const useMusic = ()=>useContext(MusicContext);
