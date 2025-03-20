import Navigation from "../components/Navigation"
import Hero from "@/components/sections/Hero"
import Discount from "@/components/sections/Discount"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Location from "@/components/sections/Location"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function BarberiaLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navigation />
      <Hero />
      <Discount />
      <About />
      <Services />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

