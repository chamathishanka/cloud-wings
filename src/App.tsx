import Footer from './components/footer';
import Hero from './components/hero';
import HowItWorks from './components/howItWorks';
import Navbar from './components/navbar';
import { TabsDemo } from './components/tab';

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <div className="absolute inset-x-0 top-[60%] sm:top-[40%] lg:top-[70%] mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <TabsDemo />
        </div>
      </div>
      <div className='p-32'>
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
}

export default App;