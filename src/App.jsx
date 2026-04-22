import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/landing/Navbar'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { WorkPage } from '@/pages/WorkPage'
import { ProcessPage } from '@/pages/ProcessPage'
import { PricingPage } from '@/pages/PricingPage'
import { ContactPage } from '@/pages/ContactPage'
import { LegalPage } from '@/pages/LegalPage'

function App() {
  return (
    <div className="bg-black font-body text-foreground">
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage title="Privacy" />} />
          <Route path="/terms" element={<LegalPage title="Terms" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
