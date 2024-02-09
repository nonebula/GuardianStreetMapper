import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/";
import MapComponent from "./components/MapComponent/";
import ReportForm from "./components/ReportForm/";
import Footer from "./components/Footer/";
import PrivacyNotice from "./components/PrivacyNotice";
import TermsOfService from "./components/TermsOfService/";
import TipsAndInfo from "./components/TipsAndInformation/";
import Support from "./components/Support/";
import ContactUs from "./components/ContactUs";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/home" element={<MapComponent />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/tips" element={<TipsAndInfo />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
