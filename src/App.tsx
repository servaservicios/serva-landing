import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import FeaturedCategories from './components/FeaturedCategories'
import WhyServa from './components/WhyServa'
import Industries from './components/Industries'
import Process from './components/Process'
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <FeaturedCategories />
        <WhyServa />
        <Industries />
        <Process />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
