
import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import About    from './components/About.jsx'
import Services from './components/Services.jsx'
import Features from './components/Features.jsx'
import Tracking from './components/Tracking.jsx'
import Fleet    from './components/Fleet.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

export default function App() {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Page sections — IDs match navbar anchor links */}
      <main>
        <Hero />       {/* #home     – Hero banner with tagline & stats */}
        <About />      {/* #about    – Company profile & fleet stats    */}
        <Services />   {/* #services – 8 service cards with pricing     */}
        <Features />   {/* #features – Operational feature cards        */}
        <Tracking />   {/* #tracking – Mock tracking UI                 */}
        <Fleet />      {/* #fleet    – Photo gallery grid               */}
        <Contact />    {/* #contact  – Contact info, map, WhatsApp form */}
      </main>

      <Footer />
    </>
  )
}
