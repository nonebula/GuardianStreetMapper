import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/";
import MapComponent from "./components/MapComponent";
import ReportForm from "./components/ReportForm/";
import About from "./components/About/";
import Footer from "./components/Footer/";
import PrivacyNotice from "./components/PrivacyNotice";
import TermsOfService from "./components/TermsOfService/";
import TipsAndInfo from "./components/TipsAndInformation/";
import Support from "./components/Support/";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
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

// Added to separate homepage from others
function HomePage() {
  return (
    <div className={styles.homePage}>
      <MapComponent />
      <div className={styles.formContainer}>
        <ReportForm />
      </div>
    </div>
  );
}

export default App;
