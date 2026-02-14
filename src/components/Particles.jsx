import { useEffect, useState } from "react";

export default function Particles(){

  const [particles,setParticles] = useState([]);

  useEffect(()=>{

    const arr = Array.from({length:35}).map(()=>({
      x: Math.random()*100,
      y: Math.random()*100,
      size: Math.random()*8+3,
      duration: Math.random()*25+25,
      delay: Math.random()*-30
    }));

    setParticles(arr);

  },[]);

  return(
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {particles.map((p,i)=>(
        <span
          key={i}
          className="particle"
          style={{
            left:p.x+"%",
            top:p.y+"%",
            width:p.size+"px",
            height:p.size+"px",
            animationDuration:p.duration+"s",
            animationDelay:p.delay+"s"
          }}
        />
      ))}

    </div>
  );
}
