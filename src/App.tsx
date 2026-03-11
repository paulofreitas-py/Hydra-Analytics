import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Automation from './components/Automation';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Differentials from './components/Differentials';
import FutureVision from './components/FutureVision';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Automation />
        <UseCases />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Differentials />
        <FutureVision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
