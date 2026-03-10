import { Bot, Workflow, Sparkles } from "lucide-react"

export default function AiSolutions() {

  const automations = [
    {
      icon: Bot,
      title: "AI Support Agent",
      description:
        "AI-powered support agent that answers customer questions, triages requests, and resolves common issues automatically."
    },
    {
      icon: Workflow,
      title: "AI Operations Automation",
      description:
        "Automation agents that execute operational workflows across APIs and systems, reducing manual work."
    },
    {
      icon: Sparkles,
      title: "AI Product Assistant",
      description:
        "Embedded AI assistant that enhances product capabilities and helps users automate actions."
    }
  ]

  return (
    <section id="aisolutions" className="min-h-screen supports-[height:100svh]:min-h-[100svh] max-w-6xl mx-auto px-6 py-28 scroll-mt-32">

      <h2 className="text-4xl font-bold mb-4">
        AI Solutions
      </h2>

      <p className="text-gray-400 max-w-2xl mb-12">
        AI systems designed to automate workflows, support teams,
        and enhance product capabilities.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {automations.map((item, i) => {

          const Icon = item.icon

          return (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition group"
            >

              <div className="mb-4 text-indigo-400">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>

            </div>
          )
        })}

      </div>

      <a href="#contact" className="text-indigo-400 hover:underline mt-8 block">Let's discuss your automation needs →</a>

    </section>
  )
}