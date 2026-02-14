import { useEffect, useState } from "react";

export default function BackgroundGlow(){

  const [pos,setPos] = useState({x:0,y:0});

  useEffect(()=>{

    const move = (e)=>{
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove",move);

    return ()=>window.removeEventListener("mousemove",move);

  },[]);

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-all duration-200"
      style={{
        background: `radial-gradient(
          600px at ${pos.x}px ${pos.y}px,
          rgba(255,182,193,0.25),
          transparent 60%
        )`
      }}
    />
  );
}
