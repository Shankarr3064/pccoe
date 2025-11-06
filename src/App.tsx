import Hero from './components/Hero';
import Problem from './components/Problem';
import Technology from './components/Technology';
import LastMile from './components/LastMile';
import TechnicalExcellence from './components/TechnicalExcellence';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import CallToAction from './components/CallToAction';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Technology />
      <LastMile />
      <TechnicalExcellence />
      <Impact />
      <Roadmap />
      <CallToAction />
    </div>
  );
}

export default App;
