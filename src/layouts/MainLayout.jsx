import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
