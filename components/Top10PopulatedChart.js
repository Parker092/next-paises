// components/Top10PopulatedChart.js
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Top10PopulatedChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/top-10-populated')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.map(item => item.pais),
    datasets: [
      {
        label: 'Population',
        data: data.map(item => item.poblacion),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default Top10PopulatedChart;
