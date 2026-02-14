import { motion } from "framer-motion";

export default function FadeText({ children, delay = 0 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.4, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-80px" }}
      className="
        font-romantic
        text-[22px] md:text-[26px]
        text-[#6b3a4a]/90
        tracking-wide
        leading-loose
        max-w-2xl
        mx-auto
        my-28
        px-6
      "
    >
      {children}
    </motion.p>
  );
}
