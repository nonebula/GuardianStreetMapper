import axios from "axios";

// const ApiKey = does it exist??

const getCrimeData = async (latitude, longitude, date) => {
  try {
    const response = await axios.get(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching crime data:", error);
    throw error;
  }
};

export default getCrimeData;
