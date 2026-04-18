import Nav from './components/Nav';
import Hero from './components/Hero';
import CraftStrip from './components/CraftStrip';
import Signature from './components/Signature';
import About from './components/About';
import Visit from './components/Visit';
import InstagramCTA from './components/Instagram';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-onsu-black min-h-screen">
      <Nav />
      <main>
        <Hero />
        <CraftStrip />
        <Signature />
        <About />
        <Visit />
        <InstagramCTA />
      </main>
      <Footer />
    </div>
  );
}
