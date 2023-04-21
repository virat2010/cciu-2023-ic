'use client';
import { useState, useEffect } from 'react';

export default function Metrics() {
  // Define state variables to hold the fetched data and loading status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define an effect to fetch the data from the server
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const jsonData = await fetch("http://localhost:8080").then(res=>res.json());
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Render a loading message if the data is still being fetched
  if (loading) {
    return <p>Loading...</p>
  }

  // Render the fetched data if available
  return (
    <div>
      {data.length > 0 && (
        <div>
          <p>Mean: {data[0].mean}</p>
          <p>Median: {data[0].median}</p>
          <p>Mode: {data[0].mode}</p>
        </div>
      )}
      {data.length === 0 && (
        <p>No data available</p>
      )}
    </div>
  );
}
