// components/PopulationDecreaseChart.js
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PopulationDecreaseChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/population-decrease')
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
        label: 'Population Decrease',
        data: data.map(item => item.decremento_porcentual),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default PopulationDecreaseChart;
