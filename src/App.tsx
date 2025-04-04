import React, { useState } from 'react';
import ResumenPanel from './components/Panel';


const App: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [hideNotification, setHideNotification] = useState(false);

  const handlePopUpShow = () => {
    setShowPopUp(true);
    setHideNotification(true);
  };

  return (
    <div className="min-h-screen bg-white">
        <ResumenPanel/>
    </div>
  );
};

export default App;
