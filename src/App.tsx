import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Signature from './components/Signature';
import About from './components/About';
import Press from './components/Press';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#1A1612' }}>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Signature />
        <About />
        <Press />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
