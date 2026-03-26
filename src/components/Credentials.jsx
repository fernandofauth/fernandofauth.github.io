import { motion } from "framer-motion"
import { ArrowUpRight, BadgeCheck } from "lucide-react"

const credentials = [
  {
    name: "CS50 Harvard (Python)",
    href: "https://certificates.cs50.io/1a347a31-61f6-404b-8be9-b903ac6ac96d.pdf?size=letter",
    primary: true,
    description:
      "Applied Python programming for problem solving, automation, and system-level thinking.",
  },
  {
    name: "Agent Skills",
    href: "https://verify.skilljar.com/c/gqgwx7sy6ofk",
    primary: true,
    description:
      "Creating reusable AI skills that apply the right instructions automatically across workflows.",
  },
  {
    name: "Subagents",
    href: "https://verify.skilljar.com/c/e552a5jekmrn",
    primary: true,
    description:
      "Using subagents to manage context, delegate tasks, and structure complex workflows.",
  },
  {
    name: "Model Context Protocol",
    href: "https://verify.skilljar.com/c/8vb5vqb9skrp",
    primary: true,
    description:
      "Standardizing context and tool integration across AI systems.",
  },
  {
    name: "MCP — Advanced",
    href: "https://verify.skilljar.com/c/apqd2nne64w9",
    primary: true,
    description: "Designing production-grade MCP systems with advanced patterns and communication layers.",
  },
  {
    name: "Claude API",
    href: "https://verify.skilljar.com/c/e33xkx2dpiia",
    primary: true,
    description:
      "Building production-ready AI workflows with external integrations.",
  },
  {
    name: "Claude Cowork",
    href: "https://verify.skilljar.com/c/rtyi2wcqosmy",
  },
  {
    name: "Claude Code in Action",
    href: "https://verify.skilljar.com/c/j4zv9fzcru7r",
  },
  {
    name: "Claude 101",
    href: "https://verify.skilljar.com/c/etmhxg9axp7y",
  },
  {
    name: "AI Fluency — Framework & Foundations",
    href: "https://verify.skilljar.com/c/mbi2ysxz4duy",
  },
  {
    name: "AI Fluency — Educators",
    href: "https://verify.skilljar.com/c/6un2f24ztqup",
  },
  {
    name: "AI Fluency — Students",
    href: "https://verify.skilljar.com/c/7h72y7ioz9fp",
  },
]

const featuredCredentials = credentials.slice(0, 6)
const additionalCredentials = credentials.slice(6)

export default function Credentials() {
  return (
    <motion.section
      id="credentials"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen supports-[height:100svh]:min-h-[100svh] max-w-6xl mx-auto px-6 py-28 scroll-mt-32"
    >
      <div className="mb-10 md:mb-12 max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-indigo-200">
          Selected certifications
        </span>
        <h2
          data-section-anchor
          className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
        >
          Credentials
        </h2>

        <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
          Focused work around AI systems, agents, MCP, and real-world workflows.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredCredentials.map(({ name, href, description }, index) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-slate-950/50 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-300/45 hover:bg-slate-900/70"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_52%)]" />

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-white transition group-hover:text-indigo-100">
                    {name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {description}
                  </p>
                </div>

                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-200">
                  <BadgeCheck className="h-5 w-5" />
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-300 transition group-hover:text-white">
                <span>View credential</span>
                <ArrowUpRight className="h-4 w-4 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {additionalCredentials.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-left transition duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-200 transition group-hover:text-white" title={name}>
                  {name}
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-200" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}