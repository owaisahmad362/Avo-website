
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import OurWorks from './Components/Home/OurWorks';
import AboutUs from './Components/Home/AboutUs';
import Welcome from './Components/Home/Welcome';
import Clock from './Components/Home/Clock';
import Portfolio from './Components/Home/Portfolio';
import Writting from './Components/Home/Writting';
import Board from './Components/Home/Board';
import Spiral from './Components/Home/Spiral';
import Clients from './Components/Home/Clients';
import Started from './Components/Home/Started';
import Recent from './Components/Home/Recent';
import Footer from './Components/Home/Footer';
import Team from './Components/About/Team';
import Cards from './Components/Blog/Cards';
import ContactUs from './Components/Contact/ContacUs';
import Map from './Components/Contact/Map';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Home />
          <AboutUs />
          <Welcome />
          <OurWorks />
          <Clock />
          <Portfolio />
          <Writting />
          <Board />
          <Spiral />
          <Clients />
          <Started />
          <Recent />
          <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
          <About />
          <AboutUs />
          <Welcome />
          <Started />
          <Team />
          <Clients />
          <Footer />
          </>
        } />
        <Route path="/work" element={
          <>
          <Work />
          <OurWorks />
          <Clock />
          <Portfolio />
          <Writting />
          <Board />
          <Spiral />
          <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
          <Blog />
          <Cards />
          <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
          <Contact />
          <ContactUs />
          <Map />
          <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
