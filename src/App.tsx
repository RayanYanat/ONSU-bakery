import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Signature from './components/Signature';
import About from './components/About';
import Press from './components/Press';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-onsu-bg">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Signature />
        <About />
        <Press />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
