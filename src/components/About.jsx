import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen supports-[height:100svh]:min-h-[100svh] max-w-6xl mx-auto px-6 py-32 scroll-mt-32"
    >
      <h2 className="text-4xl font-bold mb-6">About</h2>
      <div className="text-gray-400 leading-relaxed max-w-3xl space-y-6">

        <p>
          For the last 15+ years I have worked on large-scale software platforms —
          mainly in ecommerce and production systems.
        </p>

        <p>
          Today, I’m building <a href="https://foloon.com" target="_blank" rel="noopener noreferrer" className="text-[#4FCBC4] hover:underline">Foloon</a>, an AI shopping assistant for ecommerce.
        </p>

        <p>
          My focus is on building AI systems that can understand customers, products,
          and intent — and turn that understanding into better shopping experiences.
        </p>

        <p>
          <a href="https://duxko.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Duxko</a> remains an ongoing venture exploring how AI can transform software production.
        </p>

      </div>
    </motion.section>
  )
}
