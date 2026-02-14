import { useEffect, useState } from "react";

export default function TypingText({text, speed=40}) {
  const [display,setDisplay]=useState("");

  useEffect(()=>{
    let i=0;
    const interval=setInterval(()=>{
      setDisplay(text.slice(0,i));
      i++;
      if(i>text.length) clearInterval(interval);
    },speed);
    return ()=>clearInterval(interval);
  },[text]);

  return <p className="text-2xl text-center mt-20">{display}</p>;
}
