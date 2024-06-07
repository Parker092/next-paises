// components/PopulationDecreaseTable.js
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

const fetcher = url => fetch(url).then(res => {
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
});

function PopulationDecreaseTable() {
  const { data, error } = useSWR('/api/population-decrease', fetcher);

  if (error) return <div>Failed to load: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  if (!Array.isArray(data)) return <div>No data available</div>;

  return (
    <div>
      <table className={styles.customTable}>
        <thead className={styles.customThead}>
          <tr>
            <th className={styles.customTh}>País</th>
            <th className={styles.customTh}>Decremento en personas</th>
            <th className={styles.customTh}>Decremento porcentual</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.customTd}>{item.pais}</td>
              <td className={styles.customTd}>{item.decremento_personas}</td>
              <td className={styles.customTd}>{item.decremento_porcentual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PopulationDecreaseTable;
