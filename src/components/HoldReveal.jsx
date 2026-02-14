import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HoldReveal({hiddenText}) {

  const [progress,setProgress] = useState(0);
  const [holding,setHolding] = useState(false);
  const [revealed,setRevealed] = useState(false);

  useEffect(()=>{
    let timer;

    if(holding && progress < 100){
      timer = setInterval(()=>{
        setProgress(p=>p+2);
      },40);
    }

    if(progress >= 100){
      setRevealed(true);
    }

    return ()=>clearInterval(timer);
  },[holding,progress]);

  return (
    <div className="flex flex-col items-center mt-40">

      {!revealed && (
        <>
          <p className="mb-6 text-lg opacity-70">
            hold gently
          </p>

          <motion.div
            onMouseDown={()=>setHolding(true)}
            onMouseUp={()=>setHolding(false)}
            onMouseLeave={()=>setHolding(false)}
            onTouchStart={()=>setHolding(true)}
            onTouchEnd={()=>setHolding(false)}
            className="w-72 h-72 rounded-2xl bg-pink-200 flex items-center justify-center select-none cursor-pointer"
          >
            <div className="w-60 h-4 bg-white/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-pink-400"
                style={{width: progress + "%"}}
              />
            </div>
          </motion.div>
        </>
      )}

      {revealed && (
        <motion.p
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          className="text-2xl text-center max-w-xl mt-10"
        >
          {hiddenText}
        </motion.p>
      )}

    </div>
  );
}
