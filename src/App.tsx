import Footer from './components/footer';
import Hero from './components/hero';
import HowItWorks from './components/howItWorks';
import Navbar from './components/navbar';
import { TabsDemo } from './components/tab';
import SearchBar from './components/searchbar';

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <div className="relative z-20 inset-x-0 top-[80%] sm:top-[50%] lg:top-[50%] mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 -mt-32">
          <TabsDemo />
        </div>
      </div>
      <div className="relative z-10 mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <SearchBar />
      </div>
      <div className="relative z-0 p-4 sm:p-8 lg:p-32 -mt-16">
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
}

export default App;