import React, { useState } from 'react';

import Header from './components/Header/Header';
import MapComponent from './components/MapComponent/MapComponent';
import ReportForm from './components/ReportForm/ReportForm';
import Footer from './components/Footer/Footer';
import CrimeData from './components/Policedata';

function App() {
  return (
    <div className="App">
      <Header />
      <MapComponent />
      <CrimeData />
      <ReportForm />
      <Footer />
    </div>
  );
}

export default App;