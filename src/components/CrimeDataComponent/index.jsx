import React, { useEffect, useState } from "react";
import { getCrimeData } from "./GetCrimeData/index.jsx";

const CrimeDataComponent = () => {
  const [crimeData, setCrimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latitude = 52.55355;
        const longitude = 0.1782;
        const date = "2023-12";

        console.log("Fetching crime data...");

        const data = await getCrimeData(latitude, longitude, date);

        console.log("Crime data fetched:", data);

        setCrimeData(data);
      } catch (error) {
        console.error("Error fetching crime data:", error);
      }
    };

    fetchData();
  }, []);

  if (!crimeData) {
    return <div>Loading...</div>;
  }

  return <div>{/* Display crime data here */}</div>;
};

export default CrimeDataComponent;
