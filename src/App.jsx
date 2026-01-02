import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative bg-light-bg dark:bg-dark-bg overflow-x-hidden selection:bg-primary/30 selection:text-primary-dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
