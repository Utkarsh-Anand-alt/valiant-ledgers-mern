import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Calculator from './components/Calculator.jsx';
import Offices from './components/Offices.jsx';
import Deadlines from './components/Deadlines.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-gold-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <Offices />
        <Deadlines />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
