// components/PopulationGrowthChart.js
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const PopulationGrowthChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/population-growth');
      const data = await res.json();

      const labels = data.map(item => item.pais);
      const values = data.map(item => parseFloat(item.porcentaje_crecimiento));

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Porcentaje de Crecimiento 1960-1970',
            data: values,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
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

export default PopulationGrowthChart;
