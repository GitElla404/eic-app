import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Homee from './Pages/Homee';
import Journey from './Pages/Journey';
import Services from './Pages/Services';
import Trainings from './Pages/Trainings';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

const App = () => {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/homee" element={<Homee />} /> 
        <Route path="/journey" element={<Journey />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/trainings" element={<Trainings />} /> 
        <Route path="/team" element={<Team />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
  );
}

export default App;
