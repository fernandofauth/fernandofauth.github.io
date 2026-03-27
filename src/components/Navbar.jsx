import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Github, Linkedin, Menu, X } from "lucide-react"

function XBrandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-6.78 7.74L23.5 22h-6.45l-5.05-6.6L6.2 22H2.99l7.24-8.27L.5 2h6.62l4.57 6.02L18.9 2Zm-1.13 18.08h1.78L6.11 3.84H4.2l13.57 16.24Z" />
    </svg>
  )
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/fernandofauth",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernandofauth/",
    Icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/nandofauth",
    Icon: XBrandIcon,
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleMobileNav = (id) => (e) => {
    e.preventDefault()

    // Update the URL without relying on the browser's default hash scrolling.
    try {
      history.replaceState(null, "", `#${id}`)
    } catch {
      // no-op
    }

    // Close the menu first; then scroll after the exit animation.
    setOpen(false)

    window.setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return

      const rawOffset = Number(el.dataset.scrollOffset ?? 0)
      const sectionOffset = Number.isFinite(rawOffset) ? rawOffset : 0
      const target = el.querySelector("[data-section-anchor]")
      const destination = target instanceof HTMLElement ? target : el
      const navbarOffsetPx = 20 + sectionOffset
      const top = destination.getBoundingClientRect().top + window.scrollY - navbarOffsetPx

      window.scrollTo({ top, behavior: "smooth" })
    }, 250)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#" className="font-semibold tracking-tight text-white">
            Fernando Fauth
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#credentials" className="hover:text-white transition">
              Credentials
            </a>
            <a href="#aisolutions" className="hover:text-white transition">
              AI Solutions
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:text-white transition"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white transition"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-5 pb-5 flex flex-col gap-4 text-gray-200">
                <div className="flex flex-col gap-2">
                  <a
                    href="#about"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                    onClick={handleMobileNav("about")}
                  >
                    About
                  </a>
                  <a
                    href="#credentials"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                    onClick={handleMobileNav("credentials")}
                  >
                    Credentials
                  </a>
                  <a
                    href="#aisolutions"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                    onClick={handleMobileNav("aisolutions")}
                  >
                    AI Solutions
                  </a>
                  <a
                    href="#contact"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                    onClick={handleMobileNav("contact")}
                  >
                    Contact
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white transition"
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
