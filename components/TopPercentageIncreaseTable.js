// components/TopPercentageIncreaseTable.js
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

const fetcher = url => fetch(url).then(res => res.json());

function TopPercentageIncreaseTable() {
  const { data, error } = useSWR('/api/top-percentage-increase', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <table className={styles.customTable}>
        <thead className={styles.customThead}>
          <tr>
            <th className={styles.customTh}>País</th>
            <th className={styles.customTh}>Incremento en personas</th>
            <th className={styles.customTh}>Incremento porcentual</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.customTd}>{item.pais}</td>
              <td className={styles.customTd}>{item.incremento_personas}</td>
              <td className={styles.customTd}>{item.incremento_porcentual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopPercentageIncreaseTable;
