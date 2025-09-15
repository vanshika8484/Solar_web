import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Projects = lazy(() => import('./components/Projects'))
const Product = lazy(() => import('./components/Product'))
const Workwithus = lazy(() => import('./components/Workwithus'))
const Contact = lazy(() => import('./components/Contact'))
// import Navbar2 from './components/Navbar2'
const SolarPanelPage = lazy(() => import('./components/SolarPanelPage'))
const SolarPumpPage = lazy(() => import('./components/SolarPumpPage'))
const MicroInverter = lazy(() => import('./components/MicroInverter'))
const Earthing = lazy(() => import('./components/Earthing'))
const La = lazy(() => import('./components/La'))
const GasGenset = lazy(() => import('./components/GasGenset'))
const Diesel = lazy(() => import('./components/Diesel'))
import Cursor from './components/Cursor'
import SocialIcons from './components/SocialIcons'
import ScrollToTop from './components/ScrollToTop'
const NewWorkWithUs = lazy(() => import('./components/NewWorkWithUs'))
const ProjectDetails = lazy(() => import('./components/ProjectDetails'))
const FiveService = lazy(() => import('./components/FiveService'))
const FirstService = lazy(() => import('./components/FirstService'))
const FourService = lazy(() => import('./components/FourService'))
const ThirdService = lazy(() => import('./components/ThirdService'))
const SecondService = lazy(() => import('./components/SecondService'))
import SolarLanding from './components/SolarLanding'
const Career = lazy(() => import('./components/Career'))
const PrivacySection = lazy(() => import('./components/PrivacySection'))
const SolarArticle = lazy(() => import('./components/SolarArticle'))
const SustainableProfitability = lazy(() => import('./components/SustainableProfitability'))
const BecomeOurIndividualPartner = lazy(() => import('./components/BecomeOurIndividualPartner'))
const AddOurServices = lazy(() => import('./components/AddOurServices'))
import WhatsAppButton from './components/WhatsAppButton'





function App() {


  return (
    <>
      <SolarLanding />
      <Cursor />

<WhatsAppButton />

      <ScrollToTop />

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600">Loading...</div>}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/workwithus" element={<NewWorkWithUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Solar-pannel" element={<SolarPanelPage />} />
        <Route path="/Solar-Pump" element={<SolarPumpPage />} />
        <Route path="/Micro-Inverter" element={<MicroInverter />} />
        <Route path="/Earthing" element={<Earthing />} />
        <Route path="/LA" element={<La />} />
        <Route path="/Diesel/Petrol Genset" element={<Diesel />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
        <Route path="/Installation_&_Commissioning_(INC)" element={<FirstService />} />
        <Route path="/Engineering_Procurement_and_Construction_(EPC)" element={<SecondService />} />
        <Route path="/Operations_&_Maintenance_(O&M)" element={<ThirdService />} />
        <Route path="/Annual_Maintenance_Contracts(AMC)" element={<FourService />} />
        <Route path="/Health_Check_ups" element={<FiveService />} />
        <Route path="/privacy" element={<PrivacySection />} />
        <Route path="/Blog1" element={<SolarArticle />} />
        <Route path="/Blog2" element={<SustainableProfitability />} />
         <Route path="/become-partner" element={<BecomeOurIndividualPartner />} />
        <Route path="/add-our-services" element={<AddOurServices />} />
      </Routes>
      </Suspense>

    </>
  )
}

export default App
