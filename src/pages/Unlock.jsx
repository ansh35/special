import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { useMusic } from "../components/MusicPlayer";

export default function Unlock(){

  const [answer,setAnswer]=useState("");
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);

  const navigate=useNavigate();
  const { startMusic } = useMusic();

  const check=()=>{

    if(answer.toLowerCase()==="moti"){

      setSuccess(true);
      startMusic();

      // wait before entering story (important emotionally)
      setTimeout(()=>{
        navigate("/story");
      },2000);

    }else{
      setError(true);
      setTimeout(()=>setError(false),2000);
    }
  }

  return(
    <PageWrapper>

    <div className="h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-3xl mb-6">“I don’t do this for everyone .</h1>
      <p className="mb-10">This is only for you.</p>

      {/* Input with shake */}
      <motion.input
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)}
        placeholder="What do I call you?"
        className="border px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md outline-none"
        animate={error ? { x:[0,-8,8,-6,6,-3,3,0] } : {}}
        transition={{duration:0.4}}
      />

      <button
        onClick={check}
        className="mt-6 px-6 py-3 bg-pink-300 rounded-xl hover:bg-pink-400 transition"
      >
        Unlock
      </button>

      {/* Wrong answer message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:10}}
            className="text-pink-500 mt-4"
          >
            hmm… that doesn’t sound like you
          </motion.p>
        )}
      </AnimatePresence>

      {/* Success message */}
      <AnimatePresence>
        {success && (
          <motion.p
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0}}
            className="text-pink-600 mt-6 text-xl"
          >
            yeah… it’s you
          </motion.p>
        )}
      </AnimatePresence>

    </div>

    </PageWrapper>
  )
}
