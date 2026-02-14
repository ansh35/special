import { motion } from "framer-motion";

function Flower({ delay }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay }}
      className="flex flex-col items-center"
    >
      {/* petals */}
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-pink-300 rounded-full" />
        <div className="absolute w-4 h-4 bg-pink-400 rounded-full top-0 left-2" />
        <div className="absolute w-4 h-4 bg-pink-400 rounded-full bottom-0 left-2" />
        <div className="absolute w-4 h-4 bg-pink-400 rounded-full left-0 top-2" />
        <div className="absolute w-4 h-4 bg-pink-400 rounded-full right-0 top-2" />
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-3 left-3" />
      </div>

      {/* stem */}
      <div className="w-1 h-20 bg-green-400 rounded-full mt-1" />
    </motion.div>
  );
}

export default function FlowerBouquet() {
  return (
    <div className="flex justify-center gap-6 mt-16">
      <Flower delay={0.2} />
      <Flower delay={0.5} />
      <Flower delay={0.8} />
    </div>
  );
}
