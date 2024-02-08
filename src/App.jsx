import React, { useState } from "react";

import Header from "./components/Header/";
import MapComponent from "./components/MapComponent/";
import ReportForm from "./components/ReportForm/";
import Footer from "./components/Footer/";

function App() {
  return (
    <div className="App">
      <Header />
      <MapComponent />
      <ReportForm />
      <Footer />
    </div>
  );
}

export default App;
