import { Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Homee from './Pages/Homee';
import Journey from './Pages/Journey';
import Services from './Pages/Services';
import Trainings from './Pages/Trainings';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

import AI_Automation from './pages/services_pages/AI_Automation';
import Brand_Design from './pages/services_pages/Brand_Design';
import Coaching_Management from './pages/services_pages/Coaching_Management';
import Data_Analysis from './pages/services_pages/Data_Analysis';
import Digital_Media from './pages/services_pages/Digital_Media';
import Internal_Auditing from './pages/services_pages/Internal_Auditing';
import Sales_Intelligence from './pages/services_pages/Sales_Intelligence';
import Talent_Management from './pages/services_pages/Talent_Management';

import Everything from './pages/training_pages/everything';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homee" element={<Homee />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/service/ai_automation" element={<AI_Automation />} />
      <Route path="/service/brand_design" element={<Brand_Design />} />
      <Route path="/service/coaching_management" element={<Coaching_Management />} />
      <Route path="/service/data_analysis" element={<Data_Analysis />} />
      <Route path="/service/digital_media" element={<Digital_Media />} />
      <Route path="/service/internal_auditing" element={<Internal_Auditing />} />
      <Route path="/service/sales_intelligence" element={<Sales_Intelligence />} />
      <Route path="/service/talent_management" element={<Talent_Management />} />

      <Route path="/trainings/our_coaching_universe" element={<Everything />} />
    </Routes>
  );
}

export default App;