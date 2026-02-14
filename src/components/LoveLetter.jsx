import { motion } from "framer-motion";
import { useState } from "react";

export default function LoveLetter(){

  const [open,setOpen]=useState(false);

  return(
    <div className="flex justify-center items-center min-h-screen">

      <motion.div
        className="relative w-[340px] h-[240px] cursor-pointer"
        onClick={()=>setOpen(true)}
      >

        {/* envelope body */}
        <div className="absolute inset-0 bg-pink-200 rounded-xl shadow-xl"/>

        {/* flap */}
        <motion.div
          animate={open ? { rotateX:180 } : { rotateX:0 }}
          transition={{ duration:1 }}
          className="absolute top-0 w-full h-1/2 bg-pink-300 origin-top rounded-t-xl"
          style={{ transformStyle:"preserve-3d" }}
        />

        {/* heart seal */}
        {!open && (
          <div className="absolute inset-0 flex items-center justify-center text-3xl text-pink-600">
            ❤
          </div>
        )}

        {/* letter paper */}
        <motion.div
          initial={{ y:40, opacity:0 }}
          animate={open ? { y:-150, opacity:1 } : {}}
          transition={{ delay:0.8, duration:1 }}
          className="absolute left-4 right-4 bg-white rounded-lg p-6 shadow-md text-center leading-relaxed text-[#5b2b38]"
        >
          <p>I tried to act childish around you.</p>

            <p>
              But the truth is — I notice everything.
              When you disappear for a while.
              When your tone changes.
              When you're quieter than usual.
            </p>

            <p>
              I don’t know how to explain it,
              but it’s like I can feel you.
            </p>

            <p>
              You somehow became part of my routine
              without asking permission.
            </p>

            <p>
              Not loudly. Not dramatically.
              Just deeply.
            </p>

            <p>
              Today I’m not hiding behind jokes anymore.
              You’ve seen my worst moods,
              yet you stayed.
            </p>

            <p>
              I don’t say feelings easily.
              But you matter to me —
              more than my ego,
              more than my silence.
            </p>

            <p className="font-semibold text-lg">
              I like having you in my life.
              And I don’t want to lose that.
            </p>

            <p className="text-pink-600 text-xl">I love you.</p>

            <p className="text-right font-semibold mt-6">
              — Happy Valentine’s Day ❤
            </p>

          <p>
          <span className="text-2xl text-pink-600">❤</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  )
}
