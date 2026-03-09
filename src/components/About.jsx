import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-6">About</h2>
      <div className="text-gray-400 leading-relaxed max-w-3xl space-y-6">

        <p>
          For the last 15+ years I have worked on large scale software platforms —
          mainly in ecommerce and production systems.
        </p>

        <p>
          Today my focus is different.<br />
          I'm building AI automation systems and exploring how software
          production itself can evolve with AI.
        </p>

        <p>
          <a href="https://duxko.com" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline">Duxko</a> is part of that exploration.
        </p>

      </div>
    </motion.section>
  )
}
