import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css"; // Import the CSS file directly
import "bootstrap/dist/css/bootstrap.min.css";

const ReportForm = () => {
  const [stolenItem, setStolenItem] = useState("");
  const [stolenTime, setStolenTime] = useState("");
  const [theftDescription, setTheftDescription] = useState("");
  const [location, setLocation] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
  
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setStolenItem(storedData.stolenItem || "");
      setStolenTime(storedData.stolenTime || "");
      setTheftDescription(storedData.theftDescription || "");
      setLocation(storedData.location || "");
    }
  }, [setStolenItem, setStolenTime, setTheftDescription, setLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { stolenItem, stolenTime, theftDescription, location };
    console.log("Form submitted:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowNotification(true);

    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    
  }; 

  return (
    <div className="report-form">
      <h2>Stolen Item Report</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="stolenItem">
          <Form.Label>What has been stolen?</Form.Label>
          <Form.Control type="text" placeholder="Enter stolen item" value={stolenItem} onChange={(e) => setStolenItem(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="stolenTime">
          <Form.Label>When was it stolen?</Form.Label>
          <Form.Control type="date" placeholder="Enter date and time of theft" value={stolenTime} onChange={(e) => setStolenTime(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location of theft:</Form.Label>
          <Form.Control type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="theftDescription">
          <Form.Label>Brief description of the theft:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" value={theftDescription} onChange={(e) => setTheftDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {showNotification && (
        <div className="notification">
          Form submitted! 
        </div>
      )}
    </div>
  );
};

export default ReportForm;
