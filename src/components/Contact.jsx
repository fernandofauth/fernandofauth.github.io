import Footer from "./Footer"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen supports-[height:100svh]:min-h-[100svh] max-w-6xl mx-auto px-6 py-28 scroll-mt-32 md:scroll-mt-45 lg:scroll-mt-32"
    >
      <div
        data-scroll-container="true"
        className="max-w-6xl mx-auto w-full px-6 pt-28 pb-12"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 max-w-xl mb-10">
          Interested in building AI automation systems or exploring
          intelligent product capabilities? Let's talk.
        </p>

        <div className="flex gap-6 text-gray-300">

          <a
            href="mailto:fernandofauth@gmail.com"
            className="flex items-center gap-2 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>

          <a
            href="https://linkedin.com/in/fernando-fauth"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          <a
            href="https://x.com/nandofauth"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" ><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
          </a>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </section>
  )
}