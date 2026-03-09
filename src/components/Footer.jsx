export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center gap-6 text-gray-400">

        <div className="text-sm">
          © {new Date().getFullYear()} Fernando Fauth
        </div>
      </div>
    </footer>
  )
}
