import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const results = await query(`
      SELECT 
        p.pais, 
        (d.2018 - d.2017) AS incremento_poblacion 
      FROM 
        datos d
      JOIN 
        paises p ON d.codigo = p.codigo 
      ORDER BY 
        incremento_poblacion DESC 
      LIMIT 5
    `);
    res.status(200).json(results);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Database query error' });
  }
}
