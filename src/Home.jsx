import React from 'react';
import './index.css'; 
import Navbarr from './Pages/NavBarr';
import Homee from './Pages/Homee';
import Journey from './Pages/Journey';
import Services from './Pages/Services';
import Trainings from './Pages/Trainings';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

const Home = () => {
  
  return (
    <div className="bg-slate-300">
      <Navbarr />

      <section id="home-section">
        <Homee />
      </section>

      <section id="journey-section">
        <Journey />
      </section>

      <section id="services-section">
        <Services />
      </section>

      <section id="trainings-section">
        <Trainings />
      </section>

      <section id="team-section">
        <Team />
      </section>

      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
