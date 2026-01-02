import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="px-6 py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-tight">
          Your Name
        </span>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:opacity-70">Home</Link>
          <Link to="/work" className="hover:opacity-70">Work</Link>
          <Link to="/about" className="hover:opacity-70">About</Link>
          <Link to="/contact" className="hover:opacity-70">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
