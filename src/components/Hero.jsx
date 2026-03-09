import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen supports-[height:100svh]:min-h-[100svh] flex flex-col justify-center items-center text-center px-6 pt-40">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold tracking-tight"
      >
        AI Automation Engineer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-xl text-gray-400 max-w-xl"
      >
        15+ years building large-scale software systems,
        <br />
        now focused on AI agents and automation platforms.
      </motion.p>

      <motion.a
        href="#about"
        whileHover={{ y: 4 }}
        className="flex flex-col items-center gap-2 mt-6 opacity-80 hover:opacity-100"
>
        <span>Learn more</span>
        <span>↓</span>
      </motion.a>
    </section>
  )
}
