import { useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import AiSolutions from "./components/AiSolutions"

function useSectionJumpScroll() {
  const stateRef = useRef({
    sections: /** @type {HTMLElement[]} */ ([]),
    currentIndex: 0,
    locked: false,
  })

  useEffect(() => {
    const isMobileViewport = () => {
      // Tailwind's `md` breakpoint starts at 768px.
      return (
        window.matchMedia?.("(max-width: 767px)")?.matches ??
        window.innerWidth < 768
      )
    }

    const getNavbarOffset = (extra = 0) => {
      const nav = document.querySelector("nav")
      const navHeight = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 0
      return Math.max(12, Math.round(navHeight) + extra)
    }

    const scrollToSectionMobile = (section) => {
      const offset = getNavbarOffset(70)

      const anchor = section.querySelector("[data-section-anchor], h2, h1")
      const target = anchor instanceof HTMLElement ? anchor : section
      const top = target.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: "smooth" })
    }

    const scrollToSectionDesktop = (section) => {
      const offset = getNavbarOffset(12)
      const top = section.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }

    const scrollToSection = (section) => {
      if (isMobileViewport()) {
        scrollToSectionMobile(section)
      } else {
        scrollToSectionDesktop(section)
      }
    }

    const sections = Array.from(document.querySelectorAll("section")).filter(
      (el) => el instanceof HTMLElement
    )

    if (!sections.length) return

    stateRef.current.sections = sections

    const indexByEl = new Map(sections.map((el, idx) => [el, idx]))

    const observer = new IntersectionObserver(
      (entries) => {
        let bestTarget = null
        let bestRatio = 0

        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            bestTarget = entry.target
          }
        }

        if (bestTarget && indexByEl.has(bestTarget)) {
          stateRef.current.currentIndex = indexByEl.get(bestTarget) ?? 0
        }
      },
      { threshold: [0.35, 0.5, 0.65] }
    )

    for (const section of sections) observer.observe(section)

    const releaseLock = () => {
      stateRef.current.locked = false
    }

    const onWheel = (event) => {
      if (event.ctrlKey) return
      if (stateRef.current.locked) return

      const deltaY = event.deltaY
      if (Math.abs(deltaY) < 8) return

      const direction = deltaY > 0 ? 1 : -1
      const { sections: currentSections, currentIndex } = stateRef.current
      const currentSection = currentSections[currentIndex]
      if (!currentSection) return

      const scrollContainer = event.target?.closest?.(
        '[data-scroll-container="true"]'
      )

      if (scrollContainer) {
        const atTop = scrollContainer.scrollTop <= 0
        const atBottom =
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight - 1

        const atEdge = direction > 0 ? atBottom : atTop
        if (!atEdge) return
      } else {
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight
        const viewTop = window.scrollY
        const viewBottom = viewTop + viewportHeight

        const sectionTop = currentSection.offsetTop
        const sectionBottom = sectionTop + currentSection.offsetHeight

        const threshold = 24
        const atTop = viewTop <= sectionTop + threshold
        const atBottom = viewBottom >= sectionBottom - threshold
        const atEdge = direction > 0 ? atBottom : atTop
        if (!atEdge) return
      }

      const nextIndex = currentIndex + direction
      if (nextIndex < 0 || nextIndex >= currentSections.length) return

      event.preventDefault()
      stateRef.current.locked = true

      scrollToSection(currentSections[nextIndex])
      window.setTimeout(releaseLock, 650)
    }

    window.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", onWheel)
      observer.disconnect()
    }
  }, [])
}

export default function App() {
  useSectionJumpScroll()

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      {/* background glow */}
      <div className="glow top-[-200px] left-1/2 -translate-x-1/2 absolute"></div>

      {/* content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <AiSolutions />
        <Contact />
      </div>
    </div>
  )
}
