// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PopulationGrowthChart from '../components/PopulationGrowthChart';
import Top5IncrementChart from '../components/Top5IncrementChart';
import Top10PopulatedChart from '../components/Top10PopulatedChart';
import PopulationDecreaseTable from '../components/PopulationDecreaseTable';
import TopPercentageIncreaseTable from '../components/TopPercentageIncreaseTable';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Datos de Población</title>
        <meta name="description" content="Visualización de datos de población" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Datos de Población</h1>
        
        <div className={styles.grid}>
          <div className={styles.row}>
            <div className={styles.card}>
              <h2>Crecimiento de la Población 1960-1970</h2>
              <PopulationGrowthChart />
            </div>
            <div className={styles.card}>
              <h2>Incremento de Población 2017-2018</h2>
              <Top5IncrementChart />
            </div>
            <div className={styles.card}>
              <h2>Los 10 Países Más Poblados en 2018</h2>
              <Top10PopulatedChart />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <h2>Países que han bajado su Población entre 2000 y 2010</h2>
              <PopulationDecreaseTable />
            </div>
            <div className={styles.card}>
              <h2>Países que Incrementaron más su Población en Porcentaje entre 2017 y 2018</h2>
              <TopPercentageIncreaseTable />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
