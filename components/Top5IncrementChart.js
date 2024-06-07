// components/TopPopulationIncreaseChart.js
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const TopPopulationIncreaseChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/top-5-increment');
      const data = await res.json();

      const labels = data.map(item => item.pais);
      const values = data.map(item => item.incremento_poblacion);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Incremento de Población 2017-2018',
            data: values,
            backgroundColor: 'rgba(153,102,255,0.4)',
            borderColor: 'rgba(153,102,255,1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default TopPopulationIncreaseChart;
