// pages/api/population-growth.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await query(`
      SELECT p.pais, (d.1970 - d.1960) AS incremento_total, 
      ROUND((((d.1970 - d.1960) / d.1960) * 100), 2) AS porcentaje_crecimiento 
      FROM datos d 
      JOIN paises p ON d.codigo = p.codigo 
      WHERE p.codigo IN ('DEU', 'ESP', 'FRA', 'ITA');
    `);

    console.log('Query Result:', result); // Agregar este registro en la consola

    res.status(200).json(result);
  } catch (e) {
    console.error('Database Query Error:', e.message); // Agregar este registro en la consola
    res.status(500).json({ message: e.message });
  }
}
