import Nav from './components/Nav';
import Hero from './components/Hero';
import Signature from './components/Signature';
import About from './components/About';
import Press from './components/Press';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-onsu-bg min-h-screen">
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
