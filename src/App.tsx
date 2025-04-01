import React, { useState } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import UrgentCallForm from './components/UrgentCallForm';
import Testimonials from './components/Testimonials';
import Form from './components/Form';
import News from './components/News';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
import Navbar from './components/Navbar';
import NotificationPopUp from './components/NotificationPopUp';

const App: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [hideNotification, setHideNotification] = useState(false);

  const handlePopUpShow = () => {
    setShowPopUp(true);
    setHideNotification(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <UrgentCallForm />
      <Testimonials />
      <Form />
      <News />
      <Footer />
      <PopUp onShow={showPopUp} onClose={() => setShowPopUp(false)} onPopUpShow={handlePopUpShow} />
      <NotificationPopUp forceHide={hideNotification} />
    </div>
  );
};

export default App;
