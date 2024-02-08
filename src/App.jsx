import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/";
import MapComponent from "./components/MapComponent/";
import ReportForm from "./components/ReportForm/";
import Footer from "./components/Footer/";
import PrivacyNotice from "./components/PrivacyNotice";
import TermsOfService from "./components/TermsOfService/";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={MapComponent} />
          <Route path="/report" component={ReportForm} />
          <Route path="/privacy" component={PrivacyNotice} />
          <Route path="/terms" component={TermsOfService} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;