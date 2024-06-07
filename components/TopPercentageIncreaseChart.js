// components/TopPercentageIncreaseChart.js
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopPercentageIncreaseChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/top-percentage-increase')
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
        label: 'Percentage Increase',
        data: data.map(item => item.incremento_porcentual),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default TopPercentageIncreaseChart;
